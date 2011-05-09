/**
 * {{{ NRT.calendar.AbstractView
 *
 */
Ext.define( 'NRT.calendar.AbstractView', {
	  extend:				'Ext.Component'

	, tpl:					false

	/**
	 * {{{ initComponent method
	 *
	 */
	, initComponent:		function() {
		console.log( ' -- abstract component initilizing start -- ' + this.alias );
		var me	= this;

		NRT.calendar.AbstractView.superclass.initComponent.call( this );
		me.addEvents(
		);
		console.log( ' -- abstract component initilizing done -- ' + this.alias );
	}
	// }}}

	, afterRender: function() {
		console.log( ' -- abstract component afterRender start -- ' + this.alias );
		NRT.calendar.AbstractView.superclass.afterRender.call( this );
		console.log( ' -- abstract component afterRender done -- ' + this.alias );
	}
});
// }}}
// vim: foldmethod=maker tabstop=4 shiftwidth=4 autoindent
