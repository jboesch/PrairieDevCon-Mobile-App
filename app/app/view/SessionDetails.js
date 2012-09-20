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
                        '<img src="http://www.prairiedevcon.com/Content/regina/images/speakers/{pic}" />',
                        '<div class="speaker-info">',
                            '<h3>{title}</h3>',
                            '<h4>{speaker}{[this.showDojo(values)]}</h4>',
                            '<h4>{[this.formatTime(values)]}</h4>',
                            '<small>{room}</small>',
                        '</div>',
                        '<div class="clear"></div>',
                    '</div>',
                    '<div class="sep">Description</div>',
                    '<div class="inner">',
                        '<p>{description}</p>',
                    '</div>',
                    {
                        formatTime: function(o) {
                            var start = Ext.Date.format(new Date('01/01/2012 ' + o.start), 'g:i A');
                            var end = Ext.Date.format(new Date('01/01/2012 ' + o.end), 'g:i A');
                            return start + ' &raquo; ' + end;
                        },
                        showDojo: function(o){
                            return (o.dojo ? '<span class="dojo-tag">dojo</span>' : '');
                        }
                    }
                )
            }
        ]

    }
});