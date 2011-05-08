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
});
// }}}
// vim: foldmethod=maker tabstop=4 shiftwidth=4 autoindent

