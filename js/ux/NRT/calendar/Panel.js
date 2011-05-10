/**
 * {{{ NRT.calendar.Panel
 *
 */
Ext.define( 'NRT.calendar.Panel', {
	  extend:				'NRT.calendar.AbstractPanel'
	, alias:				'widget.nrt.calendar'

	, layout:				'card'
	, autoScroll:			true

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
