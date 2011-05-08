/**
 * {{{ NRT.calendar.CustomView
 *
 */
Ext.define( 'NRT.calendar.CustomView', {
	  extend:				'NRT.calendar.AbstractView'
	, alias:				'widget.nrt.calendar.customview'

	/**
	 * {{{ initComponent method
	 *
	 */
	, initComponent:		function() {
		console.log( ' -- component initilizing start -- ' + this.alias );
		var me	= this;

		me.html	= 'ここは CustomView';
		me.callParent();
		console.log( ' -- component initilizing done -- ' + this.alias );
	}
	// }}}
});
// }}}
// vim: foldmethod=maker tabstop=4 shiftwidth=4 autoindent


