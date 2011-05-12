/**
 * {{{ Nrt.calendar.templates.DayViewTemplate
 *
 */
Ext.define( 'Nrt.calendar.templates.DayViewTemplate', {
	  extend:				'Nrt.calendar.templates.AbstractViewTemplate'

	, template:				[
		  '<table class="nrt-cal-bg-tbl" cellspacing="0" cellpadding="0">'
		, 	'<tbody>'
		, 		'<tr height="1">'
		, 			'<td class="nrt-cal-gutter"></td>'
		, 			'<td colspan="{dayCount}">'
		, 				'<div class="nrt-cal-bg-rows">'
		, 					'<div class="nrt-cal-bg-rows-inner">'
		, 						'<tpl for="times">'
		, 							'<div class="nrt-cal-bg-row">'
		, 								'<div class="nrt-cal-bg-row-div ext-row-{#}"></div>'
		, 							'</div>'
		, 						'</tpl>'
		, 					'</div>'
		, 				'</div>'
		, 			'</td>'
		, 		'</tr>'
		, 		'<tr>'
		, 			'<td class="nrt-cal-day-times">'
		, 				'<tpl for="times">'
		, 					'<div class="nrt-cal-bg-row">'
		, 						'<div class="nrt-cal-day-time-inner">{.}</div>'
		, 					'</div>'
		, 				'</tpl>'
		, 			'</td>'
		, 			'<tpl for="days">'
		, 				'<td class="nrt-cal-day-col">'
		, 					'<div class="nrt-cal-day-col-inner">'
		, 						'<div id="{[this.id]}-day-col-{.:date("Ymd")}" class="nrt-cal-day-col-gutter"></div>'
		, 					'</div>'
		, 				'</td>'
		, 			'</tpl>'
		, 		'</tr>'
		, 	'</tbody>'
		, '</table>'
	]

});
// }}}
// vim: foldmethod=maker tabstop=4 shiftwidth=4 autoindent

