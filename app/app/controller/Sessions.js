Ext.define('PDC.controller.Sessions', {

    extend: 'Ext.app.Controller',

    config: {

        refs: {
            main: 'main',
            sessions: 'sessions',
            sessionDetails: 'sessiondetails component'
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

        var session_store = Ext.getStore('Sessions');
        session_store.clearFilter(true);
        session_store.filter(function(record){
            return record.get('date') == button_clicked.value;
        });

    },

    viewSessionDetails: function(list, idx, el, record){

        // Store one instance of the widget, we don't want to
        // keep re-creating it.
        if(!this.session_details){
            this.session_details = Ext.widget('sessiondetails');
        }

        // We have to force the list item to deselect. Bleh :/
        setTimeout(function(){ list.deselect(idx); }, 500);

//        var speaker_record = Ext.getStore('Speakers').findRecord('speaker', record.get('speaker'));

        this.session_details.config.title = record.get('title');
        this.getSessions().push(this.session_details);
        this.getSessionDetails().setRecord(record);

    }

});
