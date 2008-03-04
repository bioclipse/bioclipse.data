BioclipseConsole = Packages.net.bioclipse.util.BioclipseConsole;

var i = 1;
var output = ":)";

while(i < 10) {
	// check if script was canceled by the user
	if (rhino.isCanceled() == true) {
		BioclipseConsole.writeToConsole("The job was canceled!");
		break;	// exit the loop.
	}

	rhino.sleep(1000);
	i++;
	BioclipseConsole.writeToConsole(output);
	output = " " + output;
}