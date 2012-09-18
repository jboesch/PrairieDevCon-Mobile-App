Ext.define('PDC.view.Sessions', {
    extend: 'Ext.Container',
    xtype: 'sessions',
    id: 'sessions',

    requires: [
        'PDC.view.SessionsList',
        'Ext.SegmentedButton'
    ],

    config: {
        layout: 'fit',
        items: [
            {
                xtype: 'toolbar',
                title: 'Sessions',
                docked: 'top',
                ui: 'light'
            },
            {
                xtype: 'toolbar',
                docked: 'top',
                scrollable: false,
                ui: 'gray',
                items: [{
                    id: 'session-date-buttons',
                    xtype: 'segmentedbutton',
                    allowDepress: false,
                    width: '100%',
                    padding: "0 5",
                    listeners: {
                        toggle: function(segment, button_clicked){
                            Ext.getStore('Sessions').clearFilter(true);
                            Ext.getStore('Sessions').filter(function(record){
                                return record.get('date') == button_clicked.value;
                            });
                        }
                    },
                    defaults: {
                        flex: 1
                    },
                    items: [
                        {
                            text: 'Mon, Oct 1',
                            value: '2012-10-01'
                        },
                        {
                            text: 'Tue, Oct 2',
                            value: '2012-10-02'
                        }
                    ]
                }]
            },
            {
                xtype: 'sessionslist'
            }
        ]
    }
});