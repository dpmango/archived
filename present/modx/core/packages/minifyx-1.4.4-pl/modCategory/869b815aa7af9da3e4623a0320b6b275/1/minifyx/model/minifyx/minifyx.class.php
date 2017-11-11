<?php

class MinifyX {
	/** @var modX $modx */
	public $modx = null;


	function __construct(modX &$modx,array $config = array()) {
		$this->modx =& $modx;

		$corePath = $this->modx->getOption('core_path').'components/minifyx/';
		$assetsPath = $this->modx->getOption('assets_path').'components/minifyx/';
		$this->config = array_merge(array(
			'corePath' => $corePath,
			'modelPath' => $corePath.'model/',
			'basePath' => MODX_BASE_PATH,

			'cacheFolder' => $this->modx->getOption('minifyx_cacheFolder', null, $assetsPath . 'cache/', true),

			'jsSources' => '',
			'cssSource' => '',

			'cssFilename' => 'styles',
			'jsFilename' => 'scripts',

			'minifyJs' => false,
			'minifyCss' => false,

			'registerCss' => 'default',
			'registerJs' => 'default',

			'forceUpdate' => false,
			'munee_cache' => MODX_CORE_PATH . 'cache/default/munee/',
			'hash_length' => 10,
		),$config);

		$this->config['jsExt'] = $this->config['minifyJs'] ? '.min.js' : '.js';
		$this->config['cssExt'] = $this->config['minifyCss'] ? '.min.css' : '.css';

		if (empty($this->config['cacheFolder'])) {
			$this->config['cacheFolder'] = $assetsPath;
		}
	}


	/**
	 * Prepare string or array of files fo send in Munee
	 *
	 * @param array|string $files
	 *
	 * @return string
	 */
	public function prepareFiles($files) {
		if (is_string($files)) {
			$files = array_map('trim', explode(',', $files));
		}

		if (!is_array($files)) {return '';}
		$site_url = $this->modx->getOption('site_url');

		$output = array();
		foreach ($files as $file) {
			if (!empty($file) && $file[0] !== '-') {
				$file = str_replace(MODX_BASE_PATH, '', $file);
				$file = str_replace($site_url, '', $file);

				if (!preg_match('#(http|https)://#', $file) && $file[0] != '/') {
					$file = '/' . $file;
				}

				if ($tmp = parse_url($file)) {
					// Adding file
					$output[] = $tmp['path'];

					// Parse file properties if set
					if (!empty($tmp['query'])) {
						$tmp2 = explode('&', $tmp['query']);
						foreach ($tmp2 as $v) {
							if ($tmp3 = explode('=', $v)) {
								$_GET[$tmp3[0]] = @$tmp3[1];
							}
						}
					}
				}
			}
		}

		return implode(',', $output);
	}


	/**
	 * Process files with Munee library
	 * http://mun.ee
	 *
	 * @param string $files
	 * @param array $options Array with options for Munee class
	 *
	 * @return string
	 */
	public function Munee($files, $options = array()) {
		if (!defined('WEBROOT')) {
			define('WEBROOT', MODX_BASE_PATH);
		}
		if (!defined('MUNEE_CACHE')) {
			define('MUNEE_CACHE', $this->getTmpDir());
		}

		require_once $this->config['corePath'] . 'munee/vendor/autoload.php';

		try {
			$Request = new \Munee\Request($options);
			$Request->setFiles($files);
			foreach ($options as $k => $v) {
				$Request->setRawParam($k, $v);
			}
			$Request->init();

			/** @var \Munee\Asset\Type $AssetType */
			$AssetType = \Munee\Asset\Registry::getClass($Request);
			$AssetType->init();

			if (!empty($options['setHeaders'])) {
				if (isset($options['headerController']) && $options['headerController'] instanceof \Munee\Asset\HeaderSetter) {
					$headerController = $options['headerController'];
				} else {
					$headerController = new \Munee\Asset\HeaderSetter;
				}
				/** @var \Munee\Response $Response */
				$Response = new \Munee\Response($AssetType);
				$Response->setHeaderController($headerController);
				$Response->setHeaders(isset($options['maxAge']) ? $options['maxAge'] : 0);
			}

			return $AssetType->getContent();
		}
		catch (\Munee\ErrorException $e) {
			$error = $e->getMessage();
			if ($prev = $e->getPrevious()) {
				$error .= ': '. $e->getPrevious()->getMessage();
			}
			$this->modx->log(modX::LOG_LEVEL_ERROR, '[MinifyX] ' . $error);
			return '';
		}
	}


	/**
	 * Checks and creates cache dir for storing prepared scripts and styles
	 *
	 * @return bool|string
	 */
	public function prepareCacheFolder() {
		$path = trim(str_replace(MODX_BASE_PATH, '', trim($this->config['cacheFolder'])), '/');

		if (!file_exists(MODX_BASE_PATH . $path)) {
			$this->makeDir($path);
		}

		if (substr($path, -1) !== '/') {
			$path .= '/';
		}

		$this->config['cacheFolder'] = MODX_BASE_PATH . $path;
		return file_exists($this->config['cacheFolder']);
	}



	/**
	 * Get the latest cached files for current options
	 *
	 * @param string $prefix
	 * @param string $extension
	 *
	 * @return array
	 */
	public function getCachedFiles($prefix = '', $extension = '') {
		$cached = array();

		$regexp = $prefix;
		$regexp .= '[a-z0-9]{'.$this->config['hash_length'].'}.*';
		if (!empty($extension)) {
			$regexp .= '?' . str_replace('.', '\.', $extension);
		}

		$files = scandir($this->config['cacheFolder']);
		foreach ($files as $file) {
			if (preg_match("/$regexp/i", $file, $matches)) {
				$cached[] = $file;
			}
		}

		return $cached;
	}


	/**
	 * Save data in cache file
	 *
	 * @param $data
	 * @param string $prefix
	 * @param string $extension
	 *
	 * @return bool|string
	 */
	public function saveFile($data, $prefix = '', $extension = '') {
		$cached = $this->getCachedFiles($prefix, $extension);
		$hash = substr(sha1($data), 0, $this->config['hash_length']);
		$filename = $prefix . $hash . $extension;

		$tmp = array_flip($cached);
		if (!isset($tmp[$filename])) {
			if (!file_put_contents($this->config['cacheFolder'] . $filename, $data)) {
				$this->modx->log(modX::LOG_LEVEL_ERROR, '[MinifyX] Could not save cache file '. $this->config['cacheFolder'] . $filename);
				return false;
			}
		}

		return $filename;
	}


	/**
	 * Recursive create of directories by specified path
	 *
	 * @param $path
	 *
	 * @return bool
	 */
	public function makeDir($path = '') {
		if (empty($path)) {return false;}
		elseif (file_exists($path)) {return true;}

		$base = strpos($path, MODX_CORE_PATH) !== false
			? MODX_CORE_PATH
			: MODX_BASE_PATH;
		$tmp = explode('/', str_replace($base, '', $path));
		$path = $base;
		foreach ($tmp as $v) {
			if (!empty($v)) {
				$path .= $v . '/';
				if (!file_exists($path)) {
					mkdir($path);
				}
			}
		}
		return file_exists($path);
	}


	/**
	 * Recursive remove of a directory
	 *
	 * @param $dir
	 *
	 * @return bool
	 */
	public function removeDir($dir) {
		$dir = rtrim($dir, '/');
		if (is_dir($dir)) {
			$list = scandir($dir);
			foreach ($list as $file) {
				if ($file[0] == '.') {continue;}
				elseif (is_dir($dir . '/' . $file)) {
					$this->removeDir($dir . '/' . $file);
				}
				else {
					@unlink($dir . '/' . $file);
				}
			}
		}
		@rmdir($dir);

		return !file_exists($dir);
	}


	/**
	 * Prepares and returns path to temporary directory for storing Munee cache
	 *
	 * @return bool
	 */
	public function getTmpDir() {
		$dir = str_replace('//', '/', $this->config['munee_cache']);

		if ($this->makeDir($dir)) {
			return $dir;
		}
		else {
			return false;
		}
	}


	/**
	 * Removes cache files
	 *
	 * @return bool
	 */
	public function clearCache() {
		if ($this->prepareCacheFolder()) {
			$cached = $this->getCachedFiles();
			foreach ($cached as $file) {
				unlink($this->config['cacheFolder'] . $file);
			}
		}

		if ($dir = $this->getTmpDir()) {
			return $this->removeDir($dir);
		}

		return false;
	}
}
