<?php
/**
 *
 * @var xPDOObject $object
 * @var array $options
 */
if ($object->xpdo) {
	/** @var modX $modx */
	$modx =& $object->xpdo;

	switch ($options[xPDOTransport::PACKAGE_ACTION]) {
		case xPDOTransport::ACTION_INSTALL:
		case xPDOTransport::ACTION_UPGRADE:
			if (file_exists(MODX_CORE_PATH . 'components/minifyx/munee/munee.phar')) {
				@unlink(MODX_CORE_PATH . 'components/minifyx/munee/munee.phar');
			}
			break;

		case xPDOTransport::ACTION_UNINSTALL: break;
	}
}
return true;