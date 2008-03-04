/************************************************************************
 This is a sample script to test multithreaded scripting.
 Scripts can optionally run as an eclipse job in their own thread.
 However it is not save to access the main thread from another thread,
 especially the GUI!
 In this case it is required to prepare a Runnable object and execute
 it with syncExec().
 Note: it is possible to cancel a rhino job; however the script must
 actively check the canceled status with rhino.isCanceled()
************************************************************************/

BioclipseConsole = Packages.net.bioclipse.util.BioclipseConsole;
Thread = Packages.java.lang.Thread;
Runnable = Packages.java.lang.Runnable;

var i = 1;
var output = ":)";

//rhino.sleep(1000);
Thread.sleep(1000);

var r = new Runnable() {
	run: function() {
		// this is a blocking GUI element that will wait for user input!
		rhino.showMessage("Test ASYNC!", "Hello World!");
	}
};

rhino.syncExec(r);

while(i < 10) {
	// check if script was canceled by the user
	if (rhino.isCanceled() == true) {
		BioclipseConsole.writeToConsole("The job was canceled!");
		break;	// exit the loop.
	}

	Thread.sleep(1000);
	i++;
	BioclipseConsole.writeToConsole(output);
	output = " " + output;
}