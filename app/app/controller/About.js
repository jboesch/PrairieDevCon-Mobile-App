Ext.define('PDC.controller.About', {

    extend: 'Ext.app.Controller',

    config: {

        refs: {
            about: 'about'
        },
        control: {
            aboutlist: {
                itemtap: 'onAboutItemTap'
            }
        }
    },

    onAboutItemTap: function(list, idx, el, record) {

        // We have to force the list item to deselect. Bleh :/
        setTimeout(function(){ list.deselect(idx); }, 500);

        this.getAbout().push(record.getData());

    }
});