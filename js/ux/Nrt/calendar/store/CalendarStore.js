/**
 * {{{ Nrt.calendar.store.CalendarStore
 *
 */
Ext.define( 'Nrt.calendar.store.CalendarStore', {
	  extend:				'Ext.data.Store'

	, model:				'Nrt.calendar.model.CalendarModel'
	, storeId:				'nrt.calendar.store.calendars'
	, autoLoad:				true
});
// }}}
// vim: foldmethod=maker commentstring=%s*%s : // tabstop=4 shiftwidth=4 autoindent

