Ext.define('PDC.view.Sessions', {
    extend: 'Ext.NavigationView',
    xtype: 'sessions',

    config: {
        autoDestroy: false,
        items: [
            {
                xtype: 'sessionslist'
            }
        ]
    }
});