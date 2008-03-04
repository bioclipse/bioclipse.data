// load the AAConverter jar
rhino.load("c:\\aacode.jar");
AAConverter = Packages.aacode.AAConverter;

var protein = "maaqskllpp";

var three_code = AAConverter.toThreeLetterCode(protein);

rhino.showMessage("Three letter code:\n" + three_code);

var one_code = AAConverter.toOneLetterCode(three_code);

rhino.showMessage("Back to one letter code:\n" + one_code);