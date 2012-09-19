Ext.define('PDC.view.Sessions', {
    extend: 'Ext.NavigationView',
    xtype: 'sessions',

    requires: [
        'PDC.view.SessionsList',
        'Ext.SegmentedButton'
    ],

    config: {
        autoDestroy: false,
        tab: {
            title: 'Sessions',
            iconCls: 'time'
        },
        items: [
            {
                xtype: 'sessionslist'
            }
        ]
    }
});