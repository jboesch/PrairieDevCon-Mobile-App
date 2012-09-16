Ext.define('PDC.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    id: 'main',

    config: {
        fullscreen: true,

        tabBar: {
            defaults: {
                flex: 1
            },
            docked: 'bottom',
            layout: {
                pack: 'center'
            }
        },

        items: [
            {
                title: 'Sessions',
                iconCls: 'home',
                xtype: 'sessions'
            }
        ]
    }
});