/**
 * {{{ japanese transration
 *
 */
Ext.onReady(function() {
	
	if( Nrt.calendar.view.Controllbar ) {
		Ext.apply( Nrt.calendar.view.Controllbar.prototype, {
			  dateFormat:			'Y年m月d日(l)'
			, todayLabel:			'本日'
			, prevLabel:			'前へ'
			, nextLabel:			'次へ'
			, dayViewLabel:			'日毎'
			, weekViewLabel:		'週毎'
			, monthViewLabel:		'月毎'
			, customDaysViewLabel:	'日毎'
			, todoLabel:			'予定一覧'
		});
	}
});
// }}}
// vim: foldmethod=maker commentstring=%s*%s : // tabstop=4 shiftwidth=4 autoindent
