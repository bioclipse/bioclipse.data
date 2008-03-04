// loads all protein sequences + descriptors from a FASTA file

BioclipseConsole = Packages.net.bioclipse.util.BioclipseConsole;

var inputfile = "c:/FASTA/export4.txt";
var outputfile = "c:/FASTA/export4-subloc-result.txt";

// read, write files
String = Packages.java.lang.String;
FileReader = Packages.java.io.FileReader;
FileWriter = Packages.java.io.FileWriter;
BufferedReader = Packages.java.io.BufferedReader;
BufferedWriter = Packages.java.io.BufferedWriter;
Array = Packages.java.lang.reflect.Array;

// SubLoc WS
SubLocServiceLocator = Packages.subloc.SOAPServiceLocator;

function LoadFASTAFile(filename) {
	fr = new FileReader(filename);
	//contents = new StringBuffer();
	contents = Array.newInstance(String, 100000);

	//use buffering, reading one line at a time
	//FileReader always assumes default encoding is OK!
	input = new BufferedReader(fr);
	line = new String(); //not declared within while loop
	i = -1;

	/*
	* readLine is a bit quirky :
	* it returns the content of a line MINUS the newline.
	* it returns null only for the END of the stream.
	* it returns an empty String if two newlines appear in a row.
	*/
	while(( line = input.readLine()) != null && i < 100000) {
		if(line.startsWith(">")) {
			i++;
			contents[i] = line;
			i++;
			contents[i] = "";
		} else {
			contents[i] = contents[i] + line;
		}
		//contents.append(line);
		//contents.append(System.getProperty("line.separator"));
	}
	input.close();
	return contents;
}

function WriteResultFile(filename, ID, result, details) {
	fw = new FileWriter(filename, true);
	//use buffering
	//FileWriter always assumes default encoding is OK!
	output = new BufferedWriter(fw);
	output.write(ID);
	output.newLine();
	if(result == null)
		output.write("ERROR RESULT");
	else
		output.write(result);
	output.newLine();
	output.write("Details:");
	output.newLine();
	if(details == null)
		output.write("ERROR DETAILS");
	else
		output.write(details);
	output.newLine();

	//flush and close both "output" and its underlying FileWriter
	output.close();
}

contents = LoadFASTAFile(inputfile);

// use SubLoc web service to make a localisation prediction
subloc = new SubLocServiceLocator();
sublocAPI = subloc.getAPI();

z = 0;
while(contents[z] != null && rhino.isCanceled() != true) {
	
	// show currently analysed data
	BioclipseConsole.writeToConsole(contents[z] + ": " + contents[z+1]);
	
	// do the analysation
	psort_result = sublocAPI.psort_predict(contents[z+1]);
	result = psort_result.getPrediction();
	details = psort_result.getDetail();
	WriteResultFile(outputfile, contents[z], result, details);
	
	z = z+2;
	
	// and sleep for a second to not spam the webservice
	rhino.sleep(1000);
}

BioclipseConsole.writeToConsole("Analysation of " + inputfile + " done!");