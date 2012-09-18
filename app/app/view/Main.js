Ext.define('PDC.view.Main', { // The name of your class. Namespace.[type].className
    extend: 'Ext.tab.Panel', // Extending a panel and adding our own stuff to it
    xtype: 'main', // Alias aka short name for something. Reference. Allows build tool to lazily load it
    id: 'main', // An ID to query the component by

    config: {
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
            },
            {
                title: 'Speakers',
                iconCls: 'home',
                xtype: 'speakers'
            },
            {
                title: 'Location',
                iconCls: 'home',
                xtype: 'location'
            }
        ]
    }
});