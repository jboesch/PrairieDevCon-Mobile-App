Ext.define('PDC.store.Sessions', {
    extend: 'Ext.data.Store',

    config: {
        grouper: {
            groupFn: function(record){
                return Ext.Date.format(new Date('2012-01-01 ' + record.get('start')), 'g:i a');
            },
            sortProperty: 'start'
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