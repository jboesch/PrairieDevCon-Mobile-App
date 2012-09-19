Ext.define('PDC.controller.Location', {

    extend: 'Ext.app.Controller',

    config: {
        control: {
            map: { // the xtype
                maprender: 'onMapRender'
            }
        }
    },

    onMapRender: function(that, map) {

        var lat_lng = new google.maps.LatLng(50.452192, -104.6092889);
        var marker = new google.maps.Marker({
            position: lat_lng
        });
        marker.setMap(map);

        var content = ['Delta Regina', '1919 Saskatchewan Drive', 'Regina, SK', '1-800-209-3555'];
        var infowindow = new google.maps.InfoWindow({
            content: content.join('<br/>')
        });

        infowindow.open(map, marker);

    }

});
