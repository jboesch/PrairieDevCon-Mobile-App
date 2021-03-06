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

        // Query the speaker record to find it by speaker name
        var speaker_record = Ext.getStore('Speakers').findRecord('speaker', record.get('speaker'));
        // Shove the profile pic onto the session details record
        var speaker_pic = (speaker_record) ? speaker_record.get('pic') : 'nopic.jpg';

        // Get the existing data object, shove .pic onto the end and set it.
        // You cannot use record.set('pic', speaker_pic) or it shuffles the list items around.. So weird.
        var data = record.getData();
        data.pic = speaker_pic;
        record.setData(data);

        this.session_details.config.title = record.get('title');
        this.getSessions().push(this.session_details);
        this.getSessionDetails().setRecord(record);

    }

});
