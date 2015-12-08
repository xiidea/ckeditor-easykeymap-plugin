/**
 * This work is mine, and yours. You can modify it as you wish.
 * @Author: Roni Saha<roni.cse@gmail.com>
 *
 * This source file is subject to the MIT license that is bundled
 * with this source code in the file LICENSE.
 */

CKEDITOR.plugins.add('easykeymap',
    {
        init: function (editor) {

            var keyMaps = CKEDITOR.tools.extend({}, editor.config.easykeymaps || {}, true);

            function isRegisteredKeystroke(code) {
                if(typeof editor.keystrokeHandler.keystrokes[code] != 'undefined') {
                    console.warn("the keystroke : " + code + " is being attached to another event")
                    return true;
                }

                return false;
            }

            function getMappedCharacter(code) {
                return typeof keyMaps[code] != 'undefined' ? keyMaps[code] : false;
            }

            editor.on( 'key', function( event ) {
                console.log(event.data.keyCode);
                var char;
                if ((char = getMappedCharacter(event.data.keyCode)) && !isRegisteredKeystroke(event.data.keyCode)) {
                    editor.insertText(char);
                    event.cancel();
                }
            } );
        }
    });