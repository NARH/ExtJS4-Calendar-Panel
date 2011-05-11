/**
 * {{{ Nrt.calendar.AbstractView
 *
 */
Ext.define( 'Nrt.calendar.AbstractView', {
	  extend:				'Ext.Component'

	, tpl:					false

	/**
	 * {{{ initComponent method
	 *
	 */
	, initComponent:		function() {
		Ext.log( ' -- abstract component initilizing start -- ' + this.alias );
		var me	= this;

		Nrt.calendar.AbstractView.superclass.initComponent.call( this );
		me.addEvents(
		);
		Ext.log( ' -- abstract component initilizing done -- ' + this.alias );
	}
	// }}}

	, afterRender: function() {
		Ext.log( ' -- abstract component afterRender start -- ' + this.alias );
		Nrt.calendar.AbstractView.superclass.afterRender.call( this );
		Ext.log( ' -- abstract component afterRender done -- ' + this.alias );
	}
});
// }}}
// vim: foldmethod=maker tabstop=4 shiftwidth=4 autoindent
