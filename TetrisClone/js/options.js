function optionScreen(){}

optionScreen.backToMainMenu =
function (){
	document.getElementById("options").style.display = "none";
	loadMainMenu();
}

optionScreen.showOptions =
function (){
	ctx.clearRect(0,0,canvas.width,canvas.height);
	document.getElementById("mainMenuButtons").style.display = "none";
	document.getElementById("options").style.display = "block";
}

