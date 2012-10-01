Ext.define('PDC.controller.App', {

    extend: 'Ext.app.Controller',

    config: {
        refs: {
            main: 'main',
            sessions: 'sessions'
        },
        control: {
            main: {
                activeitemchange: 'onActiveItemChange'
            },
            sessions: {
                activeitemchange: 'onActiveItemChange'
            },
            speakers: {
                activeitemchange: 'onActiveItemChange'
            }
        },
        routes: {
            'panel/:id': 'showPanel'
        }
    },

    onActiveItemChange: function(me, newActiveItem, oldActiveItem, eOpts) {

        var page = newActiveItem.config.xtype || newActiveItem.getId();
        this.setPanelHash(page);

    },

    showPanel: function(id){

        // Rather hack-ish... but gets the history/routing working
        var items = PDC.view.Main.prototype.config.items;

        for(var i = 0; i < items.length; i++){
            if(id == items[i].xtype){
                this.getMain().setActiveItem(i);
            }
        }

    },

    setPanelHash: function(page){
        window.location.hash = 'panel/' + page;
    }

});