Ext.define('PDC.view.Speakers', {
    extend: 'Ext.NavigationView',
    xtype: 'speakers',

    requires: [
        'PDC.view.SpeakersList'
    ],

    config: {
        autoDestroy: false,
        tab: {
            title: 'Speakers',
            iconCls: 'team'
        },
        items: [
            {
                xtype: 'speakerslist'
            }
        ]
    }
});