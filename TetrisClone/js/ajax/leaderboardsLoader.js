function leaderboardsLoader (){}

leaderboardsLoader.loadData = 
function (par){
	AjaxManager.performAjaxRequest('GET','./php/ajax/leaderboardsLoader.php?dateParameter=' + par,true,null,leaderboardsLoader.onAjaxResponse);
}

leaderboardsLoader.onAjaxResponse =
function (response){
	currentPage = 1;
	fetchedScores = response.data;
	var table;
	var iStart = (currentPage-1)*10 + 1;
	table = document.getElementById("scoresTable");
	updateTable(table,iStart,response.data);
}

function deleteAllRows(table){
	while (table.rows[1] !== undefined){
		table.deleteRow(1);
	}
}

function updateTable(table,iStart,data){
	deleteAllRows(table);
	for (var i = iStart; i < iStart + 10 && data !== null && data[i-1] !== undefined; i++){
		var row = table.insertRow(i-iStart+1);
		var rankCell = row.insertCell(0);
		var userCell = row.insertCell(1);
		var scoreCell = row.insertCell(2);
		rankCell.innerText = data[i-1].Ranking;
		userCell.innerText = data[i-1].Username;
		scoreCell.innerText = data[i-1].Score;
	}
}

function showNextPage(){
	var length = fetchedScores.length;
	if (currentPage < length/10)
		currentPage++;
	var iStart = (currentPage-1)*10 + 1;
	table = document.getElementById("scoresTable");
	updateTable(table,iStart,fetchedScores);
}

function showPreviousPage(){
	var length = fetchedScores.length;
	if (currentPage > 1)
		currentPage--;
	var iStart = (currentPage-1)*10 + 1;
	table = document.getElementById("scoresTable");
	updateTable(table,iStart,fetchedScores);
}