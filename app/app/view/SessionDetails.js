Ext.define('PDC.view.SessionDetails', {

    extend: 'Ext.Container',
    xtype: 'sessiondetails',

    config: {

        layout: 'vbox',
        scrollable: 'vertical',

        tpl: Ext.create('Ext.XTemplate',
            '<p>Name: {speaker}</p>'
        )

    }
});