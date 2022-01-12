var canvas;
var ctx;
var session;
var ctrls;
var SQUARESIZE;
var UImargin = 0;
var SHAPES = ["J","L","O","T","S","Z","I"];
var MAINMENU;
var fetchedScores;
var currentPage = 1;
var handler1Reference = null;
var handler2Reference = null;

function gameStart(){
	ctrls = new controls();
	session = new gameSession();
	document.getElementById("gameOverMenu").style.display = "none";
	document.getElementById("dateParameterButtons").style.display = "none";
	document.getElementById("scoresTable").style.display = "none";
	document.getElementById("mainMenuButtons").style.display = "none";
	session.drawGame();
}

function gameSession(){
	this.piece = this.spawnNewPiece();
	this.nextPiece = this.spawnNewPiece();
	this.board = new gameBoard();
	this.gameOver = false;
}

gameSession.prototype.advanceGameState =
function (){
	this.piece.y += this.piece.fallSpeed;
	ctrls.movementInput();
	ctrls.rotationInput();
	this.piece.checkBoardCollision();
	this.piece.checkGroundCollision();
	this.board.checkLines();
}

gameSession.prototype.spawnNewPiece =
function (){
	var img = new Image();
	var shape = SHAPES[Math.floor(Math.random()*7)];
	img.src = "./sprites/" + shape + "piece.png";
	return new gamePiece(img,canvas.width/2-2*SQUARESIZE,-4*SQUARESIZE,shape,1);
}

function mainMenu(){
	canvas = document.getElementById("myGameArea");
	ctx = canvas.getContext("2d");
	SQUARESIZE = canvas.height/20;
	UImargin = (canvas.width - SQUARESIZE*10)/2;
	var img = new Image();
	img.src = "./sprites/Title.png";
	this.titleSprite = img;
	this.menuActive = false;
	this.pressStartTextAlpha = 0;
	this.alphaCycle = 1;
}

function loadMainMenu(){
	document.getElementById("gameOverMenu").style.display = "none";
	MAINMENU = new mainMenu();
	MAINMENU.drawMainMenu();
}

function activateMainMenu(){
	if (!MAINMENU.menuActive){
		MAINMENU.menuActive = true;
		document.getElementById("mainMenuButtons").style.display = "block";
	}
}

gameSession.prototype.setGameOver =
function (){
	this.gameOver = true;
	AjaxManager.performAjaxRequest('GET','./php/ajax/scoreSubmit.php?Score=' + session.board.score,true,null,onScoreSubmitted);
}

function onScoreSubmitted(response){

}

function getContext(){
	canvas = document.getElementById("myGameArea");
	ctx = canvas.getContext("2d");
}