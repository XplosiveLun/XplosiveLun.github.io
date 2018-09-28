//-------------------------------------------------
// Sprite Object
// Sprite.js
// Generic Sprite Class
//-------------------------------------------------
		
//-------------------------------------------------
// Static Methods
//-------------------------------------------------
		
// Detector
function Check_Sprite_Collision(){

	for ( var i = 0; i < array_entities.length; i++){
		
		for ( var j = i + 1; j < array_entities.length; j++){
			
			var entity_a = array_entities[i];
			var entity_b = array_entities[j];
			
			if ( entity_a.x - entity_a.size <= entity_b.x + entity_b.size &&
			entity_b.x - entity_b.size <= entity_a.x + entity_a.size &&
			entity_a.y - entity_a.size <= entity_b.y + entity_b.size &&
			entity_b.y - entity_b.size <= entity_a.y + entity_a.size){	
				Sprite_Collision(entity_a, entity_b);
			
			}
			
		}
		
	}

}
		
//-----------------------------------------------------
// Helper Methods
//-----------------------------------------------------

function Sprite_Collision(sprite_hitter, sprite_hittee){

	/*
	sprite_hitter.speed_x *= -1;
	sprite_hitter.speed_y *= -1;
	
	sprite_hittee.speed_x *= -1;
	sprite_hittee.speed_y *= -1;
	*/
	
	
	var sprite;
	if ( sprite_hitter != player && sprite_hittee != player){
	
		// Do Nothing
		
	} else 	if ( sprite_hitter != player){
	
		sprite_hitter.kill();
		score++;
		if ( player_health > 0){
			player_health--;
		}
		
	} else{
	
		sprite_hittee.kill();
		score++;
		if ( player_health > 0){
			player_health--;
		}
		
	}
	
	/*
	sprite.speed_x *= -1;
	sprite.speed_y *= -1;
	*/
	
	//console.log("Something Collided!");
	
}

// Action after a sprite died
function Sprite_Dying(sprite){

	if ( sprite != player ){
		
		var random = Math.random();
		var x = canvas.width * random;
		var random = Math.random();
		var y = canvas.height * random;
		
		sprite = new Sprite(x, y);		// Creating enemies
		sprite.set_size(2);
	
	}
	
}

//-------------------------------------------------------
// Sprite Constructor
//-------------------------------------------------------
function Sprite(x, y){

	array_entities.push(this);
	// Member variables
	this.x = x;
	this.y = y;
	this.size = 16;		// distance between the centre and the bounds
	
	this.speed_x = 0;
	this.speed_y = 0;
	this.accel = 0.1;
	this.max_speed = 1;
	this.image = new AkkoImage();
	
	this.move_pattern;		// player, random
	
	this.b_is_moving = false;
	
	//----------------------------------------------
	// Accessor Methods:
	// set_image
	// set_size
	//----------------------------------------------
	
	this.set_image = function(image_name)	{ this.image = image_name; };
	this.set_size = function(size)			{ this.size = size; };
	this.set_move_pattern = function(pattern)	{this.move_pattern = pattern; };
	
	//----------------------------------------------
	// General Methods:	
	// kill
	// go
	//----------------------------------------------
	
	this.kill = function() {
	
		Sprite_Dying(this);
	
		var pos = array_entities.indexOf(this);
		array_entities.splice(pos, 1);
		
		delete this;
		
	}
	
	// Move Sprite Around function
	this.go = function(direction){
	
		this.b_is_moving = true;
		
		if ( direction == "north" ){
			this.speed_x = Math.max(this.speed_x - this.accel, -1);
		} else if ( direction == "east" ){
			this.speed_x = Math.min(this.speed_x + this.accel, 1);
		} else if ( direction == "south" ){
			this.speed_y = Math.min(this.speed_y + this.accel, 1);
		} else if ( direction == "west" ){
			this.speed_y = Math.max(this.speed_y - this.accel, -1);
		}
			
	};
	
	//---------------------------------------------
	// Abstract Method(s):
	// update
	// draw
	//---------------------------------------------
		
	// Update the Sprite
	this.update = function(){
		
		if ( this.move_pattern == "player"){
			
		// Do Nothing			
		} else if ( this.move_pattern == "random"){
			
			// AI Go to else where
			var random = Math.floor(Math.random() * 4);
			
			if ( random == 0){
				this.go("north");
			} else if ( random == 1){
				this.go("east");
			} else if ( random == 2){
				this.go("south");
			} else if ( random == 3){
				this.go("west");
			}
			
		}
		
	};
	
	// Draw Function
	this.draw = function(){

	};
	
}