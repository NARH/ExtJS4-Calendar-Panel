/**
 * {{{ NRT.calendar.MonthView
 *
 */
Ext.define( 'NRT.calendar.MonthView', {
	  extend:				'NRT.calendar.AbstractView'
	, alias:				'widget.nrt.calendar.monthview'

	/**
	 * {{{ initComponent method
	 *
	 */
	, initComponent:		function() {
		console.log( ' -- component initilizing start -- ' + this.alias );
		var me	= this;

		me.html	= 'ここは MonthView';
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
			this.tpl		= new NRT.calendar.templates.MonthViewTemplate({
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

