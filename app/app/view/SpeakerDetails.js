Ext.define('PDC.view.SpeakerDetails', {

    extend: 'Ext.Container',
    xtype: 'speakerdetails',

    config: {

        layout: 'vbox',
        scrollable: 'vertical',

        items: [
            {
                xtype: 'component',
                cls: 'speaker-details',
                tpl: Ext.create('Ext.XTemplate',
                    '<div class="inner">{speaker}</div>'
                )
            }
        ]

    }
});