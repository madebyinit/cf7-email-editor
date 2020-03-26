jQuery(function($) {

    if($('#wpcf7-contact-form-editor') && $('#wpcf7-contact-form-editor').length > 0) {
        init_tinymce_editor();

        $('#wpcf7-mail-use-html, #wpcf7-mail-2-use-html').change(function() {
            init_tinymce_editor();
        });
    }

    function init_tinymce_editor() {

        var editors = [
            {
                toggle: $('#wpcf7-mail-use-html'),
                editor: 'wpcf7-mail-body'
            },
            {
                toggle: $('#wpcf7-mail-2-use-html'),
                editor: 'wpcf7-mail-2-body'
            }
        ];

        $.each(editors, function() {

            if(this.toggle.is(':checked')) {

                tinymce.init({
                    relative_urls: false,
                    remove_script_host: false,
                    mode: 'exact',
                    elements: this.editor,
                    theme: 'modern',
                    skin: 'lightgray',
                    menubar: false,
                    statusbar: false,
					height: '600',
                    toolbar1: 'template,|,bold,italic,strikethrough,bullist,numlist,blockquote,hr,alignleft,aligncenter,alignright,link,unlink,wp_more,spellchecker,wp_fullscreen,wp_adv',
                    toolbar2: 'formatselect,underline,alignjustify,forecolor,pastetext,removeformat,charmap,outdent,indent,undo,redo,wp_help',
                    plugins: 'paste textcolor colorpicker wordpress fullscreen',
                    paste_auto_cleanup_on_paste: true,
                    paste_postprocess: function(pl, o) {
                        o.node.innerHTML = o.node.innerHTML.replace(/&nbsp;+/ig, ' ');
                    }
                });

            }
        });
    }
});