Ext.define('PDC.view.Speakers', {
    extend: 'Ext.NavigationView',
    xtype: 'speakers',

    config: {
        autoDestroy: false,
        items: [
            {
                xtype: 'speakerslist'
            }
        ]
    }
});