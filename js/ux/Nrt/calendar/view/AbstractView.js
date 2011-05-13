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

		Nrt.calendar.view.AbstractView.superclass.initComponent.call( this );
		me.addEvents(
		);
		Nrt.log( ' -- abstract component initilizing done -- ' + this.alias );
	}
	// }}}

	/**
	 * {{{ afterRender method
	 *
	 */
	, afterRender: function() {
		Nrt.log( ' -- abstract component afterRender start -- ' + this.alias );
		Nrt.calendar.view.AbstractView.superclass.afterRender.call( this );
		Nrt.log( ' -- abstract component afterRender done -- ' + this.alias );
	}
	// }}}
});
// }}}
// vim: foldmethod=maker commentstring=%s*%s : // tabstop=4 shiftwidth=4 autoindent
