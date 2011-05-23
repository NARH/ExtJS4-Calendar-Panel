/*
 * {{{ Nrt.calendar.templates.BoxLayoutTemplate
 *
 */
Ext.define( 'Nrt.calendar.templates.BoxLayoutTemplate', {
	  extend:				'Nrt.calendar.templates.AbstractViewTemplate'

	, showWeekLinks:		true

	, template:				[
          '<tpl for="weeks">',
		, 	'<div id="{[this.id]}-wk-{[xindex-1]}" class="nrt-cal-wk-ct" style="top:{[this.getRowTop(xindex, xcount)]}%; height:{[this.getRowHeight(xcount)]}%;">'
		,		'<tpl if="this.showWeekLinks">'
		, 			'<div id="{weekLinkId}" class="nrt-cal-week-link">{weekNum}</div>'
		,		'</tpl>'
		, 		'<table class="nrt-cal-bg-tbl" cellpadding="0" cellspacing="0">'
		, 			'<tbody>'
		, 				'<tr>'
		, 					'<tpl for=".">'
		, 						'<td id="{[this.id]}-day-{date:date("Ymd")}" class="{cellCls}">&nbsp;</td>'
		, 					'</tpl>'
		, 				'</tr>'
		, 			'</tbody>'
		, 		'</table>' 
		, 		'<table class="nrt-cal-evt-tbl" cellpadding="0" cellspacing="0">'
		, 			'<tbody>'
		, 				'<tr>'
		, 					'<tpl for=".">'
		, 						'<td id="{[this.id]}-ev-day-{date:date("Ymd")}" class="{titleCls}"><div>{title}</div></td>'
		, 					'</tpl>'
		, 				'</tr>'
		, 			'</tbody>'
		, 		'</table>'
		, 	'</div>'
		, '</tpl>'
	]

	, getRowTop:			function(i, ln) {
		return ((i-1)*(100/ln));
	}
	, getRowHeight:			function(ln) {
		return 100/ln;
	}
});
// }}}
// vim: foldmethod=maker commentstring=%s*%s : // tabstop=4 shiftwidth=4 autoindent
