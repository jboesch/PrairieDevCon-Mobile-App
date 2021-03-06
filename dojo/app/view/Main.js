Ext.define('PDC.view.Main', { // The name of your class. Namespace.[type].className
    extend: 'Ext.tab.Panel', // Extending a panel and adding our own stuff to it
    xtype: 'main', // Alias aka short name for something. Reference. Allows build tool to lazily load it

    config: {
        tabBar: {
            defaults: {
                flex: 1
            },
            docked: 'bottom'
        },

        items: [
            {
                xtype: 'sessions',
                title: 'Sessions',
                iconCls: 'time'
            }
        ]
    }
});