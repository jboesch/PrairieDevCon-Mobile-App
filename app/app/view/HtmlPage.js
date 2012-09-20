Ext.define('PDC.view.HtmlPage', {

    extend: 'Ext.Container',
    xtype: 'htmlpage',

    config: {
        scrollable: 'vertical',
        cls: 'html-page'
    },

    initialize: function() {

        Ext.Ajax.request({
            url: this.config.url,
            success: function(rs) {
                this.setHtml(rs.responseText);
            },
            scope: this
        });

    }
});