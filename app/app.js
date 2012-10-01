//Ext.Loader.setPath({
//    'Ext':  'touch/src'
//});

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
        'App',
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

    icon: {
        57: 'resources/images/pdc-ios-logo-57.png',
        72: 'resources/images/pdc-ios-logo-72.png',
        114: 'resources/images/pdc-ios-logo-114.png'
    },

    startupImage: {
        '320x460': 'resources/images/pdc-startup.png'
    },

    launch: function(){

        // Remove our 'loading' class
        document.body.className = '';

        Ext.Viewport.add({
            xclass: 'PDC.view.Main'
        });

        var AppController = this.getApplication().getController('App');
        AppController.setPanelHash('sessions');

    }

});