// the rhino object conatains functions for simplifying scripting...

rhino.showMessage("Hello", "Bioclipse :)");
rhino.showMessage("Bioclipse :)");

BioclipseConsole = Packages.net.bioclipse.util.BioclipseConsole;

BioclipseConsole.writeToConsole("Hello Bioclipse!");

i = 0;

while(i < 10) {
	BioclipseConsole.writeToConsole("Hello Bioclipse!");
	i++;
}

i = i + 1;