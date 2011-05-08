/**
 * {{{ NRT.calendar.WeekView
 *
 */
Ext.define( 'NRT.calendar.WeekView', {
	  extend:				'NRT.calendar.AbstractView'
	, alias:				'widget.nrt.calendar.weekview'

	/**
	 * {{{ initComponent method
	 *
	 */
	, initComponent:		function() {
		console.log( ' -- component initilizing start -- ' + this.alias );
		var me	= this;

		me.html	= 'ここは WeekView';
		me.callParent();
		console.log( ' -- component initilizing done -- ' + this.alias );
	}
	// }}}
});
// }}}
// vim: foldmethod=maker tabstop=4 shiftwidth=4 autoindent

