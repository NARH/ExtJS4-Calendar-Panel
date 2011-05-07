/**
 * {{{ NRT.calendar.Panel
 *
 */
Ext.define( 'NRT.calendar.Panel', {
	  extend:				'NRT.calendar.AbstractPanel'
	, alias:				'widget.calendar'

	, dockedItems:			[
		  { xtype:	'calendar.controll', dock:	'top' }
	]
});
// }}}
// vim: foldmethod=maker tabstop=4 shiftwidth=4 autoindent
