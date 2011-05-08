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
});
// }}}
// vim: foldmethod=maker tabstop=4 shiftwidth=4 autoindent
