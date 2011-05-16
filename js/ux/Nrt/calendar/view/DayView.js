/**
 * {{{ Nrt.calendar.DayView
 *
 */
Ext.define( 'Nrt.calendar.view.DayView', {
	  extend:				'Nrt.calendar.view.AbstractPanel'
	, alias:				'widget.nrt.calendar.dayview'

	, initComponent:		function() {
		Nrt.log( ' -- component initilizing start -- ' + this.alias );
		var me	= this;
		this.callParent( arguments );
		Nrt.log( ' -- component initilizing done -- ' + this.alias );
	}
});
// }}}
// vim: foldmethod=maker commentstring=%s*%s : // tabstop=4 shiftwidth=4 autoindent
