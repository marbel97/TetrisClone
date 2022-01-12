
gameSession.prototype.drawGame =
function(){
	ctx.clearRect(0,0,canvas.width,canvas.height);
	this.advanceGameState();
	this.board.drawBoard();
	this.piece.drawPiece();
	this.drawUI();
	this.drawNextPiecePrediction();
	if (!this.gameOver){
		requestAnimationFrame(() => {this.drawGame()});
	}else{
		drawGameOverScreen();
	}
}

gameBoard.prototype.drawBoard =
function(){
	for (var i = 0; i < 20; i++){
		for (var j = 0; j < 10; j++){
			if (this.squares[i][j].present){
				ctx.drawImage(
								this.squares[i][j].present,
								this.squares[i][j].x1,
								this.squares[i][j].y1,
								SQUARESIZE,
								SQUARESIZE
							);
			}
		}
	}
}

gamePiece.prototype.drawPiece =
function(){
	drawImageRot(
					this.sprite,
					this.x,
					this.y,
					this.sprite.width/4*3*canvas.height/480,
					this.sprite.height/4*3*canvas.height/480,
					this.rotation
				);
}

gameSession.prototype.drawUI =
function (){
	ctx.strokeStyle = "gold";
	ctx.lineWidth = 2;
	ctx.strokeRect(1,1,UImargin-2,canvas.height-2);
	ctx.strokeRect(canvas.width - UImargin+1,1,UImargin-2,canvas.height-2);
	ctx.fillStyle = "gold";
	ctx.font = "20px Impact";
	ctx.textAlign = "center";
	ctx.fillText("Score",UImargin/2,canvas.height/12)
	ctx.fillText(this.board.score,UImargin/2,canvas.height/7);
}

gameSession.prototype.drawNextPiecePrediction =
function(){
	var rectSize = UImargin-SQUARESIZE;
	var offset = (rectSize - this.nextPiece.sprite.width/4*3*canvas.height/480)/2;
	ctx.strokeStyle = "gold";
	ctx.strokeRect(
					canvas.width - UImargin+SQUARESIZE/2,
					canvas.height/12,
					rectSize,
					rectSize
				);
	ctx.drawImage(
					this.nextPiece.sprite,
					canvas.width - UImargin+SQUARESIZE/2 + offset,
					canvas.height/12 + offset,
					this.nextPiece.sprite.width/4*3*canvas.height/480,
					this.nextPiece.sprite.height/4*3*canvas.height/480
				);
}

mainMenu.prototype.drawMainMenu = 
function (){
	ctx.clearRect(0,0,canvas.width,canvas.height);
	if(!this.titleHidden){	
		ctx.drawImage(
						this.titleSprite,
						(canvas.width - this.titleSprite.width/4*3*canvas.height/480)/2,
						canvas.height/6,
						this.titleSprite.width/4*3*canvas.height/480,
						this.titleSprite.height/4*3*canvas.height/480
					 )
	}

	if (this.pressStartTextAlpha > 0.99){
		this.alphaCycle = -1;
	}
	if (this.pressStartTextAlpha < 0.01){
		this.alphaCycle = 1;
	}
	this.pressStartTextAlpha = this.pressStartTextAlpha + 0.010*this.alphaCycle;
	ctx.fillStyle = "rgba(212,175,55,"+ this.pressStartTextAlpha + ")";
	ctx.font = "20px Impact";
	ctx.textAlign = "center";
	ctx.fillText("Click anywhere to start", canvas.width/2,canvas.height/1.5);

	
	if(!MAINMENU.menuActive){
		requestAnimationFrame(() => {this.drawMainMenu()});
	}else{
		ctx.clearRect(0,canvas.height/2,canvas.width,canvas.height/2);
	}
}

function drawGameOverScreen(){
	if (this.GOy == undefined || this.GOy > canvas.height)
		this.GOy = 0
	ctx.font = "50px Impact";
	ctx.fillStyle = "black";
	ctx.fillRect(UImargin,0,canvas.width-2*UImargin,this.GOy);
	ctx.fillStyle = "Gold";
	ctx.fillText('Game Over',canvas.width/2,this.GOy-25);
	this.GOy += 3;
	if (this.GOy > canvas.height){
		document.getElementById('gameOverMenu').style.display = "block";
	}else{
		requestAnimationFrame(drawGameOverScreen);
	}
}