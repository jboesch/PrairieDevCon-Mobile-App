Ext.define('PDC.controller.Sessions', {

    extend: 'Ext.app.Controller',

    config: {

        refs: {
            main: 'main',
            sessions: 'sessions',
            sessionDetails: 'sessions sessiondetails'
        },

        control: {
            segmentedbutton: {
                toggle: 'switchSessionDate'
            },
            sessionslist: {
                itemtap: 'viewSessionDetails'
            }
        }
    },

    switchSessionDate: function(segment, button_clicked){

        Ext.getStore('Sessions').clearFilter(true);
        Ext.getStore('Sessions').filter(function(record){
            return record.get('date') == button_clicked.value;
        });

    },

    viewSessionDetails: function(list, idx, el, record){

        // Store one instance of the widget, we don't want to
        // keep re-creating it.
        if(!this.sessionDetails){
            this.sessionDetails = Ext.widget('sessiondetails');
        }

        this.getSessions().push(this.sessionDetails);
        this.getSessionDetails().setRecord(record);

    }

});
