/**
 * {{{ Nrt.calendar.AbstractView
 *
 */
Ext.define( 'Nrt.calendar.view.AbstractView', {
	  extend:				'Ext.Component'

	, tpl:					false

	/**
	 * {{{ initComponent method
	 *
	 */
	, initComponent:		function() {
		Nrt.log( ' -- abstract component initilizing start -- ' + this.alias );
		var me	= this;

		me.callParent( arguments );
		Nrt.log( ' -- abstract component initilizing done -- ' + this.alias );
	}
	// }}}
});
// }}}
// vim: foldmethod=maker commentstring=%s*%s : // tabstop=4 shiftwidth=4 autoindent
