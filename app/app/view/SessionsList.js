Ext.define('PDC.view.SessionsList', {
    extend: 'Ext.dataview.List',
    xtype: 'sessionslist',
    id: 'sessions-list',

    initialize: function () {

        this.callParent();
        var segmented_buttons = Ext.getCmp('session-date-buttons');
        var button_index = 0;
        var button_items = segmented_buttons.getItems();
        var today = Ext.Date.format(new Date(), 'Y-m-d');

        // If we're on day 2, make sure we default to selecting day 2 of the event
        Ext.Array.each(button_items.items, function(item, i){
            if(item.value == today){
                button_index = i;
            }
        });

        segmented_buttons.setPressedButtons([button_index]);
        var button_clicked = button_items.items[button_index];

        // BUG: http://www.sencha.com/forum/showthread.php?203744-Ext.SegmentedButton-gt-setPressedButtons-doesn-t-trigger-quot-toggle-quot-event
        // We have to manually trigger the toggle function after calling setPressedButton();
        segmented_buttons.fireEvent('toggle', segmented_buttons, button_clicked, true);

    },

    config: {
        store: 'Sessions',
        grouped: true,
        onItemDisclosure: true,
        itemTpl: '<div class="session"><div class="title">{title}</div><div class="room">{speaker}</div></div>'
    }

});