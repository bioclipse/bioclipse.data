var mols = cdk.loadMolecules("/sampledata/SDF/Fragments2.sdf"); 
for ( var i = 0; i < mols.size(); i++ ) { 
	print( mols.get(i).getSmiles()+"\n" ); 
}