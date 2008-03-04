// to have short identifiers
Array = Packages.java.lang.reflect.Array;
DbfetchServiceServiceLocator = Packages.uk.ac.ebi.www.ws.services.urn.Dbfetch.DbfetchServiceServiceLocator;
SubLocServiceLocator = Packages.subloc.SOAPServiceLocator;

// use WSDbfetch Web Service to get protein sequence for later usage (Ccp1 of Aspergillus fumigatus: uniprot:Q4WPF8)
wsdbfetch = new DbfetchServiceServiceLocator();
strarray = wsdbfetch.getUrnDbfetch().fetchData("uniprot:Q4WPF8", "fasta", "raw");

// the answer is FASTA format
// just remove the first line ;)
var protein = "";
for (i = 1; i < Array.getLength(strarray); i++) {
	if (i != 1)
		protein = protein + ("\n");
	protein = protein + strarray[i];
}

// show search result
rhino.showMessage("Search result", "In FASTA format, first line removed:\n" + protein);

// use SubLoc web service to make a localisation prediction
subloc = new SubLocServiceLocator();
sublocAPI = subloc.getAPI();
psort_result = sublocAPI.psort_predict(protein);

str = "Localisation: ";
str = str + psort_result.getPrediction();
str = str + "\nDetails:\n";
str = str + psort_result.getDetail();

// show prediction result
rhino.showMessage("Result of PSORT", str);