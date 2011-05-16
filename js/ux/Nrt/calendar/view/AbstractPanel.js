/**
 * {{{ Nrt.calendar.AbstractPanel
 *
 */
Ext.define( 'Nrt.calendar.view.AbstractPanel', {
	  extend:				'Ext.panel.Panel'

	/**
	 * {{{ initComponent method
	 *
	 */
	, initComponent:		function() {
		Nrt.log( ' -- abstract panel initilizing start -- ' + this.alias );
		var me	= this;

		me.callParent( arguments );
		Nrt.log( ' -- abstract panel initilizing done -- ' + this.alias );
	}
	// }}}
});
// }}}
// vim: foldmethod=maker commentstring=%s*%s : // tabstop=4 shiftwidth=4 autoindent
