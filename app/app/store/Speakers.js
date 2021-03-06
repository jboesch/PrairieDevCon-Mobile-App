Ext.define('PDC.store.Speakers', {
    extend: 'Ext.data.Store',

    config: {
        grouper: function(record){
            return record.get('speaker');
        },
        model: 'PDC.model.Speaker',
        proxy: {
            type: 'ajax',
            url : 'data/speakers.json',
            reader: {
                type: 'json'
            }
        },
        autoLoad: true
    }
});