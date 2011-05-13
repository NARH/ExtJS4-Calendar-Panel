/**
 * {{{ Nrt.calendar.DayViewHeader
 *
 */
Ext.define( 'Nrt.calendar.view.DayViewHeader', {
	  extend:				'Nrt.calendar.view.AbstractView'
	, alias:				'widget.nrt.calendar.dayviewheader'

	, currentDay:			false
	, dayCount:				false

	/**
	 * {{{ initComponent method
	 *
	 */
	, initComponent:		function() {
		Nrt.log( ' -- component initilizing start -- ' + this.alias );
		var me			= this;
		me.currentDay	= this.currentDay || Ext.Date.clearTime( new Date() );
		me.dayCount		= this.dayCount || 1;
		me.callParent();
		Nrt.log( ' -- component initilizing done -- ' + this.alias );
	}
	// }}}

	/**
	 * {{{ afterRender method
	 *
	 */
	, afterRender:			function() {
		Nrt.log( ' -- component afterRender start -- ' + this.alias );
		var me	= this;
		if( ! me.tpl ) {
			me.tpl		= new Nrt.calendar.templates.DayViewHeaderTemplate({
				id:			me.id
			});
		}
		me.tpl.compile();
       	me.addClass('nrt-cal-header-ct');

		me.callParent();

		me.tpl.overwrite( me.el, {
		});
		Nrt.log( ' -- component afterRender done -- ' + this.alias );
	}
	// }}}
});
// }}}
// vim: foldmethod=maker commentstring=%s*%s : // tabstop=4 shiftwidth=4 autoindent

