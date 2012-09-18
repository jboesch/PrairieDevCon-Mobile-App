Ext.Loader.setPath({
    'Ext':  'touch/src'
});

Ext.application({
    name: 'PDC',
    views: [
        'Main',
        'Sessions',
        'Speakers'
    ],

    models: [
        'Session',
        'Speaker'
    ],
    controllers: [
    ],
    stores: [
        'Sessions',
        'Speakers'
    ],

//    icon: {
//        57: 'm/resources/images/7s-ios-logo-57.png',
//        114: 'm/resources/images/7s-ios-logo-114.png'
//    },
//
//    phoneStartupScreen: 'm/resources/images/7s-ios-startup.png',

    launch: function(){

        Ext.Viewport.add({
            xclass: 'PDC.view.Main'
        });

        // Remove our 'loading' class
        // document.body.className = '';

    }

});