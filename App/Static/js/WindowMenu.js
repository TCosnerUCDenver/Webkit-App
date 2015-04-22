//Instantiate Gui
var nw = require('nw.gui');
 
// Window Menu
var windowMenu = new nw.Menu({
	type: 'menubar'
});
 
// Help Menu
var helpMenu = new nw.Menu();
 
// Add Help Menu to Window Menu
windowMenu.append(new nw.MenuItem({
	label: 'Help',
	submenu: helpMenu
}));
 
 // About sub-entry
helpMenu.append(new nw.MenuItem({
	label: 'about',
	click: function(){
		var a_window = nw.Window.get(window.open('../../Templates/about_pop.html',{
            "position": "center",
            "focus": true,
            "toolbar": false,
            "frame": true,

        }));
    }
}));

// Assign to window
nw.Window.get().menu = windowMenu;
