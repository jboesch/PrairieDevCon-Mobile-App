Ext.define('PDC.view.SpeakersList', {
    extend: 'Ext.dataview.List',
    xtype: 'speakerslist',

    config: {
        store: 'Speakers',
        itemTpl: '<div class="speaker"><img src="http://www.prairiedevcon.com/Content/regina/images/speakers/{pic}" height="75" /><div class="name">{speaker}</div><div class="clear"></div></div>'
    }

});