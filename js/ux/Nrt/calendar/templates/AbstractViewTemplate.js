/**
 * {{{ Nrt.calendar.templates.AbstractViewTemplate
 *
 */
Ext.define( 'Nrt.calendar.templates.AbstractViewTemplate', {
	  extend:				'Ext.XTemplate'

	, template:				[
	]

	, constructor:			function() {
		var me	= this
			, tpl	= this.template;

		if( Ext.isArray( arguments ) ) {
			this.callParent( arguments.concat( tpl ) );
		}
		else {
			if( arguments.length > 0 ) {
				this.callParent( tpl.concat( arguments ) );
			}
			else {
				this.callParent( tpl );
			}
		}
	}

});
// }}}
// vim: foldmethod=maker commentstring=%s*%s : // tabstop=4 shiftwidth=4 autoindent
