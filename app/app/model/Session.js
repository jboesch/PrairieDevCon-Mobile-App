Ext.define('PDC.model.Session', {
    extend: 'Ext.data.Model',
    config: {
        // 'pic' field is only used for when we manually shove it on in the controller.
        fields: ['id', 'speaker', 'title', 'room', 'start', 'end', 'date', 'dojo', 'description', 'pic']
    }
});