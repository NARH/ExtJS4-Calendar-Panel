/**
 * {{{ Nrt.calendar.DayView
 *
 */
Ext.define( 'Nrt.calendar.view.DayView', {
	  extend:				'Nrt.calendar.view.AbstractView'
	, alias:				'widget.nrt.calendar.dayview'

	, dayCount: 			1

	, initComponent:		function() {
		Nrt.log( ' -- component initilizing start -- ' + this.alias );
		var me	= this;
		Nrt.log( ' -- debug: ' + this.dayCount );
        me.addCls('nrt-cal-dayview nrt-cal-ct');
		this.callParent( arguments );
		Nrt.log( ' -- component initilizing done -- ' + this.alias );
	}
});
// }}}
// vim: foldmethod=maker commentstring=%s*%s : // tabstop=4 shiftwidth=4 autoindent
