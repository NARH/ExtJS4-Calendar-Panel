/**
 * {{{ Nrt.calendar.AbstractView
 *
 */
Ext.define( 'Nrt.calendar.view.AbstractView', {
	  extend:				'Ext.container.Container'

	, calendarStore:		'nrt.calendar.store.calendar'
	, eventStore:			'nrt.calendar.store.event'
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
