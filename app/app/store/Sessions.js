Ext.define('PDC.store.Sessions', {
    extend: 'Ext.data.Store',

    config: {
        grouper: function(record){
            return record.get('start');
        },
        model: 'PDC.model.Session',
        proxy: {
            type: 'ajax',
            url : 'data/sessions.json',
            reader: {
                type: 'json'
            }
        },
        autoLoad: true
    }
});