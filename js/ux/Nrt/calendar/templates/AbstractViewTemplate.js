/**
 * {{{ Nrt.calendar.templates.AbstractViewTemplate
 *
 */
Ext.define( 'Nrt.calendar.templates.AbstractViewTemplate', {
	  extend:				'Ext.Component'

	, template:				[
	]

	/**
	 * {{{ constructor
	 *
	 */
	, constructor:			function( config ) {
		var me = this;
		me.callParent( arguments );
		me.initConfig( config );

		me.reloadTemplate();
		return me;
	}
	// }}}

	/**
	 * {{{ reloadTemplate method
	 *
	 */
	, reloadTemplate:		function() {
		Nrt.log( '--- templae reloadTemplate start ---' );
		var me = this;
		me._template = Ext.isObject( me.template ) ? me.template
			: new Ext.XTemplate( me.template );
		Ext.applyIf( me._template, me );
		me._template.compile();
		me.reload();
		Nrt.log( '--- templae reloadTemplate done ---' );
	}
	// }}}

	/**
	 * {{{ reload method
	 *
	 */
	, reload:				function() {
		Nrt.log( '--- templae reload start ---' );
		var me = this;
		me.update( me._template.apply( me ) );
		Nrt.log( '--- templae reload done ---' );
	}
	// }}}

	/**
	 * {{{ overwrite method
	 *
	 */
	, overwrite:			function( el, config ) {
		var me = this;
		me._template.overwrite( el, config );
	}
	// }}}

	/**
	 * {{{ compile method
	 *
	 */
	, compile:				function() {
		var me = this;
		return me._template.compile();
	}
	// }}}

});
// }}}
// vim: foldmethod=maker commentstring=%s*%s : // tabstop=4 shiftwidth=4 autoindent
