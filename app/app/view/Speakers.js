Ext.define('PDC.view.Speakers', {
    extend: 'Ext.Container',
    xtype: 'speakers',
    id: 'speakers',

    requires: [
        'PDC.view.SpeakersList'
    ],

    config: {
        layout: 'fit',
        items: [
            {
                xtype: 'toolbar',
                title: 'Speakers',
                docked: 'top',
                ui: 'light'
            },
            {
                xtype: 'speakerslist'
            }
        ]
    }
});