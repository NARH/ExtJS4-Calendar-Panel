/**
 * {{{ Nrt.calendar.TodoView
 *
 */
Ext.define( 'Nrt.calendar.view.TodoView', {
	  extend:				'Nrt.calendar.view.AbstractView'
	, alias:				'widget.nrt.calendar.todoview'

	/**
	 * {{{ initComponent method
	 *
	 */
	, initComponent:		function() {
		Nrt.log( ' -- component initilizing start -- ' + this.alias );
		var me	= this;

		me.html	= 'ここは TodoView';
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
			this.tpl		= new Nrt.calendar.templates.TodoViewTemplate({
				id:			this.id
			});
		}
		this.callParent();
		Nrt.log( ' -- component afterRender done -- ' + this.alias );
		this.tpl.overwrite(this.el,{
			  date:		new Date()
			, name:		this.alias
		});
	}
	// }}}
});
// }}}
// vim: foldmethod=maker commentstring=%s*%s : // tabstop=4 shiftwidth=4 autoindent
