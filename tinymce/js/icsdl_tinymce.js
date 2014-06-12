(function() {
    tinymce.create('tinymce.plugins.icsdllink', {
        init : function(ed, url) {
            ed.addCommand('eventDialog', function() {
                ed.windowManager.open({
                    file : ajaxurl + '?action=icsdl_tinymce',
                    width : 415,
                    height : 270,
                    inline : 1
                }, {
                    plugin_url : url,
                });
            });
            ed.addButton('icsbutton', {
                title : 'Add Event',
                cmd : 'eventDialog',
                image : url + '/assets/images/calendar_button.gif'
            });
            ed.onNodeChange.add(function(ed, cm, n) {
                cm.setActive('icsdllink', (tinymce.DOM.hasClass(n.parentNode.parentNode,'vevent')||tinymce.DOM.hasClass(n.parentNode,'vevent')||tinymce.DOM.hasClass(n,'vevent')));
            });
        },
        createControl : function(n, cm) {
            return null;
        },
        getInfo : function() {
            return {
                longname : 'ICS Button Plugin',
                author : 'Thomas Moquet',
                infourl : 'https://github.com/ThomasMoquet/ics-wordpress',
                version : "1"
            };
        }
    });
    tinymce.PluginManager.add('icsdllink', tinymce.plugins.icsdllink);
})();