// to have short identifiers
EBIWSDbfetchWizard = Packages.net.bioclipse.plugins.bc_webservices.wizards.newwizards.EBIWSDbfetchWizard;
WizardDialog = Packages.org.eclipse.jface.wizard.WizardDialog;

// pre-set some variables
database = "pdb";
format = "pdb";
style = "";
query = "";
description = "Please enter the pdb identifier.";
blockcombo = true;

// and show the wizard dialog with the WSDbfetch wizard
wizard = new EBIWSDbfetchWizard(database, format, style, query, description, blockcombo);
dialog = new WizardDialog(rhino.getShell(), wizard);
dialog.open();