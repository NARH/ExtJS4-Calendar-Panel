/*
Copyright(c) 2011 NRT Engineer.
licensing@nrt-engineer.biz
*/
/**
 * @class Nrt
 * @singleton
 */
(function() {
    var global = this;

    if (typeof Nrt === 'undefined') {
        global.Nrt	= {};
    }

    Nrt.global		= global;

    var scripts = document.getElementsByTagName('script'),
        localhostTests = [
            /^localhost$/,
            /\b(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(:\d{1,5})?\b/ // IP v4
        ],
        host = window.location.hostname,
        isDevelopment = false,
        queryString = window.location.search,
        test, path, i, ln, scriptSrc, match;

    for (i = 0, ln = scripts.length; i < ln; i++) {
        scriptSrc = scripts[i].src;

        match = scriptSrc.match(/bootstrap\.js$/);

        if (match) {
            path = scriptSrc.substring(0, scriptSrc.length - match[0].length);
            break;
        }
    }

    if (queryString.match('(\\?|&)debug') !== null) {
        isDevelopment = true;
    }
    else if (queryString.match('(\\?|&)nodebug') !== null) {
        isDevelopment = false;
    }

    if (isDevelopment === null) {
        for (i = 0, ln = localhostTests.length; i < ln; i++) {
            test = localhostTests[i];

            if (host.search(test) !== -1) {
                isDevelopment = true;
                break;
            }
        }
    }

    if (isDevelopment === null && window.location.protocol === 'file:') {
        isDevelopment = true;
    }

	Nrt.isDebug		= isDevelopment;

	Nrt.log			= function( s ) {
		if( Nrt.isDebug && ! Ext.isIE ) console.log( s );
	};
})();


/**
 * {{{ Nrt.calendar.model.CalendarModel
 *
 */
Ext.define( 'Nrt.calendar.model.CalendarModel', {
	  extend:				'Ext.data.Model'

	, fields:				[ 'id', 'title' ]
	, idProperty:			'id'
});
// }}}
// vim: foldmethod=maker commentstring=%s*%s : // tabstop=4 shiftwidth=4 autoindent

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


/**
 * {{{ Nrt.calendar.store.EventStore
 *
 */
Ext.define( 'Nrt.calendar.store.EventStore', {
	  extend:				'Ext.data.Store'

	, model:				'Nrt.calendar.model.EventModel'
	, storeId:				'nrt.calendar.store.events'
	, autoLoad:				true
});
// }}}
// vim: foldmethod=maker commentstring=%s*%s : // tabstop=4 shiftwidth=4 autoindent

/**
 * {{{ Nrt.calendar.Controllbar
 *
 */
Ext.define( 'Nrt.calendar.view.Controllbar', {
	  extend:				'Ext.toolbar.Toolbar'
	, alias:				'widget.nrt.calendar.controllbar'

	/**
	 * @cfg {Boolean} prependButtons
	 * <tt>true</tt> to insert any configured <tt>items</tt> <i>before</i> the paging buttons.
	 * Defaults to <tt>false</tt>.
	 */
	, prependButtons:		false

	, activeViewType:		0
	, customDays:			4
	, dateFormat:			'm/d/Y'
	, todayLabel:			'tody'
	, prevLabel:			'next'
	, nextLabel:			'prev'
	, dayViewLabel:			'day view'
	, weekViewLabel:		'week view'
	, monthViewLabel:		'month view'
	, customDaysViewLabel:	'-days view'
	, todoLabel:			'todo list'

	, currentDate:			new Date()

	/**
	 * {{{ getControllItems method
	 *
	 */
	, getControllItems:		function() {
		Nrt.log( ' -- method getControllItems calling -- ' );
		var me	= this
			, customText	= me.customDays + me.customDaysViewLabel;

		return [
			  {
				  itemId:			'today'
				, text:				me.todayLabel
				, tooltip:			me.todayLabel
				, overflowText:		me.todayLabel
				, iconCls:			Ext.baseCSSPrefix + 'tbar-calendar-today'
				, disabled:			false
				, handler:			me.moveToday
				, scope:			me
			}
			, '-'
			, {
				  itemId:			'prev'
				, tooltip:			me.prevLabel
				, overflowText:		me.prevLabel
				, iconCls:			Ext.baseCSSPrefix + 'tbar-calendar-prev'
				, disabled:			false
				, handler:			me.movePrev
				, scope:			me
			}
			, {
				  itemId:			'currentDate'
				, html:				Ext.Date.format( me.currentDate, me.dateFormat )
				, menu:				Ext.create( 'Ext.menu.DatePicker', {
					handler:		function(dp, date) {
										me.updateCurrentDate( date );
									}
				})
			}
			, {
				  itemId:			'next'
				, tooltip:			me.nextLabel
				, overflowText:		me.nextLabel
				, iconCls:			Ext.baseCSSPrefix + 'tbar-calendar-next'
				, disabled:			false
				, handler:			me.moveNext
				, scope:			me
			}
			, '->'
			, {
				  itemId:			'dayView'
				, text:				me.dayViewLabel
				, tooltip:			me.dayViewLabel
				, overflowText:		me.dayViewLabel
				, iconCls:			Ext.baseCSSPrefix + 'tbar-calendar-view-day'
				, disabled:			false
				, handler:			me.moveDayView
				, scope:			me
				, toggleGroup:		'view'
			}
			, '-'
			, {
				  itemId:			'weekView'
				, text:				me.weekViewLabel
				, tooltip:			me.weekViewLabel
				, overflowText:		me.weekViewLabel
				, iconCls:			Ext.baseCSSPrefix + 'tbar-calendar-view-week'
				, disabled:			false
				, handler:			me.moveWeekView
				, scope:			me
				, toggleGroup:		'view'
			}
			, '-'
			, {
				  itemId:			'monthView'
				, text:				me.monthViewLabel
				, tooltip:			me.monthViewLabel
				, overflowText:		me.monthViewLabel
				, iconCls:			Ext.baseCSSPrefix + 'tbar-calendar-view-month'
				, disabled:			false
				, handler:			me.moveMonthView
				, scope:			me
				, toggleGroup:		'view'
			}
			, '-'
			, {
				  itemId:			'customDaysView'
				, text:				customText
				, tooltip:			customText
				, overflowText:		customText
				, iconCls:			Ext.baseCSSPrefix + 'tbar-calendar-view-customdays'
				, disabled:			false
				, handler:			me.moveCustomDaysView
				, scope:			me
				, toggleGroup:		'view'
			}
			, '-'
			, {
				  itemId:			'todoView'
				, text:				me.todoLabel
				, tooltip:			me.todoLabel
				, overflowText:		me.todoLabel
				, iconCls:			Ext.baseCSSPrefix + 'tbar-calendar-view-todo'
				, disabled:			false
				, handler:			me.moveTodoView
				, scope:			me
				, toggleGroup:		'view'
			}
		]
	}
	// }}}

	/**
	 * {{{ updateCurrentDate method
	 *
	 */
	, updateCurrentDate:	function( date ) {
		Nrt.log( ' -- method updateCurrentDate calling -- ' );
		var me	= this;
		me.currentDate	= date;
		var newDateStr	= Ext.Date.format( me.currentDate, me.dateFormat );
		var target = me.getComponent('currentDate').update( newDateStr );
		Nrt.log( ' -- method updateCurrentDate done -- ' );
	}
	// }}}

	/**
	 * {{{ initComponent method
	 *
	 */
	, initComponent:		function() {
		Nrt.log( ' -- component initilizing start -- ' + this.alias );
		var me	= this
			, controllItems	= me.getControllItems()
			, userItems = me.items || me.buttons || [];

		if( me.prependButtons ) {
			me.items	= userItems.concat( controllItems );
		}
		else {
			me.items	= controllItems.concat( userItems );
		}
		delete me.buttons;

		me.callParent();

		Nrt.log( ' -- component initilizing done -- ' + this.alias );
	}
	// }}}

	, moveToday:			function() {
		Nrt.log( ' -- today pushed -- ' );
		this.updateCurrentDate( new Date() );
	}

	, movePrev:				function() {
		Nrt.log( ' -- prev pushed -- ' );
		this.updateCurrentDate( Ext.Date.add( this.currentDate, Ext.Date.DAY, -1 ) );
	}

	, moveNext:				function() {
		Nrt.log( ' -- next pushed -- ' );
		this.updateCurrentDate( Ext.Date.add( this.currentDate, Ext.Date.DAY, 1 ) );
	}

	, moveDayView:			function() {
		Nrt.log( ' -- day view pushed -- ' );
		//this.fireEvent('change', this, 'dayview' );
		this.getBubbleTarget().switchCard( this, 'dayview' );
	}

	, moveWeekView:			function() {
		Nrt.log( ' -- week view pushed -- ' );
		this.getBubbleTarget().switchCard( this, 'weekview' );
	}

	, moveMonthView:		function() {
		Nrt.log( ' -- month view pushed -- ' );
		this.getBubbleTarget().switchCard( this, 'monthview' );
	}

	, moveCustomDaysView:		function() {
		Nrt.log( ' -- custom days view pushed -- ' );
		this.getBubbleTarget().switchCard( this, 'customview' );
	}

	, moveTodoView:			function() {
		Nrt.log( ' -- todo view pushed -- ' );
		this.getBubbleTarget().switchCard( this, 'todoview' );
	}
});
// }}}
// vim: foldmethod=maker commentstring=%s*%s : // tabstop=4 shiftwidth=4 autoindent

/**
 * {{{ Nrt.calendar.templates.AbstractViewTemplate
 *
 */
Ext.define( 'Nrt.calendar.templates.AbstractViewTemplate', {
	  extend:				'Ext.Component'

	, template:				[
	]

	/**
	 * {{{ constructor
	 *
	 */
	, constructor:			function( config ) {
		var me = this;
		me.callParent( arguments );
		me.initConfig( config );

		me.reloadTemplate();
		return me;
	}
	// }}}

	/**
	 * {{{ reloadTemplate method
	 *
	 */
	, reloadTemplate:		function() {
		Nrt.log( '--- templae reloadTemplate start ---' );
		var me = this;
		me._template = Ext.isObject( me.template ) ? me.template
			: new Ext.XTemplate( me.template );
		Ext.applyIf( me._template, me );
		me._template.compile();
		me.reload();
		Nrt.log( '--- templae reloadTemplate done ---' );
	}
	// }}}

	/**
	 * {{{ reload method
	 *
	 */
	, reload:				function() {
		Nrt.log( '--- templae reload start ---' );
		var me = this;
		me.update( me._template.apply( me ) );
		Nrt.log( '--- templae reload done ---' );
	}
	// }}}

	/**
	 * {{{ overwrite method
	 *
	 */
	, overwrite:			function( el, config ) {
		var me = this;
		me._template.overwrite( el, config );
	}
	// }}}

	/**
	 * {{{ compile method
	 *
	 */
	, compile:				function() {
		var me = this;
		return me._template.compile();
	}
	// }}}

});
// }}}
// vim: foldmethod=maker commentstring=%s*%s : // tabstop=4 shiftwidth=4 autoindent

/**
 * {{{ Nrt.calendar.AbstractView
 *
 */
Ext.define( 'Nrt.calendar.view.AbstractView', {
	  extend:				'Ext.container.Container'

	, calendarStore:		'nrt.calendar.store.calendar'
	, eventStore:			'nrt.calendar.store.event'
	, tpl:					false

	/**
	 * {{{ initComponent method
	 *
	 */
	, initComponent:		function() {
		Nrt.log( ' -- abstract component initilizing start -- ' + this.alias );
		var me	= this;

		me.callParent( arguments );
		Nrt.log( ' -- abstract component initilizing done -- ' + this.alias );
	}
	// }}}
});
// }}}
// vim: foldmethod=maker commentstring=%s*%s : // tabstop=4 shiftwidth=4 autoindent

/**
 * {{{ Nrt.calendar.AbstractPanel
 *
 */
Ext.define( 'Nrt.calendar.view.AbstractPanel', {
	  extend:				'Ext.panel.Panel'

	, calendarStore:		'nrt.calendar.store.calendar'
	, eventStore:			'nrt.calendar.store.event'

	/**
	 * {{{ initComponent method
	 *
	 */
	, initComponent:		function() {
		Nrt.log( ' -- abstract panel initilizing start -- ' + this.alias );
		var me	= this;

		me.callParent( arguments );
		Nrt.log( ' -- abstract panel initilizing done -- ' + this.alias );
	}
	// }}}
});
// }}}
// vim: foldmethod=maker commentstring=%s*%s : // tabstop=4 shiftwidth=4 autoindent

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

/**
 * {{{ Nrt.calendar.DayViewHeader
 *
 */
Ext.define( 'Nrt.calendar.view.DayViewHeader', {
	  extend:				'Ext.Component'
	, alias:				'widget.nrt.calendar.dayviewheader'

	, currentDay:			false
	, dayCount:				false

	/**
	 * {{{ initComponent method
	 *
	 */
	, initComponent:		function() {
		Nrt.log( ' -- component initilizing start -- ' + this.alias );
		var me			= this;
		me.currentDay	= this.currentDay || Ext.Date.clearTime( new Date() );
		me.dayCount		= this.dayCount || 1;

		me.callParent();
		Nrt.log( ' -- component initilizing done -- ' + this.alias );
		return me;
	}
	// }}}

	/**
	 * {{{ afterRender method
	 *
	 */
	, afterRender:			function() {
		Nrt.log( ' -- component afterRender start -- ' + this.alias );

		var me	= this;
		if( ! me.tpl ) {
			me.tpl		= new Nrt.calendar.templates.DayViewHeaderTemplate({
				id:			me.id
			});
		}

		Ext.apply({items:		[me.tpl]});
       	me.addClass('nrt-cal-header-ct');
		me.callParent();

		me.tpl.overwrite( me.el, {
		});
		Nrt.log( ' -- component afterRender done -- ' + this.alias );
	}
	// }}}
});
// }}}
// vim: foldmethod=maker commentstring=%s*%s : // tabstop=4 shiftwidth=4 autoindent


/**
 * {{{ Nrt.calendar.templates.DayViewTemplate
 *
 */
Ext.define( 'Nrt.calendar.templates.DayViewBodyTemplate', {
	  extend:				'Nrt.calendar.templates.AbstractViewTemplate'

	, dayCount:				1

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
// vim: foldmethod=maker commentstring=%s*%s : // tabstop=4 shiftwidth=4 autoindent

/**
 * {{{ Nrt.calendar.DayViewBody
 *
 */
Ext.define( 'Nrt.calendar.view.DayViewBody', {
	  extend:				'Ext.Component'
	, alias:				'widget.nrt.calendar.dayviewbody'

	, currentDay:			false
	, dayCount:				false
	, format:				'H:i'

	/**
	 * {{{ initComponent method
	 *
	 */
	, initComponent:		function() {
		Nrt.log( ' -- component initilizing start -- ' + this.alias );
		var me			= this;
		me.currentDay	= this.currentDay || Ext.Date.clearTime( new Date() );
		me.dayCount		= this.dayCount || 1;
		me.callParent( arguments );
		Nrt.log( ' -- dayCount:' + me.dayCount );
		Nrt.log( ' -- component initilizing done -- ' + this.alias );
	}
	// }}}

	/**
	 * {{{ afterRender method
	 *
	 */
	, afterRender:			function() {
		Nrt.log( ' -- component afterRender start -- ' + this.alias );
		var me	= this;
		if( ! me.tpl ) {
			me.tpl		= new Nrt.calendar.templates.DayViewBodyTemplate({
				id:			me.id
			});
		}
		me.tpl.compile();
       	me.addClass('nrt-cal-body-ct');

		me.callParent();

		var i = 0, days = []
			, dt	= new Date()
			, times	= [];

		for(; i < me.dayCount; i++ ) {
			days[i]		= Ext.Date.add( dt, Ext.Date.DAY, i );
		}

		dt = Ext.Date.clearTime( new Date() );

		for( i = 0; i < 24; i++ ) {
			times.push( Ext.Date.format( dt, me.format ) );
			dt = Ext.Date.add( dt, Ext.Date.HOUR, 1 );
		}

		me.tpl.overwrite( me.el, {
			  days:		days
			, dayCount:	me.dayCount
			, times:	times
		});
		Nrt.log( ' -- component afterRender done -- ' + this.alias );
	}
	// }}}
});
// }}}
// vim: foldmethod=maker commentstring=%s*%s : // tabstop=4 shiftwidth=4 autoindent

/**
 * {{{ Nrt.calendar.DayView
 *
 */
Ext.define( 'Nrt.calendar.view.DayView', {
	  extend:				'Nrt.calendar.view.AbstractView'
	, alias:				'widget.nrt.calendar.dayview'

	, dayCount: 			false

	, initComponent:		function() {
		Nrt.log( ' -- component initilizing start -- ' + this.alias );
		var me	= this;
        me.addCls('nrt-cal-dayview nrt-cal-ct');
		for(item in me.items) {
			me.items[item].ownerCt	=	me;
			me.items[item].dayCount	=	me.dayCount;
		}
		this.callParent( arguments );
		Nrt.log( ' -- component initilizing done -- ' + this.alias );
	}
});
// }}}
// vim: foldmethod=maker commentstring=%s*%s : // tabstop=4 shiftwidth=4 autoindent

/**
 * {{{ Nrt.calendar.templates.WeekViewTemplate
 *
 */
Ext.define( 'Nrt.calendar.templates.WeekViewTemplate', {
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

/**
 * {{{ Nrt.calendar.WeekView
 *
 */
Ext.define( 'Nrt.calendar.view.WeekView', {
	  extend:				'Nrt.calendar.view.AbstractView'
	, alias:				'widget.nrt.calendar.weekview'

	/**
	 * {{{ initComponent method
	 *
	 */
	, initComponent:		function() {
		Nrt.log( ' -- component initilizing start -- ' + this.alias );
		var me	= this;

		me.html	= 'ここは WeekView';
		me.callParent();
		Nrt.log( ' -- component initilizing done -- ' + this.alias );
	}
	// }}}

	/**
	 * {{{ afterRender method
	 *
	 */
	, afterRender:			function() {
		Nrt.log( ' -- component afterRender start -- ' + this.alias );
		if( ! this.tpl ) {
			this.tpl		= new Nrt.calendar.templates.WeekViewTemplate({
				id:			this.id
			});
		}
		this.callParent();
		Nrt.log( ' -- component afterRender done -- ' + this.alias );
		this.tpl.overwrite(this.el,{
			  date:		new Date()
			, name:		this.alias
		});
	}
	// }}}
});
// }}}
// vim: foldmethod=maker commentstring=%s*%s : // tabstop=4 shiftwidth=4 autoindent

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

/**
 * {{{ Nrt.calendar.MonthView
 *
 */
Ext.define( 'Nrt.calendar.view.MonthView', {
	  extend:				'Nrt.calendar.view.AbstractView'
	, alias:				'widget.nrt.calendar.monthview'

	/**
	 * {{{ initComponent method
	 *
	 */
	, initComponent:		function() {
		Nrt.log( ' -- component initilizing start -- ' + this.alias );
		var me	= this;

		me.html	= 'ここは MonthView';
		me.callParent( arguments );
		Nrt.log( ' -- component initilizing done -- ' + this.alias );
	}
	// }}}

	/**
	 * {{{ afterRender method
	 *
	 */
	, afterRender:			function() {
		Nrt.log( ' -- component afterRender start -- ' + this.alias );
		if( ! this.tpl ) {
			this.tpl		= new Nrt.calendar.templates.MonthViewTemplate({
				id:			this.id
			});
		}
		this.callParent();
		Nrt.log( ' -- component afterRender done -- ' + this.alias );
		this.tpl.overwrite(this.el,{
			  date:		new Date()
			, name:		this.alias
		});
	}
	// }}}
});
// }}}
// vim: foldmethod=maker commentstring=%s*%s : // tabstop=4 shiftwidth=4 autoindent

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

/**
 * {{{ Nrt.calendar.CustomView
 *
 */
Ext.define( 'Nrt.calendar.view.CustomView', {
	  extend:				'Nrt.calendar.view.AbstractView'
	, alias:				'widget.nrt.calendar.customview'

	/**
	 * {{{ initComponent method
	 *
	 */
	, initComponent:		function() {
		Nrt.log( ' -- component initilizing start -- ' + this.alias );
		var me	= this;

		me.html	= 'ここは CustomView';
		me.callParent();
		Nrt.log( ' -- component initilizing done -- ' + this.alias );
	}
	// }}}

	/**
	 * {{{ afterRender method
	 *
	 */
	, afterRender:			function() {
		Nrt.log( ' -- component afterRender start -- ' + this.alias );
		if( ! this.tpl ) {
			this.tpl		= Ext.create( 'Nrt.calendar.templates.WeekViewTemplate', {
				id:			this.id
			  , date:		new Date()
			  , name:		this.alias
			});
			this.tpl.compile();
		}
		this.callParent();
		Nrt.log( ' -- component afterRender done -- ' + this.alias );
	}
	// }}}
});
// }}}
// vim: foldmethod=maker commentstring=%s*%s : // tabstop=4 shiftwidth=4 autoindent

/**
 * {{{ Nrt.calendar.templates.TodoViewTemplate
 *
 */
Ext.define( 'Nrt.calendar.templates.TodoViewTemplate', {
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

/**
 * {{{ Nrt.calendar.TodoView
 *
 */
Ext.define( 'Nrt.calendar.view.TodoView', {
	  extend:				'Nrt.calendar.view.AbstractView'
	, alias:				'widget.nrt.calendar.todoview'

	/**
	 * {{{ initComponent method
	 *
	 */
	, initComponent:		function() {
		Nrt.log( ' -- component initilizing start -- ' + this.alias );
		var me	= this;

		me.html	= 'ここは TodoView';
		me.callParent();
		Nrt.log( ' -- component initilizing done -- ' + this.alias );
	}
	// }}}

	/**
	 * {{{ afterRender method
	 *
	 */
	, afterRender:			function() {
		Nrt.log( ' -- component afterRender start -- ' + this.alias );
		if( ! this.tpl ) {
			this.tpl		= new Nrt.calendar.templates.TodoViewTemplate({
				id:			this.id
			});
		}
		this.callParent();
		Nrt.log( ' -- component afterRender done -- ' + this.alias );
		this.tpl.overwrite(this.el,{
			  date:		new Date()
			, name:		this.alias
		});
	}
	// }}}
});
// }}}
// vim: foldmethod=maker commentstring=%s*%s : // tabstop=4 shiftwidth=4 autoindent

/**
 * {{{ Nrt.calendar.Panel
 *
 */
Ext.define( 'Nrt.calendar.view.Panel', {
	  extend:				'Nrt.calendar.view.AbstractPanel'
	, alias:				'widget.nrt.calendar'

	, layout:				'card'
	, autoScroll:			true

	, dockedItems:			[
		  { xtype:	'nrt.calendar.controll', dock:	'top' }
	]

	, items:				[
		  {
				  itemId:			'dayview'
				, xtype:			'nrt.calendar.dayview'
				, layout:			'border'
				, items:			[
					  {
						  itemId:		'daily-bd'
						, xtype:		'nrt.calendar.dayviewbody'
						, region:		'center'
						, autoScroll:	true
					}
					, {
						  itemId:		'daily-hd'
						, xtype:		'nrt.calendar.dayviewheader'
						, region:		'north'
					}
				]
		}
		, {
				  itemId:	'weekview'
				, xtype:	'nrt.calendar.dayview'
				, dayCount:	7
				, layout:			'border'
				, items:			[
					  {
						  itemId:		'week-bd'
						, xtype:		'nrt.calendar.dayviewbody'
						, region:		'center'
						, autoScroll:	true
					}
					, {
						  itemId:		'week-hd'
						, xtype:		'nrt.calendar.dayviewheader'
						, region:		'north'
					}
				]
		}
		, {
				  itemId:	'monthview'
				, xtype:	'nrt.calendar.monthview'
		}
		, {
				  itemId:	'customview'
				, xtype:	'nrt.calendar.dayview'
				, dayCount:	4
				, layout:			'border'
				, items:			[
					  {
						  itemId:		'custom-bd'
						, xtype:		'nrt.calendar.dayviewbody'
						, region:		'center'
						, autoScroll:	true
					}
					, {
						  itemId:		'custom-hd'
						, xtype:		'nrt.calendar.dayviewheader'
						, region:		'north'
					}
				]
		}
		, {
				  itemId:	'todoview'
				, xtype:	'nrt.calendar.todoview'
		}
	]

	, initComponent:		function() {
		Nrt.log( ' -- component initilizing start -- ' + this.alias );
		var me	= this;

		Ext.apply( 'Nrt.calendar.Panel', {
		});

		me.callParent();
		Nrt.log( ' -- component initilizing done -- ' + this.alias );
	}

	, listeners:			{
	}

	, switchCard:			function( obj, itemId ) {
		Nrt.log( ' -- day view bubble -- '  + itemId );
		var activeItem	= this.getLayout().setActiveItem( itemId );
	}

});
// }}}
// vim: foldmethod=maker commentstring=%s*%s : // tabstop=4 shiftwidth=4 autoindent



