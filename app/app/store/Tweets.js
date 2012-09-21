Ext.define('PDC.store.Tweets', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.proxy.JsonP'
    ],

    config: {
        fields: ['from_user', 'profile_image_url', 'text', 'created_at', 'id', 'id_str'],

        pageSize: 10,

        proxy: {
            type: 'jsonp',
            url: 'http://search.twitter.com/search.json',

            pageParam: 'page',
            limitParam: 'rpp',

            reader: {
                type: 'json',
                rootProperty: 'results'
            }
        }
    }
});