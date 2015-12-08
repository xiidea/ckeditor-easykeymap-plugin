Easy Keymap
==========
CKEditor plugin for custom keymap

Installation
-------------

 1. Extract the contents of the file into the "plugins" folder of CKEditor.
 2. In the CKEditor configuration file (config.js) add the following code:

````js
config.extraPlugins = 'easykeymap';
````
 3. You can now define your key map through following config parameter

````js
config.easykeymaps = {
		4456530 : String.fromCharCode(174),   //ALT + R
		4456515 : String.fromCharCode(169)   //ALT + C
	};

config.easykeymaps[CKEDITOR.ALT + 81] = String.fromCharCode(190);    //ALT + Q
```
