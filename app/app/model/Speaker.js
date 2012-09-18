Ext.define('PDC.model.Speaker', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['id', 'speaker', 'bio', 'email', 'website', 'twitter', 'pic', 'company', 'location']
    }
});