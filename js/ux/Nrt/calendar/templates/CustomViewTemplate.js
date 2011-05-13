/**
 * {{{ Nrt.calendar.templates.CustomViewTemplate
 *
 */
Ext.define( 'Nrt.calendar.templates.CustomViewTemplate', {
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
