Ext.define('PDC.view.SpeakersList', {
    extend: 'Ext.dataview.List',
    xtype: 'speakerslist',

    config: {
        store: 'Speakers',
        itemTpl: '<div class="speaker"><div class="pic">{pic}</div><div class="name">{speaker}</div></div>'
    }

});