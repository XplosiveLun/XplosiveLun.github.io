//----------------------------
// Akko Spirte Object
// AkkoSprite.js
// A Game Sprite Object used by the Game "Akko"
//----------------------------

function AkkoSprite(x, y){
	
	Sprite.call(this, x, y);
	
	this.b_player = false;	// Is this a player?
	this.tag = [];
	
	//------------------------------------------
	// Accessor Method(s) 
	// set_player
	//------------------------------------------
	
	this.set_player = function(b)			{ this.b_player = b; };

	
	//------------------------------------------
	// General Method(s)
	// update
	// draw
	// add_tag
	//------------------------------------------
	
	// Update the Sprite
	this.update = function(){
	
		this.b_is_moving = false;
		
		if ( this.b_player == true){
			
			// Player-specific Functions
			// React to keyboard inputs

			// A
			if (keyState[65]){
				player.go("north");
			}
			// D
			if (keyState[68]){
				player.go("east");
			}
			// S
			if (keyState[83]){
				player.go("south");
			}
			// W
			if (keyState[87]){
				player.go("west");
			}
			
		} else {
			
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
		
		// Move
		this.x = this.x + Math.min(this.max_speed, Math.max(this.speed_x, -this.max_speed));
		this.y = this.y + Math.min(this.max_speed, Math.max(this.speed_y, -this.max_speed));
		
						
		// Prevent escaping the canvas
		if ( this.x < 0 ){
			this.x = 0;
			this.speed_x *= -1;
		} else if ( this.x > canvas.width){
			this.x = canvas.width;
			this.speed_x *= -1;
		}
		
		if ( this.y < 0 ){
			this.y = 0;
			this.speed_y *= -1;
		} else if ( this.y > canvas.height){
			this.y = canvas.height;
			this.speed_y *= -1;
		}
		
	}
	
	this.draw = function(){
		
		if ( this.b_player == false){
		
			context.beginPath();
			context.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
			context.stroke();
			
			
			
		} else {
		
			context.beginPath();
			context.arc(this.x, this.y, 10, 0, 2 * Math.PI);
			context.fillStyle = "green";
			context.fill();
			context.stroke();
			
			context.drawImage(this.image, this.x - 32, this.y - 32);
			
		}
		
	}
	
	this.add_tag = function(tag){
		
		this.tag.push(tag);
		
	}
	
}