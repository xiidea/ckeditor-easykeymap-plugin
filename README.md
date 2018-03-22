Easy Keymap
==========
CKEditor plugin for custom keymap

Installation
-------------

* Extract the **easykeymap** folder into the "plugins" folder of CKEditor.
* In the CKEditor configuration file (config.js) add the following code:

````js
config.extraPlugins = 'easykeymap';
````

* You can now define your key map through following config parameter

````js
config.easykeymaps = {
		4456530 : String.fromCharCode(174),   //ALT + R
		4456515 : String.fromCharCode(169)   //ALT + C
	};
```
OR
````js
config.easykeymaps[CKEDITOR.ALT + 81] = String.fromCharCode(190);    //ALT + Q
```
OR
````js
CKEDITOR.config.easykeymaps = {
        4456530 : String.fromCharCode(174),   //ALT + R
        4456515 : String.fromCharCode(169)   //ALT + C
   };
```

* You can also define shortcut action like this   

````js
	config.easykeymaps[CKEDITOR.CTRL + 83] = function(editor, code){
		alert("You have entered 'CTRL + S' (keyCode: "+ code +") In editor: " + editor.name);
	};
```
