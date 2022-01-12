function highScores(){}

highScores.showLeaderboards =
function (){
	ctx.clearRect(0,0,canvas.width,canvas.height);
	document.getElementById("dateParameterButtons").style.display = "block";
	document.getElementById("scoresTable").style.display = "block";
	document.getElementById("mainMenuButtons").style.display = "none";
	document.getElementById("navigationButtons").style.display = "block";
	leaderboardsLoader.loadData("Today");
}

highScores.backToMainMenu =
function (){
	ctx.clearRect(0,0,canvas.width,canvas.height);
	document.getElementById("dateParameterButtons").style.display = "none";
	document.getElementById("scoresTable").style.display = "none";
	document.getElementById("navigationButtons").style.display = "none";
	loadMainMenu();
}

