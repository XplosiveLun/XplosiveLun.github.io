//------------------------------------
// Game Engine Object
// GameEngine.js
//------------------------------------
function GameEngine(){

	this.canvas;
	this.context;
	this.keyStates;
	this.sprites = [];		// Sprite Array
	this.fps;
	
	this.Initialize();
	
	//------------------------------
	// Helper Method(s)
	//------------------------------
	this.Initialize = function(){
		
		this.canvas.createElement("canvas");
		this.canvas.id = "canvas_game";
		this.canvas.width = 800;
		this.canvas.height = 640;
		this.canvas.style = "border:1px solid #000000";
		this.context = canvas_game.getContext("2d");
		
		setInterval("Cycle", fps);
		setInterval("Draw", fps);
		
		window.addEventListener("keydown", function(e){
			keyState[e.keyCode || e.which] = true;}, true);
		window.addEventListener("keyup", function(e){
			keyState[e.keyCode || e.which ] = false;}, true);
		
	}

	//------------------------------
	// General Method(s)
	//------------------------------
	this.AddSprite = function(sprite){
		
		this.sprites.push(sprite);
		
	}
	
	//------------------------------
	// Game Engine Logic
	// ( Abstract Methods )
	//------------------------------
	this.Update = function(){
		
	}
	
	this.Cycle = function(){
		
	}
	
}
