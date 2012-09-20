Ext.define('PDC.view.About', {
    extend: 'Ext.NavigationView',
    xtype: 'about',

    config: {
        items: [
            {
                xtype: 'aboutlist'
            }
        ]
    }
});