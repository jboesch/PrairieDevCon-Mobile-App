Ext.define('PDC.controller.Tweets', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            title: 'tweets titlebar'
        },
        control: {
            tweets: {
                activate: 'onActivate',
                itemtap: 'onTweetTap'
            }
        }
    },

    onActivate: function() {
        if (!this.loadedTweets) {

            var search = '#pdc2012';
            this.getTitle().setTitle(search);

            Ext.getStore('Tweets').getProxy().setExtraParams({
                q: search
            });
            Ext.getStore('Tweets').load();

            this.loadedTweets = true;
        }
    },

    onTweetTap: function(list, idx, el, record){

        // We have to force the list item to deselect. Bleh :/
        setTimeout(function(){ list.deselect(idx); }, 500);

        var id_str = record.get('id_str');
        var id = id_str ? id_str : record.get('id');
        var url = 'http://twitter.com/' + record.get('from_user') + '/status/' + id;

        window.location.href = url;

    }

});