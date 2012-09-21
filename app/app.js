Ext.Loader.setPath({
    'Ext':  'touch/src'
});

Ext.application({
    name: 'PDC',
    views: [
        'Main',
        'Sessions',
        'SessionsList',
        'SessionDetails',
        'Speakers',
        'SpeakersList',
        'SpeakerDetails',
        'Location',
        'About',
        'AboutList',
        'Tweets',
        'HtmlPage'
    ],

    models: [
        'Session',
        'Speaker'
    ],
    controllers: [
        'Location',
        'Sessions',
        'Speakers',
        'About',
        'Tweets'
    ],
    stores: [
        'Sessions',
        'Speakers',
        'Tweets'
    ],

//    icon: {
//        57: 'm/resources/images/7s-ios-logo-57.png',
//        114: 'm/resources/images/7s-ios-logo-114.png'
//    },
//
//    phoneStartupScreen: 'm/resources/images/7s-ios-startup.png',

    launch: function(){

        // Remove our 'loading' class
        document.body.className = '';

        Ext.Viewport.add({
            xclass: 'PDC.view.Main'
        });

    }

});