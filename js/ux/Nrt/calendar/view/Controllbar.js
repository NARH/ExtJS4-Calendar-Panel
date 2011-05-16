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
				  itemId:			'next'
				, tooltip:			me.nextLabel
				, overflowText:		me.nextLabel
				, iconCls:			Ext.baseCSSPrefix + 'tbar-calendar-next'
				, disabled:			false
				, handler:			me.moveNext
				, scope:			me
			}
			, {
				  itemId:			'currentDate'
				, html:				Ext.Date.format( me.currentDate, me.dateFormat )
				, menu:				Ext.create( 'Ext.menu.DatePicker', {
					handler:		function(dp, date) {
										me.updateCurrentDate( date );
										Nrt.log( '-- debug --:' + me.currentDate );
									}
				})
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
				  itemId:			'customDaysView'
				, text:				customText
				, tooltip:			customText
				, overflowText:		customText
				, iconCls:			Ext.baseCSSPrefix + 'tbar-calendar-view-customdays'
				, disabled:			false
				, handler:			me.moveCustomDaysView
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
