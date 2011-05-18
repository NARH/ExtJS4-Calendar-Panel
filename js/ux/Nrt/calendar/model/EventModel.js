/**
 * {{{ Nrt.calendar.model.EventModel
 *
 */
Ext.define( 'Nrt.calendar.model.EventModel', {
	  extend:				'Ext.data.Model'

	, fields:				[ 'id', 'cid', 'title', 'start', 'end', 'allday', 'notes', 'reminder', 'location', 'url', 'new' ]
	, idProperty:			'id'
});
// }}}
// vim: foldmethod=maker commentstring=%s*%s : // tabstop=4 shiftwidth=4 autoindent


