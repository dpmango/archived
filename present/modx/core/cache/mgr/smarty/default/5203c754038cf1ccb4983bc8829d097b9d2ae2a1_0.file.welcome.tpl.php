<?php /* Smarty version 3.1.27, created on 2017-03-31 13:40:33
         compiled from "/home/x/xs290050/mango-digital.ru/public_html/debug/1016-present/modx/manager/templates/default/welcome.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:124845985158de3221648778_48517618%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '5203c754038cf1ccb4983bc8829d097b9d2ae2a1' => 
    array (
      0 => '/home/x/xs290050/mango-digital.ru/public_html/debug/1016-present/modx/manager/templates/default/welcome.tpl',
      1 => 1476802214,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '124845985158de3221648778_48517618',
  'variables' => 
  array (
    'dashboard' => 0,
  ),
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_58de322164a0e3_43804468',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_58de322164a0e3_43804468')) {
function content_58de322164a0e3_43804468 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '124845985158de3221648778_48517618';
?>
<div id="modx-panel-welcome-div"></div>

<div id="modx-dashboard" class="dashboard">
<?php echo $_smarty_tpl->tpl_vars['dashboard']->value;?>

</div><?php }
}
?>