Ext.define('PDC.controller.Speakers', {

    extend: 'Ext.app.Controller',

    config: {

        refs: {
            main: 'main',
            speakers: 'speakers',
            speakerDetails: 'speakerdetails component'
        },

        control: {
            speakerslist: {
                itemtap: 'viewSpeakerDetails'
            }
        }
    },

    viewSpeakerDetails: function(list, idx, el, record){

        // Store one instance of the widget, we don't want to
        // keep re-creating it.
        if(!this.speaker_details){
            this.speaker_details = Ext.widget('speakerdetails');
        }

        // We have to force the list item to deselect. Bleh :/
        setTimeout(function(){ list.deselect(idx); }, 500);

        this.speaker_details.config.title = record.get('speaker');
        this.getSpeakers().push(this.speaker_details);
        this.getSpeakerDetails().setRecord(record);

    }

});
