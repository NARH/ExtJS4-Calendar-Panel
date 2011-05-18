/**
 * {{{ Nrt.calendar.store.EventStore
 *
 */
Ext.define( 'Nrt.calendar.store.EventStore', {
	  extend:				'Ext.data.Store'

	, model:				'Nrt.calendar.model.EventModel'
	, storeId:				'nrt.calendar.store.events'
	, autoLoad:				true
});
// }}}
// vim: foldmethod=maker commentstring=%s*%s : // tabstop=4 shiftwidth=4 autoindent
