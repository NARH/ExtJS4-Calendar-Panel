/*
 * {{{ Nrt.calendar.templates.BoxLayoutTemplate
 *
 */
Ext.define( 'Nrt.calendar.templates.BoxLayoutTemplate', {
	  extend:				'Nrt.calendar.templates.AbstractViewTemplate'

	, template:				[
		  '<div id="{[this.id]}-wk-{#}" class="ext-cal-wk-ct">'
		, 	'<table class="ext-cal-evt-tbl" cellpadding="0" cellspacing="0">'
		, 		'<tbody>'
		, 			'<tr>'
		, 				'<td><div>データ</div></td>'
		, 			'</tr>'
		, 		'</tbody>'
		, 	'</table>'
		, '</div>'
	]
});
// }}}
// vim: foldmethod=maker commentstring=%s*%s : // tabstop=4 shiftwidth=4 autoindent
