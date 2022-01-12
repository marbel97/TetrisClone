function controls(){
	this.leftPressed = false;
	this.rightPressed = false;
	this.upPressed = false;
	this.upReleased = true;
	this.delay = 0;
	
	if(handler1Reference !== null && handler2Reference !== null){
		document.removeEventListener("keydown",handler1Reference,false);
		document.removeEventListener("keyup",handler2Reference,false);
	}
	
	handler1Reference = this.keyDownHandler.bind(this);
	handler2Reference = this.keyUpHandler.bind(this)
	document.addEventListener("keydown",handler1Reference,false);
	document.addEventListener("keyup",handler2Reference,false);

}

controls.prototype.keyDownHandler =
function (e){
	if (e.key == "Up" || e.key == "ArrowUp"){
		if (this.upReleased){
			this.upPressed = true;
			this.upReleased = false;
		}
	}
	if (e.key == "Left" || e.key == "ArrowLeft"){
		this.leftPressed = true;
	}
	if (e.key == "Right" || e.key == "ArrowRight"){
		this.rightPressed = true;
	}
	if (e.key == "Down" || e.key == "ArrowDown"){
		session.piece.fallSpeed = session.piece.fastFallSpeed;
	}
}

controls.prototype.keyUpHandler =
function (e){
	if (e.key == "Up" || e.key == "ArrowUp"){
			this.upReleased = true;
			this.upPressed = false;
	}
	if (e.key == "Left" || e.key == "ArrowLeft"){
		this.leftPressed = false;
	}
	if (e.key == "Right" || e.key == "ArrowRight"){
		this.rightPressed = false;
	}
	if (e.key == "Down" || e.key == "ArrowDown"){
		session.piece.fallSpeed = session.piece.slowFallSpeed;
	}
}


gamePiece.prototype.rotatePiece = 
function(){
	if (this.checkRotationPossible()){
		this.rotation = (this.rotation + 90) % 360;
	}
}

controls.prototype.movementInput = 
function (){
	var direction = 0;
	if (this.leftPressed){
		direction = -1;
	}
	if (this.rightPressed){
		direction = 1;
	}
	this.delay -= SQUARESIZE;
	if (session.board.checkMovementPossible(direction)){
		if (this.delay <= 0){
			session.piece.movePiece(direction);
			this.delay = SQUARESIZE*8;
		}
	}
}

controls.prototype.rotationInput =
function (){
	if (this.upPressed){
		this.upPressed = false;
		if (session && session.piece){
			if (session.piece.checkInsideBorders()){
				session.piece.rotatePiece();
			}
		}
	}
}