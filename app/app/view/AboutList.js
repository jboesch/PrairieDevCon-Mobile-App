Ext.define('PDC.view.AboutList', {
    extend: 'Ext.dataview.List',
    xtype: 'aboutlist',

    config: {
        title: 'About',
        ui: 'round',
        itemTpl: '{title}',
        data: [
            {
                title: 'Overview',
                xtype: 'htmlpage',
                url: 'data/about/overview.html'
            },
            {
                title: 'Sponsors',
                xtype: 'htmlpage',
                url: 'data/about/sponsors.html'
            },
            {
                title: 'Credits',
                xtype: 'htmlpage',
                url: 'data/about/credits.html'
            }
        ]
    }

});