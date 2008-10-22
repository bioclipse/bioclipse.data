var dbName = "exampleScriptDB";

if ( structuredb.allDatabaseNames().contains(dbName) ) {
	structuredb.deleteDatabase(dbName);
}

toluene = cdk.fromSmiles("Cc1ccccc1");
ethanol = cdk.fromSmiles("CCO");
oxygen  = cdk.fromSmiles("O=O");

structuredb.createDatabase(dbName);

toluene = structuredb.createStructure(dbName, "toluene", toluene);
ethanol = structuredb.createStructure(dbName, "ethanol", ethanol);
oxygen  = structuredb.createStructure(dbName, "oxygen",  oxygen);        

myMolecules = structuredb.createAnnotation(dbName, "my molecules");
toluene.addAnnotation( myMolecules );
ethanol.addAnnotation( myMolecules );
oxygen.addAnnotation(  myMolecules );

structuredb.save(dbName, myMolecules);

structuredb.subStructureSearch( dbName, cdk.fromSmiles("C") );