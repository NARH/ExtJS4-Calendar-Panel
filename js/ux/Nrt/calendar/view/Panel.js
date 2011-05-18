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
						  xtype:		'nrt.calendar.dayviewbody'
						, region:		'center'
						, autoScroll:	true
					}
					, {
						  xtype:		'nrt.calendar.dayviewheader'
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
						  xtype:		'nrt.calendar.dayviewbody'
						, region:		'center'
						, autoScroll:	true
					}
					, {
						  xtype:		'nrt.calendar.dayviewheader'
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
						  xtype:		'nrt.calendar.dayviewbody'
						, region:		'center'
						, autoScroll:	true
					}
					, {
						  xtype:		'nrt.calendar.dayviewheader'
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
