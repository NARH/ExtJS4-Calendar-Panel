/**
 * {{{ Nrt.calendar.DayView
 *
 */
Ext.define( 'Nrt.calendar.view.DayView', {
	  extend:				'Nrt.calendar.view.AbstractView'
	, alias:				'widget.nrt.calendar.dayview'

	, dayCount: 			false

	, initComponent:		function() {
		Nrt.log( ' -- component initilizing start -- ' + this.alias );
		var me	= this;
        me.addCls('nrt-cal-dayview nrt-cal-ct');
		for(item in me.items) {
			me.items[item].ownerCt	=	me;
			me.items[item].dayCount	=	me.dayCount;
		}
		this.callParent( arguments );
		Nrt.log( ' -- component initilizing done -- ' + this.alias );
	}
});
// }}}
// vim: foldmethod=maker commentstring=%s*%s : // tabstop=4 shiftwidth=4 autoindent
