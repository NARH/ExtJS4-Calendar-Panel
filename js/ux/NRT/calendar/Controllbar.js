/**
 * {{{ NRT.calendar.Controllbar
 *
 */
Ext.define( 'NRT.calendar.Controllbar', {
	  extend:				'Ext.toolbar.Toolbar'
	, alias:				'widget.calendar.controll'

	/**
	 * @cfg {Boolean} prependButtons
	 * <tt>true</tt> to insert any configured <tt>items</tt> <i>before</i> the paging buttons.
	 * Defaults to <tt>false</tt>.
	 */
	, prependButtons:		false

	, todayLabel:			'tody'
	, prevLabel:			'next'
	, nextLabel:			'prev'
	, dayViewLabel:			'day view'
	, weekViewLabel:		'week view'
	, monthViewLabel:		'month view'
	, fourDaysViewLabel:	'4-days view'
	, todoLabel:			'todo list'

	, getControllItems:		function() {
		console.log( ' -- method getControllItems calling -- ' );
		var me	= this;

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
			}
			, '-'
			, {
				  itemId:			'fourDaysView'
				, text:				me.fourDaysViewLabel
				, tooltip:			me.fourDaysViewLabel
				, overflowText:		me.fourDaysViewLabel
				, iconCls:			Ext.baseCSSPrefix + 'tbar-calendar-view-fourdays'
				, disabled:			false
				, handler:			me.moveFourDaysView
				, scope:			me
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
			}
		]
	}

	, initComponent:		function() {
		console.log( ' -- component initilizing start -- ' );
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

		console.log( ' -- component initilizing done -- ' );
	}

	, moveToday:			function() {
		console.log( ' -- today pushed -- ' );
	}

	, movePrev:				function() {
		console.log( ' -- prev pushed -- ' );
	}

	, moveNext:				function() {
		console.log( ' -- next pushed -- ' );
	}

	, moveDayView:			function() {
		console.log( ' -- day view pushed -- ' );
	}

	, moveWeekView:			function() {
		console.log( ' -- week view pushed -- ' );
	}

	, moveMonthView:		function() {
		console.log( ' -- month view pushed -- ' );
	}

	, moveFourDaysView:		function() {
		console.log( ' -- four days view pushed -- ' );
	}

	, moveTodoView:			function() {
		console.log( ' -- todo view pushed -- ' );
	}
});
// }}}
// vim: foldmethod=maker tabstop=4 shiftwidth=4 autoindent
