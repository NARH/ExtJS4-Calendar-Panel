/**
 * {{{ Nrt.calendar.DayViewBody
 *
 */
Ext.define( 'Nrt.calendar.view.DayViewBody', {
	  extend:				'Ext.Component'
	, alias:				'widget.nrt.calendar.dayviewbody'

	, currentDay:			false
	, dayCount:				false
	, format:				'H:i'

	/**
	 * {{{ initComponent method
	 *
	 */
	, initComponent:		function() {
		Nrt.log( ' -- component initilizing start -- ' + this.alias );
		var me			= this;
		me.currentDay	= this.currentDay || Ext.Date.clearTime( new Date() );
		me.dayCount		= this.dayCount || 1;
		me.callParent( arguments );
		Nrt.log( ' -- dayCount:' + me.dayCount );
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
			me.tpl		= new Nrt.calendar.templates.DayViewBodyTemplate({
				id:			me.id
			});
		}
		me.tpl.compile();
       	me.addClass('nrt-cal-body-ct');

		me.callParent();

		var i = 0, days = []
			, dt	= new Date()
			, times	= [];

		for(; i < me.dayCount; i++ ) {
			days[i]		= Ext.Date.add( dt, Ext.Date.DAY, i );
		}

		dt = Ext.Date.clearTime( new Date() );

		for( i = 0; i < 24; i++ ) {
			times.push( Ext.Date.format( dt, me.format ) );
			dt = Ext.Date.add( dt, Ext.Date.HOUR, 1 );
		}

		me.tpl.overwrite( me.el, {
			  days:		days
			, dayCount:	me.dayCount
			, times:	times
		});
		Nrt.log( ' -- component afterRender done -- ' + this.alias );
	}
	// }}}
});
// }}}
// vim: foldmethod=maker commentstring=%s*%s : // tabstop=4 shiftwidth=4 autoindent
