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

	, initComponent:		function() {
		Nrt.log( ' -- component initilizing start -- ' + this.alias );
		var me	= this;

		Nrt.calendar.templates.DayViewHeaderTemplate.prototype.apply = Nrt.calendar.templates.DayViewHeaderTemplate.prototype.applyTemplate;
		Nrt.log( ' -- component initilizing done -- ' + this.alias );
	}

	/*
	, applyTemplate:		function( o ) {
		Nrt.log( ' -- component applyTemplate start -- ' + this.alias );
		var me	= this;

		me.allDayTpl	= this.allDayTpl || Ext.create( 'Nrt.calendar.templates.BoxLayoutTemplate', {});
		me.allDayTpl.compile();
		return me.callParent({
            allDayTpl:	'データ'
        });
	}
	*/
});
// }}}
// vim: foldmethod=maker commentstring=%s*%s : // tabstop=4 shiftwidth=4 autoindent
