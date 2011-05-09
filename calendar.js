/*
Copyright(c) 2011 NRT Engineer.
licensing@nrt-engineer.biz
*/
/**
 * {{{ NRT.calendar.Controllbar
 *
 */
Ext.define( 'NRT.calendar.Controllbar', {
	  extend:				'Ext.toolbar.Toolbar'
	, alias:				'widget.nrt.calendar.controll'

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
		console.log( ' -- method getControllItems calling -- ' );
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
		console.log( ' -- method updateCurrentDate calling -- ' );
		var me	= this;
		me.currentDate	= date;
		var newDateStr	= Ext.Date.format( me.currentDate, me.dateFormat );
		var target = me.getComponent('currentDate').update( newDateStr );
		console.log( ' -- method updateCurrentDate done -- ' );
	}
	// }}}

	/**
	 * {{{ initComponent method
	 *
	 */
	, initComponent:		function() {
		console.log( ' -- component initilizing start -- ' + this.alias );
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

		console.log( ' -- component initilizing done -- ' + this.alias );
	}
	// }}}

	, moveToday:			function() {
		console.log( ' -- today pushed -- ' );
		this.updateCurrentDate( new Date() );
	}

	, movePrev:				function() {
		console.log( ' -- prev pushed -- ' );
		this.updateCurrentDate( Ext.Date.add( this.currentDate, Ext.Date.DAY, -1 ) );
	}

	, moveNext:				function() {
		console.log( ' -- next pushed -- ' );
		this.updateCurrentDate( Ext.Date.add( this.currentDate, Ext.Date.DAY, 1 ) );
	}

	, moveDayView:			function() {
		console.log( ' -- day view pushed -- ' );
		//this.fireEvent('change', this, 'dayview' );
		this.getBubbleTarget().switchCard( this, 'dayview' );
	}

	, moveWeekView:			function() {
		console.log( ' -- week view pushed -- ' );
		this.getBubbleTarget().switchCard( this, 'weekview' );
	}

	, moveMonthView:		function() {
		console.log( ' -- month view pushed -- ' );
		this.getBubbleTarget().switchCard( this, 'monthview' );
	}

	, moveCustomDaysView:		function() {
		console.log( ' -- custom days view pushed -- ' );
		this.getBubbleTarget().switchCard( this, 'customview' );
	}

	, moveTodoView:			function() {
		console.log( ' -- todo view pushed -- ' );
		this.getBubbleTarget().switchCard( this, 'todoview' );
	}
});
// }}}
// vim: foldmethod=maker tabstop=4 shiftwidth=4 autoindent

/**
 * {{{ NRT.calendar.templates.AbstractViewTemplate
 *
 */
Ext.define( 'NRT.calendar.templates.AbstractViewTemplate', {
	  extend:				'Ext.XTemplate'

	, template:				[
	]

	, constructor:			function() {
		var me	= this
			, tpl	= this.template;

		if( Ext.isArray( arguments ) ) {
			this.callParent( arguments.concat( tpl ) );
		}
		else {
			if( arguments.length > 0 ) {
				this.callParent( tpl.concat( arguments ) );
			}
			else {
				this.callParent( tpl );
			}
		}
	}
});
// }}}
// vim: foldmethod=maker tabstop=4 shiftwidth=4 autoindent



/**
 * {{{ NRT.calendar.AbstractView
 *
 */
Ext.define( 'NRT.calendar.AbstractView', {
	  extend:				'Ext.Component'

	, tpl:					false

	/**
	 * {{{ initComponent method
	 *
	 */
	, initComponent:		function() {
		console.log( ' -- abstract component initilizing start -- ' + this.alias );
		var me	= this;

		NRT.calendar.AbstractView.superclass.initComponent.call( this );
		me.addEvents(
		);
		console.log( ' -- abstract component initilizing done -- ' + this.alias );
	}
	// }}}

	, afterRender: function() {
		console.log( ' -- abstract component afterRender start -- ' + this.alias );
		NRT.calendar.AbstractView.superclass.afterRender.call( this );
		console.log( ' -- abstract component afterRender done -- ' + this.alias );
	}
});
// }}}
// vim: foldmethod=maker tabstop=4 shiftwidth=4 autoindent

/**
 * {{{ NRT.calendar.templates.DayViewTemplate
 *
 */
Ext.define( 'NRT.calendar.templates.DayViewTemplate', {
	  extend:				'NRT.calendar.templates.AbstractViewTemplate'

	, template:				[
		  '<div>'
		, 	'<div>{date}</div>'
		, 	'<div>{name}</div>'
		, '</div>'
	]

});
// }}}
// vim: foldmethod=maker tabstop=4 shiftwidth=4 autoindent


/**
 * {{{ NRT.calendar.DayView
 *
 */
Ext.define( 'NRT.calendar.DayView', {
	  extend:				'NRT.calendar.AbstractView'
	, alias:				'widget.nrt.calendar.dayview'

	/**
	 * {{{ initComponent method
	 *
	 */
	, initComponent:		function() {
		console.log( ' -- component initilizing start -- ' + this.alias );
		var me	= this;

		me.html	= 'ここは DayView';
		me.callParent();
		console.log( ' -- component initilizing done -- ' + this.alias );
	}
	// }}}

	/**
	 * {{{ afterRender method
	 *
	 */
	, afterRender:			function() {
		console.log( ' -- component afterRender start -- ' + this.alias );
		if( ! this.tpl ) {
			this.tpl		= new NRT.calendar.templates.DayViewTemplate({
				id:			this.id
			});
			this.tpl.compile();
		}
		this.callParent();
		console.log( ' -- component afterRender done -- ' + this.alias );
		this.tpl.overwrite(this.el,{
			  date:		new Date()
			, name:		this.alias
		});
	}
	// }}}
});
// }}}
// vim: foldmethod=maker tabstop=4 shiftwidth=4 autoindent

/**
 * {{{ NRT.calendar.templates.WeekViewTemplate
 *
 */
Ext.define( 'NRT.calendar.templates.WeekViewTemplate', {
	  extend:				'NRT.calendar.templates.AbstractViewTemplate'

	, template:				[
		  '<div>'
		, 	'<div>{date}</div>'
		, 	'<div>{name}</div>'
		, '</div>'
	]

});
// }}}
// vim: foldmethod=maker tabstop=4 shiftwidth=4 autoindent



/**
 * {{{ NRT.calendar.WeekView
 *
 */
Ext.define( 'NRT.calendar.WeekView', {
	  extend:				'NRT.calendar.AbstractView'
	, alias:				'widget.nrt.calendar.weekview'

	/**
	 * {{{ initComponent method
	 *
	 */
	, initComponent:		function() {
		console.log( ' -- component initilizing start -- ' + this.alias );
		var me	= this;

		me.html	= 'ここは WeekView';
		me.callParent();
		console.log( ' -- component initilizing done -- ' + this.alias );
	}
	// }}}

	/**
	 * {{{ afterRender method
	 *
	 */
	, afterRender:			function() {
		console.log( ' -- component afterRender start -- ' + this.alias );
		if( ! this.tpl ) {
			this.tpl		= new NRT.calendar.templates.WeekViewTemplate({
				id:			this.id
			});
			this.tpl.compile();
		}
		this.callParent();
		console.log( ' -- component afterRender done -- ' + this.alias );
		this.tpl.overwrite(this.el,{
			  date:		new Date()
			, name:		this.alias
		});
	}
	// }}}
});
// }}}
// vim: foldmethod=maker tabstop=4 shiftwidth=4 autoindent


/**
 * {{{ NRT.calendar.templates.MonthViewTemplate
 *
 */
Ext.define( 'NRT.calendar.templates.MonthViewTemplate', {
	  extend:				'NRT.calendar.templates.AbstractViewTemplate'

	, template:				[
		  '<div>'
		, 	'<div>{date}</div>'
		, 	'<div>{name}</div>'
		, '</div>'
	]

});
// }}}
// vim: foldmethod=maker tabstop=4 shiftwidth=4 autoindent



/**
 * {{{ NRT.calendar.MonthView
 *
 */
Ext.define( 'NRT.calendar.MonthView', {
	  extend:				'NRT.calendar.AbstractView'
	, alias:				'widget.nrt.calendar.monthview'

	/**
	 * {{{ initComponent method
	 *
	 */
	, initComponent:		function() {
		console.log( ' -- component initilizing start -- ' + this.alias );
		var me	= this;

		me.html	= 'ここは MonthView';
		me.callParent();
		console.log( ' -- component initilizing done -- ' + this.alias );
	}
	// }}}

	/**
	 * {{{ afterRender method
	 *
	 */
	, afterRender:			function() {
		console.log( ' -- component afterRender start -- ' + this.alias );
		if( ! this.tpl ) {
			this.tpl		= new NRT.calendar.templates.MonthViewTemplate({
				id:			this.id
			});
			this.tpl.compile();
		}
		this.callParent();
		console.log( ' -- component afterRender done -- ' + this.alias );
		this.tpl.overwrite(this.el,{
			  date:		new Date()
			, name:		this.alias
		});
	}
	// }}}
});
// }}}
// vim: foldmethod=maker tabstop=4 shiftwidth=4 autoindent


/**
 * {{{ NRT.calendar.templates.CustomViewTemplate
 *
 */
Ext.define( 'NRT.calendar.templates.CustomViewTemplate', {
	  extend:				'NRT.calendar.templates.AbstractViewTemplate'

	, template:				[
		  '<div>'
		, 	'<div>{date}</div>'
		, 	'<div>{name}</div>'
		, '</div>'
	]

});
// }}}
// vim: foldmethod=maker tabstop=4 shiftwidth=4 autoindent



/**
 * {{{ NRT.calendar.CustomView
 *
 */
Ext.define( 'NRT.calendar.CustomView', {
	  extend:				'NRT.calendar.AbstractView'
	, alias:				'widget.nrt.calendar.customview'

	/**
	 * {{{ initComponent method
	 *
	 */
	, initComponent:		function() {
		console.log( ' -- component initilizing start -- ' + this.alias );
		var me	= this;

		me.html	= 'ここは CustomView';
		me.callParent();
		console.log( ' -- component initilizing done -- ' + this.alias );
	}
	// }}}

	/**
	 * {{{ afterRender method
	 *
	 */
	, afterRender:			function() {
		console.log( ' -- component afterRender start -- ' + this.alias );
		if( ! this.tpl ) {
			this.tpl		= new NRT.calendar.templates.WeekViewTemplate({
				id:			this.id
			});
			this.tpl.compile();
		}
		this.callParent();
		console.log( ' -- component afterRender done -- ' + this.alias );
		this.tpl.overwrite(this.el,{
			  date:		new Date()
			, name:		this.alias
		});
	}
	// }}}
});
// }}}
// vim: foldmethod=maker tabstop=4 shiftwidth=4 autoindent



/**
 * {{{ NRT.calendar.templates.TodoViewTemplate
 *
 */
Ext.define( 'NRT.calendar.templates.TodoViewTemplate', {
	  extend:				'NRT.calendar.templates.AbstractViewTemplate'

	, template:				[
		  '<div>'
		, 	'<div>{date}</div>'
		, 	'<div>{name}</div>'
		, '</div>'
	]

});
// }}}
// vim: foldmethod=maker tabstop=4 shiftwidth=4 autoindent




/**
 * {{{ NRT.calendar.TodoView
 *
 */
Ext.define( 'NRT.calendar.TodoView', {
	  extend:				'NRT.calendar.AbstractView'
	, alias:				'widget.nrt.calendar.todoview'

	/**
	 * {{{ initComponent method
	 *
	 */
	, initComponent:		function() {
		console.log( ' -- component initilizing start -- ' + this.alias );
		var me	= this;

		me.html	= 'ここは TodoView';
		me.callParent();
		console.log( ' -- component initilizing done -- ' + this.alias );
	}
	// }}}

	/**
	 * {{{ afterRender method
	 *
	 */
	, afterRender:			function() {
		console.log( ' -- component afterRender start -- ' + this.alias );
		if( ! this.tpl ) {
			this.tpl		= new NRT.calendar.templates.TodoViewTemplate({
				id:			this.id
			});
			this.tpl.compile();
		}
		this.callParent();
		console.log( ' -- component afterRender done -- ' + this.alias );
		this.tpl.overwrite(this.el,{
			  date:		new Date()
			, name:		this.alias
		});
	}
	// }}}
});
// }}}
// vim: foldmethod=maker tabstop=4 shiftwidth=4 autoindent




/**
 * {{{ NRT.calendar.AbstractPanel
 *
 */
Ext.define( 'NRT.calendar.AbstractPanel', {
	  extend:				'Ext.panel.Panel'
});
// }}}
// vim: foldmethod=maker tabstop=4 shiftwidth=4 autoindent

/**
 * {{{ NRT.calendar.Panel
 *
 */
Ext.define( 'NRT.calendar.Panel', {
	  extend:				'NRT.calendar.AbstractPanel'
	, alias:				'widget.nrt.calendar'

	, layout:				'card'
	, dockedItems:			[
		  { xtype:	'nrt.calendar.controll', dock:	'top' }
	]

	, items:				[
		  { itemId:	'dayview',		xtype:	'nrt.calendar.dayview'		}
		, { itemId:	'weekview',		xtype:	'nrt.calendar.weekview'		}
		, { itemId:	'monthview',	xtype:	'nrt.calendar.monthview'	}
		, { itemId:	'customview',	xtype:	'nrt.calendar.customview'	}
		, { itemId:	'todoview',		xtype:	'nrt.calendar.todoview'		}
	]

	, initComponent:		function() {
		console.log( ' -- component initilizing start -- ' + this.alias );
		var me	= this;

		Ext.apply( 'NRT.calendar.Panel', {
		});

		me.callParent();
		console.log( ' -- component initilizing done -- ' + this.alias );
	}

	, listeners:			{
	}

	, switchCard:			function( obj, itemId ) {
		console.log( ' -- day view bubble -- '  + itemId );
		var activeItem	= this.getLayout().setActiveItem( itemId );
	}

});
// }}}
// vim: foldmethod=maker tabstop=4 shiftwidth=4 autoindent



