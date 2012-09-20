Ext.define('PDC.view.SpeakerDetails', {

    extend: 'Ext.Container',
    xtype: 'speakerdetails',

    config: {

        fullscreen: true,
        layout: 'vbox',
        scrollable: 'vertical',

        items: [
            {
                xtype: 'component',
                cls: 'speaker-details',
                tpl: Ext.create('Ext.XTemplate',
                    '<div class="inner">',
                        '<img src="http://www.prairiedevcon.com/Content/regina/images/speakers/{pic}" />',
                        '<div class="speaker-info">',
                            '<h3>{speaker}</h3>',
                            '{[this.showHeadingIfExists(values.company)]}{[this.showHeadingIfExists(values.location)]}',
                        '</div>',
                        '<div class="clear"></div>',
                    '</div>',
                    '<div class="sep">Bio</div>',
                    '<div class="inner">',
                        '<p>{bio}</p>',
                    '</div>',
                    '<div class="sep">Contact</div>',
                    '<div class="inner">',
                        '{[this.showContactInfo(values)]}',
                    '</div>',
                    {
                        showHeadingIfExists: function(val) {
                            return val ? '<h4>' + val + '</h4>' : '';
                        },
                        showContactInfo: function(o){
                            var out = [];
                            if(o.email){
                                out.push('Email: <a href="mailto:' + o.email + '">' + o.email + '</a>');
                            }
                            if(o.twitter){
                                out.push('Twitter: <a href="http://twitter.com/' + o.twitter + '">@' + o.twitter + '</a>');
                            }
                            if(o.website){
                                out.push('Website: <a href="http://' + o.website + '">http://' + o.website + '</a>');
                            }
                            return out.join('<br/>');
                        }
                    }
                )
            }
        ]

    }
});