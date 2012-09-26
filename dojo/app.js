Ext.application({
    name: 'PDC',
    views: [
        'Main'
    ],

    models: [
    ],
    controllers: [
    ],
    stores: [
    ],

    launch: function(){

        Ext.Viewport.add({
            xclass: 'PDC.view.Main'
        });

    }

});