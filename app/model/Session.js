Ext.define('PDC.model.Session', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['id', 'speaker', 'title', 'room', 'start', 'end', 'date', 'dojo']
    }
});