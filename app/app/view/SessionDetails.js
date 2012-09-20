Ext.define('PDC.view.SessionDetails', {

    extend: 'Ext.Container',
    xtype: 'sessiondetails',

    config: {

        layout: 'vbox',
        scrollable: 'vertical',

        items: [
            {
                xtype: 'component',
                cls: 'session-details',
                tpl: Ext.create('Ext.XTemplate',
                    '<div class="inner">',
                        '<h3>{title}</h3>',
                        '<h4>{speaker} &middot; {[this.formatTime(values)]} &middot; <small>{room}</small></h4>',
                    '</div>',
                    '<div class="sep">Description</div>',
                    '<div class="inner">',
                        '<p>{description}</p>',
                    '</div>',
                    {
                        formatTime: function(o) {
                            var start = Ext.Date.format(new Date('2012-01-01 ' + o.start), 'g:i A');
                            var end = Ext.Date.format(new Date('2012-01-01 ' + o.end), 'g:i A');
                            return start + ' &raquo; ' + end;
                        }
                    }
                )
            }
        ]

    }
});