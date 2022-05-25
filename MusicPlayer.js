//------------------------------------
// Music Player Object
// MusicPlayer.js
//------------------------------------

function MusicPlayer(){

	this.m_audio = new Audio();
	this.m_bIsLoop;
	
	//------------------------------------
	// Accessor Method(s)
	//------------------------------------
	this.SetLoop = function(bIsLoop){
		
		this.m_bIsLoop = bIsLoop;
		
	}
	
	//----------------------------------------------
	// General Method(s)
	//----------------------------------------------
	
	this.PlayMusic = function(){
		
		if ( typeof this.m_audio == "boolean" && this.m_bIsLoop == true){
			
			this.m_audio.loop = true;
				
		} else {
				
			/*
			this.m_audio.addEventListener("ended", function(){
				this.currentTime = 0;
				this.play;
				}, false);
			*/
		 
		}
			
		this.m_audio.play();
		
	}
	
	this.SetMusic = function(audio){
	
		this.m_audio = new Audio(audio);
		
	}
	
}


