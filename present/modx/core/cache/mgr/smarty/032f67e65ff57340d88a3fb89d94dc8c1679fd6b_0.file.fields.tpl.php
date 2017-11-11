<?php /* Smarty version 3.1.27, created on 2017-03-31 13:44:16
         compiled from "/home/x/xs290050/mango-digital.ru/public_html/debug/1016-present/modx/core/components/migx/templates/mgr/fields.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:151373948458de330014d1a7_36812836%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '032f67e65ff57340d88a3fb89d94dc8c1679fd6b' => 
    array (
      0 => '/home/x/xs290050/mango-digital.ru/public_html/debug/1016-present/modx/core/components/migx/templates/mgr/fields.tpl',
      1 => 1476802467,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '151373948458de330014d1a7_36812836',
  'variables' => 
  array (
    'OnResourceTVFormPrerender' => 0,
    'formcaption' => 0,
    'fields' => 0,
    'migxid' => 0,
    'win_id' => 0,
    'categories' => 0,
    'category' => 0,
    '_lang' => 0,
    'formnames' => 0,
    'multiple_formtabs_label' => 0,
    'tv' => 0,
    'item' => 0,
    'showCheckbox' => 0,
    'tvcount' => 0,
    'OnResourceTVFormRender' => 0,
  ),
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_58de3300179952_84608988',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_58de3300179952_84608988')) {
function content_58de3300179952_84608988 ($_smarty_tpl) {
if (!is_callable('smarty_function_cycle')) require_once '/home/x/xs290050/mango-digital.ru/public_html/debug/1016-present/modx/core/model/smarty/plugins/function.cycle.php';

$_smarty_tpl->properties['nocache_hash'] = '151373948458de330014d1a7_36812836';
echo $_smarty_tpl->tpl_vars['OnResourceTVFormPrerender']->value;?>


<?php if ($_smarty_tpl->tpl_vars['formcaption']->value != '') {?>
    <h2><?php echo $_smarty_tpl->tpl_vars['formcaption']->value;?>
</h2>
<?php }?> 

<input type="hidden" class="mulititems_grid_item_fields" name="mulititems_grid_item_fields" value='<?php echo $_smarty_tpl->tpl_vars['fields']->value;?>
' />
<input type="hidden" class="tvmigxid" name="tvmigxid" value='<?php echo $_smarty_tpl->tpl_vars['migxid']->value;?>
' />

<div id="modx-window-mi-grid-update-<?php echo $_smarty_tpl->tpl_vars['win_id']->value;?>
-tabs">
<?php
$_from = $_smarty_tpl->tpl_vars['categories']->value;
if (!is_array($_from) && !is_object($_from)) {
settype($_from, 'array');
}
$_smarty_tpl->tpl_vars['category'] = new Smarty_Variable;
$_smarty_tpl->tpl_vars['category']->_loop = false;
$_smarty_tpl->tpl_vars['__foreach_cat'] = new Smarty_Variable(array('iteration' => 0));
foreach ($_from as $_smarty_tpl->tpl_vars['category']->value) {
$_smarty_tpl->tpl_vars['category']->_loop = true;
$_smarty_tpl->tpl_vars['__foreach_cat']->value['iteration']++;
$_smarty_tpl->tpl_vars['__foreach_cat']->value['first'] = $_smarty_tpl->tpl_vars['__foreach_cat']->value['iteration'] == 1;
$foreach_category_Sav = $_smarty_tpl->tpl_vars['category'];
?>
<?php if (count($_smarty_tpl->tpl_vars['category']->value['tvs']) > 0) {?>

<?php if (count($_smarty_tpl->tpl_vars['categories']->value) < 2 || ((isset($_smarty_tpl->tpl_vars['__foreach_cat']->value['first']) ? $_smarty_tpl->tpl_vars['__foreach_cat']->value['first'] : null) && $_smarty_tpl->tpl_vars['category']->value['print_before_tabs'])) {?>
    <div id="modx-tv-tab<?php echo $_smarty_tpl->tpl_vars['category']->value['id'];?>
" >
<?php } else { ?>
    <div id="modx-tv-tab<?php echo $_smarty_tpl->tpl_vars['category']->value['id'];?>
" class="x-tab" title="<?php echo ucfirst((($tmp = @$_smarty_tpl->tpl_vars['category']->value['category'])===null||$tmp==='' ? $_smarty_tpl->tpl_vars['_lang']->value['uncategorized'] : $tmp));?>
">
<?php }?>

<?php if (count($_smarty_tpl->tpl_vars['formnames']->value) > 0) {?>
<?php if ((isset($_smarty_tpl->tpl_vars['__foreach_cat']->value['first']) ? $_smarty_tpl->tpl_vars['__foreach_cat']->value['first'] : null)) {?>
    <div class="x-form-item x-tab-item <?php echo smarty_function_cycle(array('values'=>",alt"),$_smarty_tpl);?>
 modx-tv" id="tvFormname-tr">
        <label for="tvFormname" class="modx-tv-label">
            <span class="modx-tv-caption" id="tvFormname-caption"><?php echo $_smarty_tpl->tpl_vars['multiple_formtabs_label']->value;?>
</span>
            <span class="modx-tv-reset" ></span> 
            <?php if ($_smarty_tpl->tpl_vars['tv']->value->descriptionX) {?><span class="modx-tv-description"><?php echo $_smarty_tpl->tpl_vars['tv']->value->descriptionX;?>
</span><?php }?>
        </label>
        <div class="x-form-element modx-tv-form-element" style="padding-left: 200px;">
        <select id="tvFormname" name="tvFormname">
            <?php
$_from = $_smarty_tpl->tpl_vars['formnames']->value;
if (!is_array($_from) && !is_object($_from)) {
settype($_from, 'array');
}
$_smarty_tpl->tpl_vars['item'] = new Smarty_Variable;
$_smarty_tpl->tpl_vars['item']->_loop = false;
foreach ($_from as $_smarty_tpl->tpl_vars['item']->value) {
$_smarty_tpl->tpl_vars['item']->_loop = true;
$foreach_item_Sav = $_smarty_tpl->tpl_vars['item'];
?>
	            <option value="<?php echo $_smarty_tpl->tpl_vars['item']->value['value'];?>
" <?php if ($_smarty_tpl->tpl_vars['item']->value['selected']) {?> selected="selected"<?php }?>><?php echo $_smarty_tpl->tpl_vars['item']->value['text'];?>
</option>
            <?php
$_smarty_tpl->tpl_vars['item'] = $foreach_item_Sav;
}
?>
        </select>
        </div>

        <br class="clear" />
    </div>
<?php echo '<script'; ?>
 type="text/javascript">
// <![CDATA[


MODx.combo.FormnameDropdown = function(config) {
    config = config || {};
    Ext.applyIf(config,{
        transform: 'tvFormname'
        ,id: 'tvFormname'
        ,triggerAction: 'all'
        ,width: 350
        ,allowBlank: true
        ,maxHeight: 300
        ,editable: false
        ,typeAhead: false
        ,forceSelection: false
        ,msgTarget: 'under'
        ,listeners: { 
		    'select': {fn:this.selectForm,scope:this}
		}});

    MODx.combo.FormnameDropdown.superclass.constructor.call(this,config);
    //this.config = config;
    //return this;
};
Ext.extend(MODx.combo.FormnameDropdown,Ext.form.ComboBox,{
	selectForm: function() {
		var win = Ext.getCmp('modx-window-mi-grid-update-<?php echo $_smarty_tpl->tpl_vars['win_id']->value;?>
');
        //win.fp.autoLoad.params.record_json=this.baseParams.record_json;
        win.switchForm();
		//panel.autoLoad.params['context']=this.getValue();
		//panel.doAutoLoad();
		//MODx.fireResourceFormChange();
	}
});
Ext.reg('modx-combo-formnamedropdown',MODx.combo.FormnameDropdown);

    MODx.load({
        xtype: 'modx-combo-formnamedropdown'

    });
    

// ]]>
<?php echo '</script'; ?>
>    
<?php }?>
<?php }?>
    
<?php
$_from = $_smarty_tpl->tpl_vars['category']->value['tvs'];
if (!is_array($_from) && !is_object($_from)) {
settype($_from, 'array');
}
$_smarty_tpl->tpl_vars['tv'] = new Smarty_Variable;
$_smarty_tpl->tpl_vars['tv']->_loop = false;
foreach ($_from as $_smarty_tpl->tpl_vars['tv']->value) {
$_smarty_tpl->tpl_vars['tv']->_loop = true;
$foreach_tv_Sav = $_smarty_tpl->tpl_vars['tv'];
?>

<?php if ($_smarty_tpl->tpl_vars['tv']->value->type == "description_is_code") {?>

    <?php echo $_smarty_tpl->tpl_vars['tv']->value->get('formElement');?>

   
<?php } elseif ($_smarty_tpl->tpl_vars['tv']->value->type != "hidden") {?>
    <div class="x-form-item x-tab-item <?php echo smarty_function_cycle(array('values'=>",alt"),$_smarty_tpl);?>
 modx-tv" id="tv<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
-tr" style="padding: 10px 0 0 ;<?php if ($_smarty_tpl->tpl_vars['tv']->value->display == "none") {?>display:none;<?php }?> ">
        <label for="tv<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
" class="x-form-item-label modx-tv-label" style="width: auto;margin-bottom: 10px;">
            <div class="modx-tv-label-title"> 
                <?php if ($_smarty_tpl->tpl_vars['showCheckbox']->value) {?><input type="checkbox" name="tv<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
-checkbox" class="modx-tv-checkbox" value="1" /><?php }?>
                <span class="modx-tv-caption" id="tv<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
-caption"><?php echo $_smarty_tpl->tpl_vars['tv']->value->caption;?>
</span>
            </div>    
            <a class="modx-tv-reset" id="modx-tv-reset-<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
" onclick="MODx.resetTV(<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
);" title="<?php echo $_smarty_tpl->tpl_vars['_lang']->value['set_to_default'];?>
"></a>
            
            <?php if ($_smarty_tpl->tpl_vars['tv']->value->description) {?><span class="modx-tv-label-description"><?php echo $_smarty_tpl->tpl_vars['tv']->value->description;?>
</span><?php }?>
        </label>
        <?php if ($_smarty_tpl->tpl_vars['tv']->value->inherited) {?><br /><span class="modx-tv-inherited"><?php echo $_smarty_tpl->tpl_vars['_lang']->value['tv_value_inherited'];?>
</span><?php }?>
        <div class="x-form-clear-left"></div>
        <div class="x-form-element modx-tv-form-element" style="padding-left: 0px;">
            <input type="hidden" id="tvdef<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
" value="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['tv']->value->default_text, ENT_QUOTES, 'UTF-8', true);?>
" />
            <?php echo $_smarty_tpl->tpl_vars['tv']->value->get('formElement');?>

        </div>

        <br class="clear" />
    </div>
    <?php echo '<script'; ?>
 type="text/javascript">Ext.onReady(function() { new Ext.ToolTip({target: 'tv<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
-caption',html: '[[*<?php echo $_smarty_tpl->tpl_vars['tv']->value->name;?>
]]'});});<?php echo '</script'; ?>
>
<?php } else { ?>
    <input type="hidden" id="tvdef<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
" value="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['tv']->value->default_text, ENT_QUOTES, 'UTF-8', true);?>
" />
    <?php echo $_smarty_tpl->tpl_vars['tv']->value->get('formElement');?>

<?php }?>
    <?php
$_smarty_tpl->tpl_vars['tv'] = $foreach_tv_Sav;
}
?>

    </div>
    
<?php }?>
<?php
$_smarty_tpl->tpl_vars['category'] = $foreach_category_Sav;
}
?>
</div>

<?php if (count($_smarty_tpl->tpl_vars['categories']->value) > 1) {?>

<?php echo '<script'; ?>
 type="text/javascript">
// <![CDATA[
Ext.onReady(function() {    

    MODx.load({
        xtype: 'modx-tabs'
        ,applyTo: 'modx-window-mi-grid-update-<?php echo $_smarty_tpl->tpl_vars['win_id']->value;?>
-tabs'
        ,activeTab: 0
        ,autoTabs: true
        ,border: false
        ,plain: true
        ,width: '98%'
        ,hideMode: 'offsets'
        ,defaults: {
            bodyStyle: 'padding: 5px;'
            ,autoHeight: true
        }
        ,deferredRender: false
    });
	<?php if ($_smarty_tpl->tpl_vars['tvcount']->value > 0) {?>
    <?php }?>
});    
// ]]>
<?php echo '</script'; ?>
>

<?php }?>
<?php echo $_smarty_tpl->tpl_vars['OnResourceTVFormRender']->value;?>


<br class="clear" /><?php }
}
?>