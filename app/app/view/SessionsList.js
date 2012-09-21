Ext.define('PDC.view.SessionsList', {
    extend: 'Ext.dataview.List',
    xtype: 'sessionslist',

    requires: [
        'Ext.SegmentedButton'
    ],

    initialize: function () {

        this.callParent();

        Ext.Ajax.request({
            url: 'data/dates.json',
            success: function(res) {

                var dates = Ext.decode(res.responseText);
                var segmented_buttons = Ext.getCmp('session-date-buttons');
                segmented_buttons.setItems(dates);

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
            scope: this
        });



    },

    config: {
        title: 'Sessions',
        store: 'Sessions',
        grouped: true,
        itemTpl: Ext.create('Ext.XTemplate',
            '<div class="session"><div class="title">{title}</div><div class="room">{speaker}{[this.showDojo(values)]}</div><div class="clear"></div></div>',
            {
                showDojo: function(o){
                    return (o.dojo ? '<span class="dojo-tag">dojo</span>' : '');
                }
            }
        ),
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                ui: 'gray',
                items: [{
                    id: 'session-date-buttons',
                    xtype: 'segmentedbutton',
                    allowDepress: false,
                    width: '100%',
                    padding: "0 5",
                    defaults: {
                        flex: 1
                    }
                }]
            }
        ]
    }

});