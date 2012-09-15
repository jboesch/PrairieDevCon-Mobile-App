Ext.define('PDC.view.SessionsList', {
    extend: 'Ext.dataview.List',
    xtype: 'sessionslist',
    id: 'sessions-list',

    initialize: function () {

        this.callParent();
        var segmented_buttons = Ext.getCmp('session-date-buttons');
        segmented_buttons.setPressedButtons([0]);
        var button_clicked = segmented_buttons.getItems().items[0];

        // BUG: http://www.sencha.com/forum/showthread.php?203744-Ext.SegmentedButton-gt-setPressedButtons-doesn-t-trigger-quot-toggle-quot-event
        // We have to manually trigger the toggle function after calling setPressedButton();
        segmented_buttons.fireEvent('toggle', segmented_buttons, button_clicked, true);

    },

    config: {
        store: 'Sessions',
        grouped: true,
        onItemDisclosure: true,
        itemTpl: '<div class="session"><div class="title">{title}</div><div class="room">{speaker}</div></div>'
    }

});