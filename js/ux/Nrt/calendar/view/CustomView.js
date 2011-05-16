/**
 * {{{ Nrt.calendar.CustomView
 *
 */
Ext.define( 'Nrt.calendar.view.CustomView', {
	  extend:				'Nrt.calendar.view.AbstractView'
	, alias:				'widget.nrt.calendar.customview'

	/**
	 * {{{ initComponent method
	 *
	 */
	, initComponent:		function() {
		Nrt.log( ' -- component initilizing start -- ' + this.alias );
		var me	= this;

		me.html	= 'ここは CustomView';
		me.callParent();
		Nrt.log( ' -- component initilizing done -- ' + this.alias );
	}
	// }}}

	/**
	 * {{{ afterRender method
	 *
	 */
	, afterRender:			function() {
		Nrt.log( ' -- component afterRender start -- ' + this.alias );
		if( ! this.tpl ) {
			this.tpl		= Ext.create( 'Nrt.calendar.templates.WeekViewTemplate', {
				id:			this.id
			  , date:		new Date()
			  , name:		this.alias
			});
			this.tpl.compile();
		}
		this.callParent();
		Nrt.log( ' -- component afterRender done -- ' + this.alias );
	}
	// }}}
});
// }}}
// vim: foldmethod=maker commentstring=%s*%s : // tabstop=4 shiftwidth=4 autoindent
