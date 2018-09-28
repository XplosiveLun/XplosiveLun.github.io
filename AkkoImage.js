//--------------------------------------
// Akko Image Object
// AkkoImage.js
// Generic Custom Image Class
//--------------------------------------

//--------------------------------------
// Constructor
//--------------------------------------

function AkkoImage(){
	
	this.image = new Image();
	this.source;
	
	this.set_source = function(image){
		
		this.image = image;
		
	}
	
}