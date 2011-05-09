/**
 * {{{ NRT.calendar.DayView
 *
 */
Ext.define( 'NRT.calendar.DayView', {
	  extend:				'NRT.calendar.AbstractView'
	, alias:				'widget.nrt.calendar.dayview'

	/**
	 * {{{ initComponent method
	 *
	 */
	, initComponent:		function() {
		console.log( ' -- component initilizing start -- ' + this.alias );
		var me	= this;

		me.html	= 'ここは DayView';
		me.callParent();
		console.log( ' -- component initilizing done -- ' + this.alias );
	}
	// }}}

	/**
	 * {{{ afterRender method
	 *
	 */
	, afterRender:			function() {
		console.log( ' -- component afterRender start -- ' + this.alias );
		if( ! this.tpl ) {
			this.tpl		= new NRT.calendar.templates.DayViewTemplate({
				id:			this.id
			});
			this.tpl.compile();
		}
		this.callParent();
		console.log( ' -- component afterRender done -- ' + this.alias );
		this.tpl.overwrite(this.el,{
			  date:		new Date()
			, name:		this.alias
		});
	}
	// }}}
});
// }}}
// vim: foldmethod=maker tabstop=4 shiftwidth=4 autoindent
