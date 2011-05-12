/**
 * {{{ Nrt.calendar.DayView
 *
 */
Ext.define( 'Nrt.calendar.DayView', {
	  extend:				'Nrt.calendar.AbstractView'
	, alias:				'widget.nrt.calendar.dayview'

	/**
	 * {{{ initComponent method
	 *
	 */
	, initComponent:		function() {
		Nrt.log( ' -- component initilizing start -- ' + this.alias );
		var me	= this;

		me.html	= 'ここは DayView';
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
		if( ! this.tpl ) {
			this.tpl		= new Nrt.calendar.templates.DayViewTemplate({
				id:			this.id
			});
		}
		this.tpl.compile();
       	this.addClass('nrt-cal-body-ct');

		this.callParent();
		Nrt.log( ' -- component afterRender done -- ' + this.alias );

		this.today = Ext.Date.clearTime( new Date() );
		this.dayCount = this.dayCount || 1;

		var i = 0, days = []
			, dt = new Date()
			, times;

		for(; i < this.dayCount; i++ ) {
			days[i] = Ext.Date.add( dt, Ext.Date.DAY, i );
		}
		Nrt.log( ' -- applyTemplate debug-1 -- ' + days );

		times = [];
		dt = Ext.Date.clearTime( new Date() );
		
		for( i=0; i<24; i++ ) {
			times.push( Ext.Date.format( dt, 'H:i' ) );
			dt = Ext.Date.add( dt, Ext.Date.HOUR, 1 );
		}
		Nrt.log( ' -- applyTemplate debug-2 -- ' + times );

		this.tpl.overwrite(this.el,{
			  days:		days
			, dayCount:	days.length
			, times:	times
		});
	}
	// }}}
});
// }}}
// vim: foldmethod=maker tabstop=4 shiftwidth=4 autoindent