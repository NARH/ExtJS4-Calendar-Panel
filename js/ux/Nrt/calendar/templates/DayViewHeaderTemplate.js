/*
 * {{{ Nrt.calendar.templates.DayViewHeaderTemplate
 *
 */
Ext.define( 'Nrt.calendar.templates.DayViewHeaderTemplate', {
	  extend:				'Nrt.calendar.templates.AbstractViewTemplate'

	, allDayTpl:			false

	, template:				[
		  '<div class="nrt-cal-hd-ct">'
		, 	'<table class="nrt-cal-hd-days-tbl" cellspacing="0" cellpadding="0">'
		, 		'<tbody>'
		, 			'<tr>'
		, 				'<td class="nrt-cal-gutter">終日予定</td>'
		, 				'<td class="nrt-cal-hd-days-td"><div class="nrt-cal-hd-ad-inner">データ</div></td>'
		, 				'<td class="nrt-cal-gutter-rt"></td>'
		, 			'</tr>'
		, 		'</tobdy>'
		, 	'</table>'
		, '</div>'
	]

});
// }}}
// vim: foldmethod=maker commentstring=%s*%s : // tabstop=4 shiftwidth=4 autoindent
