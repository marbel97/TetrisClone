gamePiece.prototype.checkGroundCollision =
function (){
	switch(this.shape){
	case "T":
	case "L":
	case "S":
	case "Z":
		if(
			(
				(this.y >= canvas.height - this.sprite.width/4*3*canvas.height/480)
				 &&
				(this.rotation != 180)
			)
			 ||
			(
				(this.y >= canvas.height - this.sprite.width/4*3*canvas.height/480/3*2)
				 &&
				(this.rotation == 180)
			)
		)
			this.stopPiece();
		break;
	case "O":
		if(this.y >= canvas.height - this.sprite.width/4*3*canvas.height/480)
			this.stopPiece();
		break;
	case "J":
		if(
			(
				(this.y >= canvas.height - this.sprite.width/4*3*canvas.height/480)
				 &&
				(this.rotation != 0)
			)
			 ||
			(
				(this.y >= canvas.height - this.sprite.width/4*3*canvas.height/480/3*2)
				 &&
				(this.rotation == 0)
			)
		)
			this.stopPiece();
		break;
	case "I":
		if(
			(
				(this.y >= canvas.height - this.sprite.width/4*3*canvas.height/480)
				 &&
				(this.rotation == 0 || this.rotation == 180)
			)
			 ||
			(
				(this.y >= canvas.height - this.sprite.width/4*3*canvas.height/480/4*3)
				 &&
				(this.rotation == 90)
			)
			 ||
			(
				(this.y >= canvas.height - this.sprite.width/4*3*canvas.height/480/2)
				 &&
				(this.rotation == 270)
			)
		)
			this.stopPiece();
		break;
	}
}

gamePiece.prototype.checkBoardCollision =
function (){
	switch(this.shape){
		case "O":
			var i = Math.floor(this.y/SQUARESIZE);
			var j = Math.floor((this.x-UImargin)/SQUARESIZE);
			if (i+2 >= 0 && j < 10 && j >= 0 && i + 2 < 20 &&
				(session.board.squares[i+2][j].present || session.board.squares[i+2][j+1].present)
				){
					this.stopPiece();
			}
		break;
		case "T":
			var i = Math.floor((this.y+SQUARESIZE)/SQUARESIZE);
			var j = Math.floor((this.x+SQUARESIZE-UImargin)/SQUARESIZE);
			if (this.rotation == 0){
				if ( i+1 >= 0 && j+1 < 10 && j-1 >= 0 && i + 2 < 20 &&
					(session.board.squares[i+2][j].present ||
					 session.board.squares[i+1][j+1].present ||
					 session.board.squares[i+1][j-1].present)
					){
						this.stopPiece();
				}else{
					if ((i+2>= 0 && i+2 < 20 && j >= 0 && j < 10) &&
						 session.board.squares[i+2][j].present){
						this.stopPiece();	 
					}
				}
			}
			if (this.rotation == 90){
				if ( i+1 >= 0 && j < 10 && j-1 >= 0 && i + 2 < 20 &&
					(session.board.squares[i+2][j].present ||
					 session.board.squares[i+1][j-1].present)
					){
						this.stopPiece();
				}else{
					if ((i+2>= 0 && i+2 < 20 && j >= 0 && j < 10) &&
						 session.board.squares[i+2][j].present){
						this.stopPiece();	 
					}
				}
			}
			if (this.rotation == 270){
				if ( i+1 >= 0 && j < 10 && j+1 >= 0 && i + 2 < 20 &&
					(session.board.squares[i+2][j].present ||
					 session.board.squares[i+1][j+1].present)
					){
						this.stopPiece();
				}else{
					if ((i+2>= 0 && i+2 < 20 && j >= 0 && j < 10) &&
						 session.board.squares[i+2][j].present){
						this.stopPiece();	 
					}
				}
			}
			if (this.rotation == 180){
				if ( i+1 >= 0 && j+1 < 10 && j-1 >= 0 && i + 1 < 20 &&
					(session.board.squares[i+1][j].present ||
					 session.board.squares[i+1][j+1].present ||
					 session.board.squares[i+1][j-1].present)
					){
						this.stopPiece();
				}
			}
		break;
		case "S":
			var i = Math.floor((this.y+SQUARESIZE)/SQUARESIZE);
			var j = Math.floor((this.x+SQUARESIZE-UImargin)/SQUARESIZE);
			if (this.rotation == 0){
				if ( i+1 >= 0 && j+1 < 10 && j-1 >= 0 && i + 2 < 20 &&
					(session.board.squares[i+2][j].present ||
					 session.board.squares[i+1][j+1].present ||
					 session.board.squares[i+2][j-1].present)
					){
						this.stopPiece();
				}else{
					if ((i+2>= 0 && i+2 < 20 && j-1 >= 0 && j < 10) && 
						(
							session.board.squares[i+2][j].present ||
							session.board.squares[i+2][j-1].present
						 )
						){
						this.stopPiece();	 
					}
				}
			}
			if (this.rotation == 90){
				if ( i+1 >= 0 && j < 10 && j-1 >= 0 && i + 2 < 20 &&
					(session.board.squares[i+2][j].present ||
					 session.board.squares[i+1][j-1].present)
					){
						this.stopPiece();
				}else{
					if ((i+2>= 0 && i+2 < 20 && j >= 0 && j < 10) &&
						 session.board.squares[i+2][j].present){
						this.stopPiece();	 
					}
				}
			}
			if (this.rotation == 270){
				if ( i+1 >= 0 && j+1 < 10 && j >= 0 && i + 2 < 20 &&
					(session.board.squares[i+1][j].present ||
					 session.board.squares[i+2][j+1].present)
					){
						this.stopPiece();
				}else{
					if ((i+2>= 0 && i+2 < 20 && j+1 >= 0 && j+1 < 10) &&
						 session.board.squares[i+2][j+1].present){
						this.stopPiece();	 
					}
				}
			}
			if (this.rotation == 180){
				if ( i >= 0 && j+1 < 10 && j-1 >= 0 && i + 1 < 20 &&
					(session.board.squares[i+1][j].present ||
					 session.board.squares[i+1][j-1].present ||
					 session.board.squares[i][j+1].present)
					){
						this.stopPiece();
				}else{
					if ((i+1>= 0 && i+1 < 20 && j-1 >= 0 && j < 10) &&
						 (session.board.squares[i+1][j].present ||
						  session.board.squares[i+1][j-1].present
						  )
						 ){
						this.stopPiece();	 
					}
				}
			}
		break;
		case "Z":
			var i = Math.floor((this.y+SQUARESIZE)/SQUARESIZE);
			var j = Math.floor((this.x+SQUARESIZE-UImargin)/SQUARESIZE);
			if (this.rotation == 0){
				if ( i+1 >= 0 && j+1 < 10 && j-1 >= 0 && i + 2 < 20 &&
					(session.board.squares[i+2][j].present ||
					 session.board.squares[i+2][j+1].present ||
					 session.board.squares[i+1][j-1].present)
					){
						this.stopPiece();
				}else{
					if ((i+2>= 0 && i+2 < 20 && j >= 0 && j+1 < 10) &&
						 (session.board.squares[i+2][j+1].present ||
						  session.board.squares[i+2][j].present)
						){
						this.stopPiece();	 
					}
				}
			}
			if (this.rotation == 90){
				if ( i+1 >= 0 && j < 10 && j-1 >= 0 && i + 2 < 20 &&
					(session.board.squares[i+1][j].present ||
					 session.board.squares[i+2][j-1].present)
					){
						this.stopPiece();
				}else{
					if ((i+2>= 0 && i+2 < 20 && j-1 >= 0 && j-1 < 10) &&
						 session.board.squares[i+2][j-1].present){
						this.stopPiece();	 
					}
				}
			}
			if (this.rotation == 270){
				if ( i+1 >= 0 && j+1 < 10 && j >= 0 && i + 2 < 20 &&
					(session.board.squares[i+1][j+1].present ||
					 session.board.squares[i+2][j].present)
					){
						this.stopPiece();
				}else{
					if ((i+2>= 0 && i+2 < 20 && j >= 0 && j < 10) &&
						 session.board.squares[i+2][j].present){
						this.stopPiece();	 
					}
				}
			}
			if (this.rotation == 180){
				if ( i >= 0 && j+1 < 10 && j-1 >= 0 && i + 1 < 20 &&
					(session.board.squares[i+1][j].present ||
					 session.board.squares[i+1][j+1].present ||
					 session.board.squares[i][j-1].present)
					){
						this.stopPiece();
				}else{
					if ((i+1>= 0 && i+1 < 20 && j >= 0 && j+1 < 10) &&
						 (session.board.squares[i+1][j+1].present ||
						  session.board.squares[i+1][j].present)
						){
						this.stopPiece();	 
					}
				}
			}
		break;
		case "L":
			var i = Math.floor((this.y+SQUARESIZE)/SQUARESIZE);
			var j = Math.floor((this.x+SQUARESIZE-UImargin)/SQUARESIZE);
			if (this.rotation == 0){
				if ( i+1 >= 0 && j+1 < 10 && j-1 >= 0 && i + 2 < 20 &&
					(session.board.squares[i+2][j-1].present ||
					 session.board.squares[i+1][j].present ||
					 session.board.squares[i+1][j+1].present)
					){
						this.stopPiece();
				}else{
					if ((i+2>= 0 && i+2 < 20 && j-1 >= 0 && j-1 < 10) &&
						 session.board.squares[i+2][j-1].present){
						this.stopPiece();	 
					}
				}
			}
			if (this.rotation == 90){
				if ( i >= 0 && j < 10 && j-1 >= 0 && i + 2 < 20 &&
					(session.board.squares[i+2][j].present ||
					 session.board.squares[i][j-1].present)
					){
						this.stopPiece();
				}else{
					if ((i+2>= 0 && i+2 < 20 && j >= 0 && j < 10) &&
						 session.board.squares[i+2][j].present){
						this.stopPiece();	 
					}
				}
			}
			if (this.rotation == 270){
				if ( i+2 >= 0 && j+1 < 10 && j >= 0 && i + 2 < 20 &&
					(session.board.squares[i+2][j].present ||
					 session.board.squares[i+2][j+1].present)
					){
						this.stopPiece();
				}
			}
			if (this.rotation == 180){
				if ( i+1 >= 0 && j+1 < 10 && j-1 >= 0 && i + 1 < 20 &&
					(session.board.squares[i+1][j].present ||
					 session.board.squares[i+1][j+1].present ||
					 session.board.squares[i+1][j-1].present)
					){
						this.stopPiece();
				}
			}
		break;
		case "J":
			var i = Math.floor((this.y+SQUARESIZE)/SQUARESIZE);
			var j = Math.floor((this.x+SQUARESIZE-UImargin)/SQUARESIZE);
			if (this.rotation == 0){
				if ( i+1 >= 0 && j+1 < 10 && j-1 >= 0 && i + 1 < 20 &&
					(session.board.squares[i+1][j].present ||
					 session.board.squares[i+1][j+1].present ||
					 session.board.squares[i+1][j-1].present)
					){
						this.stopPiece();
				}
			}
			if (this.rotation == 90){
				if ( i >= 0 && j+1 < 10 && j >= 0 && i + 2 < 20 &&
					(session.board.squares[i+2][j].present ||
					 session.board.squares[i][j+1].present)
					){
						this.stopPiece();
				}else{
					if ((i+2>= 0 && i+2 < 20 && j >= 0 && j < 10) &&
						 session.board.squares[i+2][j].present){
						this.stopPiece();	 
					}
				}
			}
			if (this.rotation == 270){
				if ( i+2 >= 0 && j < 10 && j-1 >= 0 && i + 2 < 20 &&
					(session.board.squares[i+2][j].present ||
					 session.board.squares[i+2][j-1].present)
					){
						this.stopPiece();
				}
			}
			if (this.rotation == 180){
				if ( i+1 >= 0 && j+1 < 10 && j-1 >= 0 && i + 2 < 20 &&
					(session.board.squares[i+2][j+1].present ||
					 session.board.squares[i+1][j].present ||
					 session.board.squares[i+1][j-1].present)
					){
						this.stopPiece();
				}else{
					if ((i+2>= 0 && i+2 < 20 && j+1 >= 0 && j+1 < 10) &&
						 session.board.squares[i+2][j+1].present){
						this.stopPiece();	 
					}
				}
			}
		break;
		case "I":
			var i = Math.floor((this.y+2*SQUARESIZE)/SQUARESIZE);
			var j = Math.floor((this.x+2*SQUARESIZE-UImargin)/SQUARESIZE);
			if (this.rotation == 0){
				if ( i+2 >= 0 && j < 10 && j >= 0 && i + 2 < 20 &&
					(session.board.squares[i+2][j].present)
					){
						this.stopPiece();
				}
			}
			if (this.rotation == 90){
				if ( i+1 >= 0 && j+1 < 10 && j-2 >= 0 && i + 1 < 20 &&
					(session.board.squares[i+1][j].present ||
					 session.board.squares[i+1][j+1].present ||
					 session.board.squares[i+1][j-1].present ||
					 session.board.squares[i+1][j-2].present)
					){
						this.stopPiece();
				}
			}
			if (this.rotation == 180){
				if ( i+2 >= 0 && j-1 < 10 && j-1 >= 0 && i + 2 < 20 &&
					(session.board.squares[i+2][j-1].present)
					){
						this.stopPiece();
				}
			}
			if (this.rotation == 270){
				if ( i >= 0 && j+1 < 10 && j-2 >= 0 && i < 20 &&
					(session.board.squares[i][j].present ||
					 session.board.squares[i][j+1].present ||
					 session.board.squares[i][j-1].present ||
					 session.board.squares[i][j-2].present)
					){
						this.stopPiece();
				}
			}
		break;
	}
}

gameBoard.prototype.checkMovementPossible = 
function(direction){
	var piece = session.piece;
	switch(piece.shape){
		case "O":
			var i = Math.floor(piece.y/SQUARESIZE);
			var j = Math.floor((piece.x-UImargin)/SQUARESIZE);
			if(direction == -1){
				if (i+1 < 20 && i >= 0 && j-1 >= 0 && j < 10){
					if(!this.squares[i][j-1].present && !this.squares[i+1][j-1].present){
						return true;
					}else{
						return false;
					}
				}else{
					return true;
				}
			}
			if(direction == 1){
				if (i+1 < 20 && i >= 0 && j >= 0 && j+2 < 10){
					if(!this.squares[i][j+2].present && !this.squares[i+1][j+2].present){
						return true;
					}else{
						return false;
					}
				}else{
					return true;
				}
			}
		break;
		case "T":
			var i = Math.floor((piece.y+SQUARESIZE)/SQUARESIZE);
			var j = Math.floor((piece.x+SQUARESIZE-UImargin)/SQUARESIZE);
			if (piece.rotation == 0){
				if(direction == -1){
					if (i+1 < 20 && i >= 0 && j-2 >= 0 && j < 10){
						if(!this.squares[i][j-2].present && !this.squares[i+1][j-1].present){
							return true;
						}else{
							return false;
						}
					}else{
						return true;
					}
				}
				if(direction == 1){
					if (i+1 < 20 && i >= 0 && j >= 0 && j+2 < 10){
						if(!this.squares[i][j+2].present && !this.squares[i+1][j+1].present){
							return true;
						}else{
							return false;
						}
					}else{
						return true;
					}
				}			
			}
			if (piece.rotation == 90){
				if(direction == -1){
					if (i+1 < 20 && i-1 >= 0 && j-2 >= 0 && j < 10){
						if(!this.squares[i][j-2].present && !this.squares[i+1][j-1].present && !this.squares[i-1][j-1].present){
							return true;
						}else{
							return false;
						}
					}else{
						return true;
					}
				}
				if(direction == 1){
					if (i+1 < 20 && i-1 >= 0 && j >= 0 && j+1 < 10){
						if(!this.squares[i][j+1].present && !this.squares[i+1][j+1].present && !this.squares[i-1][j+1].present){
							return true;
						}else{
							return false;
						}
					}else{
						return true;
					}
				}
			}
			if (piece.rotation == 270){
				if(direction == -1){
					if (i+1 < 20 && i-1 >= 0 && j-1 >= 0 && j < 10){
						if(!this.squares[i][j-1].present && !this.squares[i+1][j-1].present && !this.squares[i-1][j-1].present){
							return true;
						}else{
							return false;
						}
					}else{
						return true;
					}
				}
				if(direction == 1){
					if (i+1 < 20 && i-1 >= 0 && j >= 0 && j+2 < 10){
						if(!this.squares[i][j+2].present && !this.squares[i+1][j+1].present && !this.squares[i-1][j+1].present){
							return true;
						}else{
							return false;
						}
					}else{
						return true;
					}
				}			
			}
			if (piece.rotation == 180){
				if(direction == -1){
					if (i < 20 && i-1 >= 0 && j-2 >= 0 && j < 10){
						if(!this.squares[i][j-2].present && !this.squares[i-1][j-1].present){
							return true;
						}else{
							return false;
						}
					}else{
						return true;
					}
				}
				if(direction == 1){
					if (i < 20 && i-1 >= 0 && j >= 0 && j+2 < 10){
						if(!this.squares[i][j+2].present && !this.squares[i-1][j+1].present){
							return true;
						}else{
							return false;
						}
					}else{
						return true;
					}
				}
			}
		break;
		case "S":
			var i = Math.floor((piece.y+SQUARESIZE)/SQUARESIZE);
			var j = Math.floor((piece.x+SQUARESIZE-UImargin)/SQUARESIZE);
			if (piece.rotation == 0){
				if(direction == -1){
					if (i+1 < 20 && i >= 0 && j-2 >= 0 && j < 10){
						if(!this.squares[i+1][j-2].present && !this.squares[i][j-1].present){
							return true;
						}else{
							return false;
						}
					}else{
						return true;
					}
				}
				if(direction == 1){
					if (i+1 < 20 && i >= 0 && j >= 0 && j+2 < 10){
						if(!this.squares[i][j+2].present && !this.squares[i+1][j+1].present){
							return true;
						}else{
							return false;
						}
					}else{
						return true;
					}
				}			
			}
			if (piece.rotation == 90){
				if(direction == -1){
					if (i+1 < 20 && i-1 >= 0 && j-2 >= 0 && j < 10){
						if(!this.squares[i][j-2].present && !this.squares[i-1][j-2].present && !this.squares[i+1][j-1].present){
							return true;
						}else{
							return false;
						}
					}else{
						return true;
					}
				}
				if(direction == 1){
					if (i+1 < 20 && i-1 >= 0 && j-1 >= 0 && j+1 < 10){
						if(!this.squares[i][j+1].present && !this.squares[i+1][j+1].present && !this.squares[i-1][j].present){
							return true;
						}else{
							return false;
						}
					}else{
						return true;
					}
				}
			}
			if (piece.rotation == 270){
				if(direction == -1){
					if (i+1 < 20 && i-1 >= 0 && j-1 >= 0 && j < 10){
						if(!this.squares[i][j-1].present && !this.squares[i+1][j].present && !this.squares[i-1][j-1].present){
							return true;
						}else{
							return false;
						}
					}else{
						return true;
					}
				}
				if(direction == 1){
					if (i+1 < 20 && i-1 >= 0 && j-1 >= 0 && j+2 < 10){
						if(!this.squares[i][j+2].present && !this.squares[i+1][j+2].present && !this.squares[i-1][j+1].present){
							return true;
						}else{
							return false;
						}
					}else{
						return true;
					}
				}
			}
			if (piece.rotation == 180){
				if(direction == -1){
					if (i < 20 && i-1 >= 0 && j-2 >= 0 && j < 10){
						if(!this.squares[i][j-2].present && !this.squares[i-1][j-1].present){
							return true;
						}else{
							return false;
						}
					}else{
						return true;
					}
				}
				if(direction == 1){
					if (i < 20 && i-1 >= 0 && j >= 0 && j+2 < 10){
						if(!this.squares[i][j+1].present && !this.squares[i-1][j+2].present){
							return true;
						}else{
							return false;
						}
					}else{
						return true;
					}
				}
			}
		break;
		case "Z":
			var i = Math.floor((piece.y+SQUARESIZE)/SQUARESIZE);
			var j = Math.floor((piece.x+SQUARESIZE-UImargin)/SQUARESIZE);
			if (piece.rotation == 0){
				if(direction == -1){
					if (i+1 < 20 && i >= 0 && j-2 >= 0 && j < 10){
						if(!this.squares[i][j-2].present && !this.squares[i+1][j-1].present){
							return true;
						}else{
							return false;
						}
					}else{
						return true;
					}
				}
				if(direction == 1){
					if (i+1 < 20 && i >= 0 && j >= 0 && j+2 < 10){
						if(!this.squares[i][j+1].present && !this.squares[i+1][j+2].present){
							return true;
						}else{
							return false;
						}
					}else{
						return true;
					}
				}
			}
			if (piece.rotation == 90){
				if(direction == -1){
					if (i+1 < 20 && i-1 >= 0 && j-2 >= 0 && j < 10){
						if(!this.squares[i][j-2].present && !this.squares[i+1][j-2].present && !this.squares[i-1][j-1].present){
							return true;
						}else{
							return false;
						}
					}else{
						return true;
					}
				}
				if(direction == 1){
					if (i+1 < 20 && i-1 >= 0 && j >= 0 && j+1 < 10){
						if(!this.squares[i][j+1].present && !this.squares[i+1][j].present && !this.squares[i-1][j+1].present){
							return true;
						}else{
							return false;
						}
					}else{
						return true;
					}
				}
			}
			if (piece.rotation == 270){
				if(direction == -1){
					if (i+1 < 20 && i-1 >= 0 && j-1 >= 0 && j < 10){
						if(!this.squares[i][j-1].present && !this.squares[i+1][j-1].present && !this.squares[i-1][j].present){
							return true;
						}else{
							return false;
						}
					}else{
						return true;
					}
				}
				if(direction == 1){
					if (i+1 < 20 && i >= 0 && j >= 0 && j+2 < 10){
						if(!this.squares[i][j+2].present && !this.squares[i-1][j+2].present && !this.squares[i+1][j+1].present){
							return true;
						}else{
							return false;
						}
					}else{
						return true;
					}
				}			
			}
			if (piece.rotation == 180){
				if(direction == -1){
					if (i < 20 && i-1 >= 0 && j-2 >= 0 && j < 10){
						if(!this.squares[i][j-1].present && !this.squares[i-1][j-2].present){
							return true;
						}else{
							return false;
						}
					}else{
						return true;
					}
				}
				if(direction == 1){
					if (i < 20 && i-1 >= 0 && j >= 0 && j+2 < 10){
						if(!this.squares[i][j+2].present && !this.squares[i-1][j+1].present){
							return true;
						}else{
							return false;
						}
					}else{
						return true;
					}
				}
			}
		break;
		case "L":
			var i = Math.floor((piece.y+SQUARESIZE)/SQUARESIZE);
			var j = Math.floor((piece.x+SQUARESIZE-UImargin)/SQUARESIZE);
			if (piece.rotation == 0){
				if(direction == -1){
					if (i+1 < 20 && i-1 >= 0 && j-2 >= 0 && j < 10){
						if(!this.squares[i][j-2].present && !this.squares[i+1][j-2].present){
							return true;
						}else{
							return false;
						}
					}else{
						return true;
					}
				}
				if(direction == 1){
					if (i+1 < 20 && i >= 0 && j >= 0 && j+2 < 10){
						if(!this.squares[i][j+2].present && !this.squares[i+1][j].present){
							return true;
						}else{
							return false;
						}
					}else{
						return true;
					}
				}			
			}
			if (piece.rotation == 90){
				if(direction == -1){
					if (i+1 < 20 && i-1 >= 0 && j-2 >= 0 && j < 10){
						if(!this.squares[i-1][j-2].present && !this.squares[i][j-1].present && !this.squares[i+1][j-1].present){
							return true;
						}else{
							return false;
						}
					}else{
						return true;
					}
				}
				if(direction == 1){
					if (i+1 < 20 && i-1 >= 0 && j >= 0 && j+1 < 10){
						if(!this.squares[i][j+1].present && !this.squares[i+1][j+1].present && !this.squares[i-1][j+1].present){
							return true;
						}else{
							return false;
						}
					}else{
						return true;
					}
				}			
			}
			if (piece.rotation == 270){
				if(direction == -1){
					if (i+1 < 20 && i-1 >= 0 && j-1 >= 0 && j < 10){
						if(!this.squares[i][j-1].present && !this.squares[i-1][j-1].present && !this.squares[i+1][j-1].present){
							return true;
						}else{
							return false;
						}
					}else{
						return true;
					}
				}
				if(direction == 1){
					if (i+1 < 20 && i-1 >= 0 && j >= 0 && j+2 < 10){
						if(!this.squares[i][j+1].present && !this.squares[i+1][j+2].present && !this.squares[i-1][j+1].present){
							return true;
						}else{
							return false;
						}
					}else{
						return true;
					}
				}
			}
			if (piece.rotation == 180){
				if(direction == -1){
					if (i < 20 && i-1 >= 0 && j-2 >= 0 && j < 10){
						if(!this.squares[i][j-2].present && !this.squares[i-1][j].present){
							return true;
						}else{
							return false;
						}
					}else{
						return true;
					}
				}
				if(direction == 1){
					if (i < 20 && i-1 >= 0 && j >= 0 && j+2 < 10){
						if(!this.squares[i][j+2].present && !this.squares[i-1][j+2].present){
							return true;
						}else{
							return false;
						}
					}else{
						return true;
					}
				}
			}
		break;
		case "J":
			var i = Math.floor((piece.y+SQUARESIZE)/SQUARESIZE);
			var j = Math.floor((piece.x+SQUARESIZE-UImargin)/SQUARESIZE);
			if (piece.rotation == 0){
				if(direction == -1){
					if (i < 20 && i-1 >= 0 && j-2 >= 0 && j < 10){
						if(!this.squares[i-1][j-2].present && !this.squares[i][j-2].present){
							return true;
						}else{
							return false;
						}
					}else{
						return true;
					}
				}
				if(direction == 1){
					if (i < 20 && i-1 >= 0 && j >= 0 && j+2 < 10){
						if(!this.squares[i][j+2].present && !this.squares[i-1][j].present){
							return true;
						}else{
							return false;
						}
					}else{
						return true;
					}
				}
			}
			if (piece.rotation == 90){
				if(direction == -1){
					if (i+1 < 20 && i-1 >= 0 && j-1 >= 0 && j < 10){
						if(!this.squares[i-1][j-1].present && !this.squares[i][j-1].present && !this.squares[i+1][j-1].present){
							return true;
						}else{
							return false;
						}
					}else{
						return true;
					}
				}
				if(direction == 1){
					if (i+1 < 20 && i-1 >= 0 && j >= 0 && j+2 < 10){
						if(!this.squares[i][j+1].present && !this.squares[i+1][j+1].present && !this.squares[i-1][j+2].present){
							return true;
						}else{
							return false;
						}
					}else{
						return true;
					}
				}
			}
			if (piece.rotation == 270){
				if(direction == -1){
					if (i+1 < 20 && i-1 >= 0 && j-2 >= 0 && j < 10){
						if(!this.squares[i][j-1].present && !this.squares[i-1][j-1].present && !this.squares[i+1][j-2].present){
							return true;
						}else{
							return false;
						}
					}else{
						return true;
					}
				}
				if(direction == 1){
					if (i+1 < 20 && i-1 >= 0 && j >= 0 && j+1 < 10){
						if(!this.squares[i][j+1].present && !this.squares[i+1][j+1].present && !this.squares[i-1][j+1].present){
							return true;
						}else{
							return false;
						}
					}else{
						return true;
					}
				}
			}
			if (piece.rotation == 180){
				if(direction == -1){
					if (i+1 < 20 && i-1 >= 0 && j-2 >= 0 && j < 10){
						if(!this.squares[i][j-2].present && !this.squares[i+1][j].present){
							return true;
						}else{
							return false;
						}
					}else{
						return true;
					}
				}
				if(direction == 1){
					if (i+1 < 20 && i >= 0 && j >= 0 && j+2 < 10){
						if(!this.squares[i][j+2].present && !this.squares[i+1][j+2].present){
							return true;
						}else{
							return false;
						}
					}else{
						return true;
					}
				}
			}
		break;
		case "I":
			var i = Math.floor((piece.y+2*SQUARESIZE)/SQUARESIZE);
			var j = Math.floor((piece.x+2*SQUARESIZE-UImargin)/SQUARESIZE);
			if (piece.rotation == 0){
				if(direction == -1){
					if (i+1 < 20 && i-2 >= 0 && j-1 >= 0 && j < 10){
						if(
							!this.squares[i][j-1].present &&
							!this.squares[i+1][j-1].present && 
							!this.squares[i-1][j-1].present && 
							!this.squares[i-2][j-1].present){
							return true;
						}else{
							return false;
						}
					}else{
						return true;
					}
				}
				if(direction == 1){
					if (i+1 < 20 && i-2 >= 0 && j >= 0 && j+1 < 10){
						if(
							!this.squares[i][j+1].present &&
							!this.squares[i+1][j+1].present &&
							!this.squares[i-1][j+1].present && 
							!this.squares[i-2][j+1].present){
							return true;
						}else{
							return false;
						}
					}else{
						return true;
					}
				}
			}
			if (piece.rotation == 90){
				if(direction == -1){
					if (i < 20 && i >= 0 && j-3 >= 0 && j < 10){
						if(!this.squares[i][j-3].present){
							return true;
						}else{
							return false;
						}
					}else{
						return true;
					}
				}
				if(direction == 1){
					if (i < 20 && i >= 0 && j >= 0 && j+2 < 10){
						if(!this.squares[i][j+2].present){
							return true;
						}else{
							return false;
						}
					}else{
						return true;
					}
				}
			}
			if (piece.rotation == 270){
				if(direction == -1){
					if (i < 20 && i-1 >= 0 && j-3 >= 0 && j < 10){
						if(!this.squares[i-1][j-3].present){
							return true;
						}else{
							return false;
						}
					}else{
						return true;
					}
				}
				if(direction == 1){
					if (i < 20 && i-1 >= 0 && j >= 0 && j+2 < 10){
						if(!this.squares[i-1][j+2].present){
							return true;
						}else{
							return false;
						}
					}else{
						return true;
					}
				}
			}
			if (piece.rotation == 180){
				if(direction == -1){
					if (i+1 < 20 && i-2 >= 0 && j-2 >= 0 && j < 10){
						if(
							!this.squares[i][j-2].present &&
							!this.squares[i+1][j-2].present && 
							!this.squares[i-1][j-2].present && 
							!this.squares[i-2][j-2].present){
							return true;
						}else{
							return false;
						}
					}else{
						return true;
					}
				}
				if(direction == 1){
					if (i+1 < 20 && i-2 >= 0 && j >= 0 && j < 10){
						if(
							!this.squares[i][j].present &&
							!this.squares[i+1][j].present &&
							!this.squares[i-1][j].present && 
							!this.squares[i-2][j].present){
							return true;
						}else{
							return false;
						}
					}else{
						return true;
					}
				}
			}
		break;
		default: return true;
	}
}