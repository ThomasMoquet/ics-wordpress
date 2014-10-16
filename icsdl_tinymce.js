(function() {
    tinymce.create('tinymce.plugins.icsdllinkPlugin', {
        init : function(ed, url) {
            ed.addCommand('iscdlPopup', function() {
                ed.windowManager.open({
                    file : ajaxurl + '?action=icsdl_tinymce',
                    width : 415,
                    height : 370,
                    inline : 1
                }, {
                    plugin_url : url
                });
            });
            ed.addButton('icsdllink', {
                title : 'Add Event',
                cmd : 'iscdlPopup',
                image : url + '/assets/images/calendar_button.gif'
            });
            ed.onNodeChange.add(function(ed, cm, n) {
				cm.setActive('icsdllink', true);
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
                version : "2"
            };
        }
    });
    tinymce.PluginManager.add('icsdllink', tinymce.plugins.icsdllinkPlugin);
})();