BioclipseConsole = Packages.net.bioclipse.util.BioclipseConsole;
Runnable = Packages.java.lang.Runnable;

BioclipseConsole.writeToConsole("Thread starts ... ");

var r = new Runnable() {
   run: function() {
      // this is a blocking GUI element: waits for user input!
      BioclipseConsole.writeToConsole("Thread waits for user...");
      rhino.showMessage("Test ASYNC!", "Hello World!");
   }
};

rhino.syncExec(r);

BioclipseConsole.writeToConsole("Thread continues... and finishes.");