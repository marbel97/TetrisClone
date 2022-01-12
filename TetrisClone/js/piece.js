function gamePiece(sprite,x,y,shape,fallSpeed){
	this.x = x;
	this.y = y;
	this.sprite = sprite;
	this.rotation = 0;
	this.shape = shape;
	this.fallSpeed = fallSpeed;
	this.slowFallSpeed = fallSpeed;
	this.fastFallSpeed = fallSpeed+10;
}

gamePiece.prototype.stopPiece =
function (){
	session.board.addToBoard();
	if (!session.gameOver){
		session.piece = session.nextPiece;
		session.nextPiece = session.spawnNewPiece();
	}
}

gamePiece.prototype.movePiece = 
function (direction){
	switch(this.shape){
		case "I":
			if (this.rotation == 90 || this.rotation == 270){
				if(this.x >= UImargin && this.x <= canvas.width - 4*SQUARESIZE - UImargin){
					this.x += direction*SQUARESIZE;
					if (this.x < UImargin || this.x > canvas.width - 4*SQUARESIZE - UImargin)
						this.x -= direction*SQUARESIZE;
				}
			}
			if (this.rotation == 0){
				if(this.x >= UImargin - 2*SQUARESIZE && this.x <= canvas.width - 3*SQUARESIZE - UImargin){
					this.x += direction*SQUARESIZE;
					if (this.x < UImargin - 2*SQUARESIZE || this.x > canvas.width - 3*SQUARESIZE - UImargin)
						this.x -= direction*SQUARESIZE;
				}
			}
			if (this.rotation == 180){
				if(this.x >= UImargin - SQUARESIZE && this.x <= canvas.width - 2*SQUARESIZE - UImargin){
					this.x += direction*SQUARESIZE;
					if (this.x < UImargin - SQUARESIZE || this.x > canvas.width - 2*SQUARESIZE - UImargin)
						this.x -= direction*SQUARESIZE;
				}
			}
		break;
		case "T":
		case "S":
		case "Z":
		case "L":
			if (this.rotation == 0 || this.rotation == 180){
				if(this.x >= UImargin && this.x <= canvas.width - 3*SQUARESIZE - UImargin){
					this.x += direction*SQUARESIZE;
					if (this.x < UImargin || this.x > canvas.width - 3*SQUARESIZE - UImargin)
						this.x -= direction*SQUARESIZE;
				}
			}
			if (this.rotation == 270){
				if(this.x >= UImargin - SQUARESIZE && this.x <= canvas.width - 3*SQUARESIZE - UImargin){
					this.x += direction*SQUARESIZE;
					if (this.x < UImargin - SQUARESIZE || this.x > canvas.width - 3*SQUARESIZE - UImargin)
						this.x -= direction*SQUARESIZE;
				}
			}
			if (this.rotation == 90){
				if(this.x >= UImargin && this.x <= canvas.width - 2*SQUARESIZE - UImargin){
					this.x += direction*SQUARESIZE;
					if (this.x < UImargin || this.x > canvas.width - 2*SQUARESIZE - UImargin)
						this.x -= direction*SQUARESIZE;
				}
			}
		break;
		case "J":
			if (this.rotation == 0 || this.rotation == 180){
				if(this.x >= UImargin && this.x <= canvas.width - 3*SQUARESIZE - UImargin){
					this.x += direction*SQUARESIZE;
					if (this.x < UImargin || this.x > canvas.width - 3*SQUARESIZE - UImargin)
						this.x -= direction*SQUARESIZE;
				}
			}
			if (this.rotation == 90){
				if(this.x >= UImargin - SQUARESIZE && this.x <= canvas.width - 3*SQUARESIZE - UImargin){
					this.x += direction*SQUARESIZE;
					if (this.x < UImargin - SQUARESIZE || this.x > canvas.width - 3*SQUARESIZE - UImargin)
						this.x -= direction*SQUARESIZE;
				}
			}
			if (this.rotation == 270){
				if(this.x >= UImargin && this.x <= canvas.width - 2*SQUARESIZE - UImargin){
					this.x += direction*SQUARESIZE;
					if (this.x < UImargin || this.x > canvas.width - 2*SQUARESIZE - UImargin)
						this.x -= direction*SQUARESIZE;
				}
			}
		break;
		case "O":
			if (this.x >= UImargin && this.x <= canvas.width - UImargin - 2*SQUARESIZE){
				this.x += direction*SQUARESIZE;
				if (this.x < UImargin || this.x > canvas.width - UImargin - 2*SQUARESIZE){
					this.x -= direction*SQUARESIZE;
				}
			}
		break;
	}
}

gamePiece.prototype.checkInsideBorders =
function (){
	var ret = true;
	switch(this.shape){
		case "O":
		break;
		case "I":
			if (this.rotation == 0){
				if (this.x < UImargin){
					if (session.board.checkMovementPossible(1)){
						this.x += SQUARESIZE;
						if (session.board.checkMovementPossible(1)){
							this.x += SQUARESIZE;
						}else{
							this.x -= SQUARESIZE
							ret = false;
						}
					}else{
						ret = false;
					}
				}
				if (this.x > canvas.width - UImargin - 4*SQUARESIZE){
					if (session.board.checkMovementPossible(-1)){
						this.x -= SQUARESIZE;
					}else{
						ret = false;
					}
				}
			}
			if (this.rotation == 180){
				if (this.x < UImargin){
					if (session.board.checkMovementPossible(1)){
						this.x += SQUARESIZE;
					}else{
						ret = false;
					}
				}
				if (this.x > canvas.width - UImargin - 4*SQUARESIZE){
					if (session.board.checkMovementPossible(-1)){
						this.x -= SQUARESIZE
						if (session.board.checkMovementPossible(-1)){
							this.x -= SQUARESIZE;
						}else{
							this.x += SQUARESIZE
							ret = false;
						}
					}else{
						ret = false;
					}
				}
			}
		break;
		case "T":
		case "S":
		case "Z":
		case "L":
			if (this.rotation == 90){
				if (this.x > canvas.width - UImargin - 3*SQUARESIZE){
					if (session.board.checkMovementPossible(-1)){
						this.x -= SQUARESIZE;
					}else{
						ret = false;
					}
				}
			}
			if (this.rotation == 270){
				if (this.x < UImargin){
					if (session.board.checkMovementPossible(1)){
						this.x += SQUARESIZE;
					}else{
						ret = false;
					}	
				}
			}
		break;
		case "J":
			if (this.rotation == 270){
				if (this.x > canvas.width - UImargin - 3*SQUARESIZE){
					if (session.board.checkMovementPossible(-1)){
						this.x -= SQUARESIZE;
					}else{
						ret = false;
					}
				}
			}
			if (this.rotation == 90){
				if (this.x < UImargin){
					if (session.board.checkMovementPossible(1)){
						this.x += SQUARESIZE;
					}else{
						ret = false;
					}
				}
			}
		break;
	}
	return ret;
}

gamePiece.prototype.checkRotationPossible = 
function() {
	var board = session.board;
	switch(this.shape){
		case "O":
			return true;
		break;
		case "T":
			var i = Math.floor((this.y+SQUARESIZE)/SQUARESIZE);
			var j = Math.floor((this.x+SQUARESIZE-UImargin)/SQUARESIZE);
			if (this.rotation == 0){
				if (i < 20 && i-1 >= 0 && j >= 0 && j < 10){
					if(!board.squares[i-1][j].present){
						return true;
					}else{
						return false;
					}
				}else{
					return true;
				}
			}
			if (this.rotation == 90){
				if (i < 20 && i >= 0 && j >= 0 && j+1 < 10){
					if(!board.squares[i][j+1].present){
						return true;
					}else{
						return false;
					}
				}else{
					return true;
				}
			}
			if (this.rotation == 270){
				if (i < 20 && i >= 0 && j-1 >= 0 && j < 10){
					if(!board.squares[i][j-1].present){
						return true;
					}else{
						return false;
					}
				}else{
					return true;
				}
			}
			if (this.rotation == 180){
				if (i+1 < 20 && i >= 0 && j >= 0 && j < 10){
					if(!board.squares[i+1][j].present){
						return true;
					}else{
						return false;
					}
				}else{
					return true;
				}
			}
		break;
		case "S":
			var i = Math.floor((this.y+SQUARESIZE)/SQUARESIZE);
			var j = Math.floor((this.x+SQUARESIZE-UImargin)/SQUARESIZE);
			if (this.rotation == 0){
				if (i < 20 && i-1 >= 0 && j-1 >= 0 && j < 10){
					if(!board.squares[i][j-1].present && !board.squares[i-1][j-1].present){
						return true;
					}else{
						return false;
					}
				}else{
					return true;
				}
			}
			if (this.rotation == 90){
				if (i < 20 && i-1 >= 0 && j >= 0 && j+1 < 10){
					if(!board.squares[i-1][j].present && !board.squares[i-1][j+1].present){
						return true;
					}else{
						return false;
					}
				}else{
					return true;
				}
			}
			if (this.rotation == 270){
				if (i+1 < 20 && i >= 0 && j-1 >= 0 && j < 10){
					if(!board.squares[i+1][j].present && !board.squares[i+1][j-1].present){
						return true;
					}else{
						return false;
					}
				}else{
					return true;
				}
			}
			if (this.rotation == 180){
				if (i+1 < 20 && i >= 0 && j >= 0 && j+1 < 10){
					if(!board.squares[i][j+1].present && !board.squares[i+1][j+1].present){
						return true;
					}else{
						return false;
					}
				}else{
					return true;
				}
			}
		break;
		case "Z":
			var i = Math.floor((this.y+SQUARESIZE)/SQUARESIZE);
			var j = Math.floor((this.x+SQUARESIZE-UImargin)/SQUARESIZE);
			if (this.rotation == 0){
				if (i+1 < 20 && i-1 >= 0 && j-1 >= 0 && j < 10){
					if(!board.squares[i+1][j-1].present && !board.squares[i-1][j].present){
						return true;
					}else{
						return false;
					}
				}else{
					return true;
				}
			}
			if (this.rotation == 90){
				if (i < 20 && i-1 >= 0 && j-1 >= 0 && j+1 < 10){
					if(!board.squares[i-1][j-1].present && !board.squares[i][j+1].present){
						return true;
					}else{
						return false;
					}
				}else{
					return true;
				}
			}
			if (this.rotation == 270){
				if (i+1 < 20 && i >= 0 && j-1 >= 0 && j+1 < 10){
					if(!board.squares[i][j-1].present && !board.squares[i+1][j+1].present){
						return true;
					}else{
						return false;
					}
				}else{
					return true;
				}
			}
			if (this.rotation == 180){
				if (i+1 < 20 && i-1 >= 0 && j >= 0 && j+1 < 10){
					if(!board.squares[i+1][j].present && !board.squares[i-1][j+1].present){
						return true;
					}else{
						return false;
					}
				}else{
					return true;
				}
			}
		break;
		case "L":
			var i = Math.floor((this.y+SQUARESIZE)/SQUARESIZE);
			var j = Math.floor((this.x+SQUARESIZE-UImargin)/SQUARESIZE);
			if (this.rotation == 0){
				if (i+1 < 20 && i-1 >= 0 && j-1 >= 0 && j < 10){
					if(!board.squares[i-1][j].present && !board.squares[i-1][j-1].present && !board.squares[i+1][j].present){
						return true;
					}else{
						return false;
					}
				}else{
					return true;
				}
			}
			if (this.rotation == 90){
				if (i < 20 && i-1 >= 0 && j-1 >= 0 && j+1 < 10){
					if(!board.squares[i][j+1].present && !board.squares[i-1][j+1].present && !board.squares[i][j-1].present){
						return true;
					}else{
						return false;
					}
				}else{
					return true;
				}
			}
			if (this.rotation == 270){
				if (i+1 < 20 && i >= 0 && j-1 >= 0 && j+1 < 10){
					if(!board.squares[i+1][j-1].present && !board.squares[i][j-1].present && !board.squares[i][j+1].present){
						return true;
					}else{
						return false;
					}
				}else{
					return true;
				}
			}
			if (this.rotation == 180){
				if (i+1 < 20 && i-1 >= 0 && j >= 0 && j+1 < 10){
					if(!board.squares[i-1][j].present && !board.squares[i+1][j].present && !board.squares[i+1][j+1].present){
						return true;
					}else{
						return false;
					}
				}else{
					return true;
				}
			}
		break;
		case "J":
			var i = Math.floor((this.y+SQUARESIZE)/SQUARESIZE);
			var j = Math.floor((this.x+SQUARESIZE-UImargin)/SQUARESIZE);
			if (this.rotation == 0){
				if (i+1 < 20 && i-1 >= 0 && j >= 0 && j+1 < 10){
					if(!board.squares[i+1][j].present && !board.squares[i-1][j].present && !board.squares[i-1][j+1].present){
						return true;
					}else{
						return false;
					}
				}else{
					return true;
				}
			}
			if (this.rotation == 90){
				if (i+1 < 20 && i >= 0 && j-1 >= 0 && j+1 < 10){
					if(!board.squares[i][j-1].present && !board.squares[i][j+1].present && !board.squares[i+1][j+1].present){
						return true;
					}else{
						return false;
					}
				}else{
					return true;
				}
			}
			if (this.rotation == 270){
				if (i < 20 && i-1 >= 0 && j-1 >= 0 && j+1 < 10){
					if(!board.squares[i][j+1].present && !board.squares[i][j-1].present && !board.squares[i-1][j-1].present){
						return true;
					}else{
						return false;
					}
				}else{
					return true;
				}
			}
			if (this.rotation == 180){
				if (i+1 < 20 && i-1 >= 0 && j-1 >= 0 && j < 10){
					if(!board.squares[i-1][j].present && !board.squares[i+1][j].present && !board.squares[i+1][j-1].present){
						return true;
					}else{
						return false;
					}
				}else{
					return true;
				}
			}
		break;
		case "I":
			var i = Math.floor((this.y+2*SQUARESIZE)/SQUARESIZE);
			var j = Math.floor((this.x+2*SQUARESIZE-UImargin)/SQUARESIZE);
			if (this.rotation == 0){
				if (i < 20 && i >= 0 && j-2 >= 0 && j+1 < 10){
					if(!board.squares[i][j+1].present && !board.squares[i][j-1].present && !board.squares[i][j-2].present){
						return true;
					}else{
						return false;
					}
				}else{
					return true;
				}
			}
			if (this.rotation == 90){
				if (i+1 < 20 && i-2 >= 0 && j-1 >= 0 && j < 10){
					if(
						!board.squares[i-2][j-1].present &&
						!board.squares[i-1][j-1].present && 
						!board.squares[i+1][j-1].present){
						return true;
					}else{
						return false;
					}
				}else{
					return true;
				}
			}
			if (this.rotation == 270){
				if (i+1 < 20 && i-2 >= 0 && j >= 0 && j < 10){
					if(
						!board.squares[i-2][j].present &&
						!board.squares[i][j].present && 
						!board.squares[i+1][j].present){
						return true;
					}else{
						return false;
					}
				}else{
					return true;
				}
			}
			if (this.rotation == 180){
				if (i < 20 && i-1 >= 0 && j-2 >= 0 && j+1 < 10){
					if(
						!board.squares[i-1][j].present &&
						!board.squares[i-1][j+1].present && 
						!board.squares[i-1][j-2].present
						){
						return true;
					}else{
						return false;
					}
				}else{
					return true;
				}
			}
		break;
		default: return true;
	}
}