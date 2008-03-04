SWT = Packages.org.eclipse.swt.SWT;
MenuItem = Packages.org.eclipse.swt.widgets.MenuItem;
Listener = Packages.org.eclipse.swt.widgets.Listener;

var shell = rhino.getShell();
var menubar = shell.getMenuBar();
var menubaritem = menubar.getItem(2);
var menu = menubaritem.getMenu();

var action = new Listener() {
		handleEvent: function(e) {
			rhino.showMessage("Bioclipse", "Hello Action :)");
		}
	}

item = new MenuItem(menu, SWT.PUSH);
item.addListener(SWT.Selection, action);
item.setText("Rhino Test");