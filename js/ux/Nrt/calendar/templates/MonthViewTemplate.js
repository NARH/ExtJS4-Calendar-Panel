/**
 * {{{ Nrt.calendar.templates.MonthViewTemplate
 *
 */
Ext.define( 'Nrt.calendar.templates.MonthViewTemplate', {
	  extend:				'Nrt.calendar.templates.AbstractViewTemplate'

	, template:				[
		  '<div>'
		, 	'<div>{date}</div>'
		, 	'<div>{name}</div>'
		, '</div>'
	]

});
// }}}
// vim: foldmethod=maker commentstring=%s*%s : // tabstop=4 shiftwidth=4 autoindent
