/*
Copyright(c) 2011 NRT Engineer.
licensing@nrt-engineer.biz
*/
Ext.define("NRT.calendar.Controllbar",{extend:"Ext.toolbar.Toolbar",alias:"widget.calendar.controll",prependButtons:false,dateFormat:"m/d/Y",todayLabel:"tody",prevLabel:"next",nextLabel:"prev",dayViewLabel:"day view",weekViewLabel:"week view",monthViewLabel:"month view",fourDaysViewLabel:"4-days view",todoLabel:"todo list",currentDate:new Date(),getControllItems:function(){console.log(" -- method getControllItems calling -- ");var a=this;return[{itemId:"today",text:a.todayLabel,tooltip:a.todayLabel,overflowText:a.todayLabel,iconCls:Ext.baseCSSPrefix+"tbar-calendar-today",disabled:false,handler:a.moveToday,scope:a},"-",{itemId:"prev",tooltip:a.prevLabel,overflowText:a.prevLabel,iconCls:Ext.baseCSSPrefix+"tbar-calendar-prev",disabled:false,handler:a.movePrev,scope:a},{itemId:"next",tooltip:a.nextLabel,overflowText:a.nextLabel,iconCls:Ext.baseCSSPrefix+"tbar-calendar-next",disabled:false,handler:a.moveNext,scope:a},{itemId:"currentDate",html:Ext.Date.format(a.currentDate,a.dateFormat)},"->",{itemId:"dayView",text:a.dayViewLabel,tooltip:a.dayViewLabel,overflowText:a.dayViewLabel,iconCls:Ext.baseCSSPrefix+"tbar-calendar-view-day",disabled:false,handler:a.moveDayView,scope:a},"-",{itemId:"weekView",text:a.weekViewLabel,tooltip:a.weekViewLabel,overflowText:a.weekViewLabel,iconCls:Ext.baseCSSPrefix+"tbar-calendar-view-week",disabled:false,handler:a.moveWeekView,scope:a},"-",{itemId:"monthView",text:a.monthViewLabel,tooltip:a.monthViewLabel,overflowText:a.monthViewLabel,iconCls:Ext.baseCSSPrefix+"tbar-calendar-view-month",disabled:false,handler:a.moveMonthView,scope:a},"-",{itemId:"fourDaysView",text:a.fourDaysViewLabel,tooltip:a.fourDaysViewLabel,overflowText:a.fourDaysViewLabel,iconCls:Ext.baseCSSPrefix+"tbar-calendar-view-fourdays",disabled:false,handler:a.moveFourDaysView,scope:a},"-",{itemId:"todoView",text:a.todoLabel,tooltip:a.todoLabel,overflowText:a.todoLabel,iconCls:Ext.baseCSSPrefix+"tbar-calendar-view-todo",disabled:false,handler:a.moveTodoView,scope:a}]},updateCurrentDate:function(a){console.log(" -- method updateCurrentDate calling -- ");var b=this;b.currentDate=a;var d=Ext.Date.format(b.currentDate,b.dateFormat);var c=b.getComponent("currentDate").update(d);console.log(" -- method updateCurrentDate done -- ")},initComponent:function(){console.log(" -- component initilizing start -- ");var b=this,c=b.getControllItems(),a=b.items||b.buttons||[];if(b.prependButtons){b.items=a.concat(c)}else{b.items=c.concat(a)}delete b.buttons;b.callParent();console.log(" -- component initilizing done -- ")},moveToday:function(){console.log(" -- today pushed -- ");this.updateCurrentDate(new Date())},movePrev:function(){console.log(" -- prev pushed -- ");this.updateCurrentDate(Ext.Date.add(this.currentDate,Ext.Date.DAY,-1))},moveNext:function(){console.log(" -- next pushed -- ");this.updateCurrentDate(Ext.Date.add(this.currentDate,Ext.Date.DAY,1))},moveDayView:function(){console.log(" -- day view pushed -- ")},moveWeekView:function(){console.log(" -- week view pushed -- ")},moveMonthView:function(){console.log(" -- month view pushed -- ")},moveFourDaysView:function(){console.log(" -- four days view pushed -- ")},moveTodoView:function(){console.log(" -- todo view pushed -- ")}});Ext.define("NRT.calendar.AbstractPanel",{extend:"Ext.panel.Panel"});Ext.define("NRT.calendar.Panel",{extend:"NRT.calendar.AbstractPanel",alias:"widget.calendar",dockedItems:[{xtype:"calendar.controll",dock:"top"}]});
