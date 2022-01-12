function gameBoard(){
	this.score = 0;
	this.sprites = [];
	for (var i = 0; i < 7; i++){
		var img = new Image();
		img.src = "./sprites/Square" + SHAPES[i] + ".png";
		this.sprites[i] = img;
	}
	
	this.squares = [];
	for (var i = 0; i < 20; i++){
		this.squares[i] = [];
	}
	for (var i = 0; i < 20; i++){
		for (var j = 0; j < 10; j++){
			this.squares[i][j] = {
									present:false,
									x1:UImargin + j*SQUARESIZE,
									y1:i*SQUARESIZE,
									x2:UImargin + j*SQUARESIZE+SQUARESIZE,
									y2:i*SQUARESIZE+SQUARESIZE
								  };
		}
	}
}

gameBoard.prototype.addToBoard =
function (){
	var piece = session.piece;
	switch(piece.shape){
		case "O":
			var i = Math.floor(piece.y/SQUARESIZE);
			var j = Math.floor((piece.x-UImargin)/SQUARESIZE);
			if (i+1 < 20 && i >= 0 && j >= 0 && j+1 < 10){
				this.squares[i][j].present = this.sprites[2];
				this.squares[i+1][j].present = this.sprites[2];
				this.squares[i][j+1].present = this.sprites[2];
				this.squares[i+1][j+1].present = this.sprites[2];
			}else{
				session.setGameOver();
			}
		break;
		case "T":
			var i = Math.floor((piece.y+SQUARESIZE)/SQUARESIZE);
			var j = Math.floor((piece.x+SQUARESIZE-UImargin)/SQUARESIZE);
			if (piece.rotation == 0){
				if (i+1 < 20 && i >= 0 && j-1 >= 0 && j+1 < 10){
					this.squares[i][j].present = this.sprites[3];
					this.squares[i+1][j].present = this.sprites[3];
					this.squares[i][j+1].present = this.sprites[3];
					this.squares[i][j-1].present = this.sprites[3];
				}else{
					session.setGameOver();
				}
			}
			if (piece.rotation == 90){
				if (i+1 < 20 && i-1 >= 0 && j-1 >= 0 && j < 10){
					this.squares[i][j].present = this.sprites[3];
					this.squares[i+1][j].present = this.sprites[3];
					this.squares[i-1][j].present = this.sprites[3];
					this.squares[i][j-1].present = this.sprites[3];
				}else{
					session.setGameOver();
				}
			}
			if (piece.rotation == 270){
				if (i+1 < 20 && i-1 >= 0 && j >= 0 && j+1 < 10){				
					this.squares[i][j].present = this.sprites[3];
					this.squares[i+1][j].present = this.sprites[3];
					this.squares[i-1][j].present = this.sprites[3];
					this.squares[i][j+1].present = this.sprites[3];
				}else{
					session.setGameOver();
				}
			}
			if (piece.rotation == 180){
				if (i < 20 && i-1 >= 0 && j-1 >= 0 && j+1 < 10){				
					this.squares[i][j].present = this.sprites[3];
					this.squares[i][j-1].present = this.sprites[3];
					this.squares[i-1][j].present = this.sprites[3];
					this.squares[i][j+1].present = this.sprites[3];
				}else{
					session.setGameOver();
				}
			}
		break;
		case "S":
			var i = Math.floor((piece.y+SQUARESIZE)/SQUARESIZE);
			var j = Math.floor((piece.x+SQUARESIZE-UImargin)/SQUARESIZE);

			if (piece.rotation == 0){
				if (i+1 < 20 && i >= 0 && j-1 >= 0 && j+1 < 10){								
					this.squares[i][j].present = this.sprites[4];
					this.squares[i+1][j].present = this.sprites[4];
					this.squares[i][j+1].present = this.sprites[4];
					this.squares[i+1][j-1].present = this.sprites[4];
				}else{
					session.setGameOver();
				}
			}
			if (piece.rotation == 90){
				if (i+1 < 20 && i-1 >= 0 && j-1 >= 0 && j < 10){								
					this.squares[i][j].present = this.sprites[4];
					this.squares[i+1][j].present = this.sprites[4];
					this.squares[i][j-1].present = this.sprites[4];
					this.squares[i-1][j-1].present = this.sprites[4];
				}else{
					session.setGameOver();
				}
			}
			if (piece.rotation == 270){
				if (i+1 < 20 && i-1 >= 0 && j >= 0 && j+1 < 10){				
					this.squares[i][j].present = this.sprites[4];
					this.squares[i-1][j].present = this.sprites[4];
					this.squares[i+1][j+1].present = this.sprites[4];
					this.squares[i][j+1].present = this.sprites[4];
				}else{
					session.setGameOver();
				}
			}
			if (piece.rotation == 180){
				if (i < 20 && i-1 >= 0 && j-1 >= 0 && j+1 < 10){				
					this.squares[i][j].present = this.sprites[4];
					this.squares[i][j-1].present = this.sprites[4];
					this.squares[i-1][j].present = this.sprites[4];
					this.squares[i-1][j+1].present = this.sprites[4];
				}else{
					session.setGameOver();
				}
			}
		break;
		case "Z":
			var i = Math.floor((piece.y+SQUARESIZE)/SQUARESIZE);
			var j = Math.floor((piece.x+SQUARESIZE-UImargin)/SQUARESIZE);

			if (piece.rotation == 0){
				if (i+1 < 20 && i >= 0 && j-1 >= 0 && j+1 < 10){				
					this.squares[i][j].present = this.sprites[5];
					this.squares[i+1][j].present = this.sprites[5];
					this.squares[i+1][j+1].present = this.sprites[5];
					this.squares[i][j-1].present = this.sprites[5];
				}else{
					session.setGameOver();
				}
			}
			if (piece.rotation == 90){
				if (i+1 < 20 && i-1 >= 0 && j-1 >= 0 && j < 10){
					this.squares[i][j].present = this.sprites[5];
					this.squares[i-1][j].present = this.sprites[5];
					this.squares[i][j-1].present = this.sprites[5];
					this.squares[i+1][j-1].present = this.sprites[5];
				}else{
					session.setGameOver();
				}
			}
			if (piece.rotation == 270){
				if (i+1 < 20 && i-1 >= 0 && j >= 0 && j+1 < 10){
					this.squares[i][j].present = this.sprites[5];
					this.squares[i-1][j+1].present = this.sprites[5];
					this.squares[i+1][j].present = this.sprites[5];
					this.squares[i][j+1].present = this.sprites[5];
				}else{
					session.setGameOver();
				}
			}
			if (piece.rotation == 180){
				if (i < 20 && i-1 >= 0 && j-1 >= 0 && j+1 < 10){								
					this.squares[i][j].present = this.sprites[5];
					this.squares[i-1][j].present = this.sprites[5];
					this.squares[i][j+1].present = this.sprites[5];
					this.squares[i-1][j-1].present = this.sprites[5];
				}else{
					session.setGameOver();
				}
			}
		break;
		case "L":
			var i = Math.floor((piece.y+SQUARESIZE)/SQUARESIZE);
			var j = Math.floor((piece.x+SQUARESIZE-UImargin)/SQUARESIZE);

			if (piece.rotation == 0){
				if (i+1 < 20 && i >= 0 && j-1 >= 0 && j+1 < 10){								
					this.squares[i][j].present = this.sprites[1];
					this.squares[i][j+1].present = this.sprites[1];
					this.squares[i][j-1].present = this.sprites[1];
					this.squares[i+1][j-1].present = this.sprites[1];
				}else{
					session.setGameOver();
				}
			}
			if (piece.rotation == 90){
				if (i+1 < 20 && i-1 >= 0 && j-1 >= 0 && j < 10){				
					this.squares[i][j].present = this.sprites[1];
					this.squares[i-1][j-1].present = this.sprites[1];
					this.squares[i-1][j].present = this.sprites[1];
					this.squares[i+1][j].present = this.sprites[1];
				}else{
					session.setGameOver();
				}
			}
			if (piece.rotation == 270){
				if (i+1 < 20 && i-1 >= 0 && j >= 0 && j+1 < 10){				
					this.squares[i][j].present = this.sprites[1];
					this.squares[i+1][j+1].present = this.sprites[1];
					this.squares[i+1][j].present = this.sprites[1];
					this.squares[i-1][j].present = this.sprites[1];
				}else{
					session.setGameOver();
				}
			}
			if (piece.rotation == 180){
				if (i < 20 && i-1 >= 0 && j-1 >= 0 && j+1 < 10){				
					this.squares[i][j].present = this.sprites[1];
					this.squares[i][j+1].present = this.sprites[1];
					this.squares[i][j-1].present = this.sprites[1];
					this.squares[i-1][j+1].present = this.sprites[1];
				}else{
					session.setGameOver();
				}
			}
		break;
		case "J":
			var i = Math.floor((piece.y+SQUARESIZE)/SQUARESIZE);
			var j = Math.floor((piece.x+SQUARESIZE-UImargin)/SQUARESIZE);

			if (piece.rotation == 0){
				if (i < 20 && i-1 >= 0 && j-1 >= 0 && j+1 < 10){				
					this.squares[i][j].present = this.sprites[0];
					this.squares[i][j+1].present = this.sprites[0];
					this.squares[i][j-1].present = this.sprites[0];
					this.squares[i-1][j-1].present = this.sprites[0];
				}else{
					session.setGameOver();
				}
			}
			if (piece.rotation == 90){
				if (i+1 < 20 && i-1 >= 0 && j >= 0 && j+1 < 10){				
					this.squares[i][j].present = this.sprites[0];
					this.squares[i-1][j].present = this.sprites[0];
					this.squares[i-1][j+1].present = this.sprites[0];
					this.squares[i+1][j].present = this.sprites[0];
				}else{
					session.setGameOver();
				}
			}
			if (piece.rotation == 270){
				if (i+1 < 20 && i-1 >= 0 && j-1 >= 0 && j < 10){				
					this.squares[i][j].present = this.sprites[0];
					this.squares[i+1][j].present = this.sprites[0];
					this.squares[i+1][j-1].present = this.sprites[0];
					this.squares[i-1][j].present = this.sprites[0];
				}else{
					session.setGameOver();
				}
			}
			if (piece.rotation == 180){
				if (i+1 < 20 && i >= 0 && j-1 >= 0 && j+1 < 10){				
					this.squares[i][j].present = this.sprites[0];
					this.squares[i][j+1].present = this.sprites[0];
					this.squares[i][j-1].present = this.sprites[0];
					this.squares[i+1][j+1].present = this.sprites[0];
				}else{
					session.setGameOver();
				}
			}
		break;
		case "I":
			var i = Math.floor((piece.y+2*SQUARESIZE)/SQUARESIZE);
			var j = Math.floor((piece.x+2*SQUARESIZE-UImargin)/SQUARESIZE);

			if (piece.rotation == 0){
				if (i+1 < 20 && i-2 >= 0 && j >= 0 && j < 10){				
					this.squares[i][j].present = this.sprites[6];
					this.squares[i-1][j].present = this.sprites[6];
					this.squares[i-2][j].present = this.sprites[6];
					this.squares[i+1][j].present = this.sprites[6];
				}else{
					session.setGameOver();
				}
			}
			if (piece.rotation == 90){
				if (i < 20 && i >= 0 && j-2 >= 0 && j+1 < 10){				
					this.squares[i][j-2].present = this.sprites[6];
					this.squares[i][j-1].present = this.sprites[6];
					this.squares[i][j].present = this.sprites[6];
					this.squares[i][j+1].present = this.sprites[6];
				}else{
					session.setGameOver();
				}
			}
			if (piece.rotation == 270){
				if (i-1 < 20 && i-1 >= 0 && j-2 >= 0 && j+1 < 10){				
					this.squares[i-1][j].present = this.sprites[6];
					this.squares[i-1][j-2].present = this.sprites[6];
					this.squares[i-1][j-1].present = this.sprites[6];
					this.squares[i-1][j+1].present = this.sprites[6];
				}else{
					session.setGameOver();
				}
			}
			if (piece.rotation == 180){
				if (i+1 < 20 && i-2 >= 0 && j-1 >= 0 && j-1 < 10){				
					this.squares[i][j-1].present = this.sprites[6];
					this.squares[i-2][j-1].present = this.sprites[6];
					this.squares[i-1][j-1].present = this.sprites[6];
					this.squares[i+1][j-1].present = this.sprites[6];
				}else{
					session.setGameOver();
				}
			}
		break;
	}
}

gameBoard.prototype.checkLines = 
function() {
	var completedLines = 0;
	var presentSquares = 0;
	var points = 0;
	for (var i = 19; i >= 0; i--){
		do{
			presentSquares = 0;
			for (var j = 0; j < 10; j++){
				if (this.squares[i][j].present){
					presentSquares++;
				}
			}
			if (presentSquares == 10){
				completedLines++;
				for(var k = i; k >= 1; k--){
					for(var j = 0; j < 10; j++){
						this.squares[k][j].present = this.squares[k-1][j].present;
					}
				}
			}
		}while(presentSquares == 10)
	}
	points = 100*completedLines +
			 (completedLines > 1)*(200) +
			 (completedLines > 2)*(400) +
			 (completedLines > 3)*(800);
	this.score += points;
}