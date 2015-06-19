(function() {
    tinymce.PluginManager.add( 'custom_class', function( editor, url ) {
        // Add Button to Visual Editor Toolbar
        editor.addButton('custom_class', {
            title: 'Insert CSS Class',
            cmd: 'custom_class',
            image: url + '/icon.png',
        });
 
        // Add Command when Button Clicked
        editor.addCommand('custom_class', function() {
            // Check we have selected some text selected
            var text = editor.selection.getContent({
                'format': 'html'
            });
            if ( text.length === 0 ) {
                alert( 'Please select some text.' );
                return;
            }

            // Ask the user to enter a CSS class
            var result = prompt('Enter the CSS class');
            if ( !result ) {
                // User cancelled - exit
                return;
            }
            if (result.length === 0) {
                // User didn't enter anything - exit
                return;
            }

            // Insert selected text back into editor, wrapping it in an anchor tag
            editor.execCommand('mceReplaceContent', false, '<span class="' + result + '">' + text + '</span>');
        });
    });
})();