Ext.define('PDC.view.Location', {
    extend: 'Ext.NavigationView',
    xtype: 'location',

    requires: [
        'Ext.Map'
    ],

    config: {
        items: [
            {
                title: 'Location',
                xtype: 'map',
                mapOptions: {
                    center: new google.maps.LatLng(50.452192, -104.6092889),
                    zoom: 14,
                    disableDefaultUI: true
                }
            }
        ]
    }
});