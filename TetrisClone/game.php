<?php
	session_start();
	if (!isset($_SESSION['LoggedUser']))
		header("Location: ./index.php");
?>

<!DOCTYPE html>
<html lang="it">
	<head>
		<meta charset="utf-8">
		<meta name="author" content="Marco Bellezza">
		<meta name="keywords" content="game">
		<link rel="stylesheet" href="./css/game.css" type="text/css">
		<link rel="icon" href="./sprites/Tpiece.png">
		<script src="./js/ajax/ajaxManager.js"></script>
		<script src="./js/game.js"></script>
		<script src="./js/board.js"></script>
		<script src="./js/piece.js"></script>
		<script src="./js/draw.js"></script>
		<script src="./js/controls.js"></script>
		<script src="./js/utility.js"></script>
		<script src="./js/collisions.js"></script>
		<script src="./js/ajax/leaderboardsLoader.js"></script>
		<script src="./js/highscores.js"></script>
		<script src="./js/options.js"></script>
		<title>Tetris</title>
	</head>
	
	<body onload="loadMainMenu()">
		<div id="gameContainer">
			<canvas id="myGameArea" width="480" height="480" onclick="activateMainMenu()"></canvas>
				
			<div id="dateParameterButtons">
				<button class="button" name="dateParameter" value="AllTime" onclick="leaderboardsLoader.loadData(this.value)">All-time</button>
				<button class="button" name="dateParameter" value="LastYear" onclick="leaderboardsLoader.loadData(this.value)">Last year</button>
				<button class="button" name="dateParameter" value="LastMonth" onclick="leaderboardsLoader.loadData(this.value)">Last month</button>
				<button class="button" name="dateParameter" value="LastWeek" onclick="leaderboardsLoader.loadData(this.value)">Last week</button>
				<button class="button" name="dateParameter" value="Today" onclick="leaderboardsLoader.loadData(this.value)">Today</button>		
			</div>
			
			<div id="mainMenuButtons">
				<button class="button MMButton" onclick="gameStart()">Start game</button><br><br>
				<button class="button MMButton" onclick="highScores.showLeaderboards()">Leaderboards</button><br><br>
				<button class="button MMButton" onclick="location.href='./html/tutorial.html'">How to play</button><br><br>
				<button class="button MMButton" onclick="optionScreen.showOptions()">Options</button>
			</div>
			
			<table id="scoresTable">
				<tr>
					<th>Ranking</th> 
					<th>Username</th>
					<th>Score</th>
				</tr>
			</table>
		
			<div id="navigationButtons">
				<button class="button" onclick="showPreviousPage()">&larr;</button>
				<button class="button" onclick="highScores.backToMainMenu()">Back to menu</button>
				<button class="button" onclick="showNextPage()">&rarr;</button>		
			</div>
			
			<div id="gameOverMenu">
				<button class="button MMButton" onclick="gameStart()">Play again</button><br><br>
				<button class="button MMButton" onclick="loadMainMenu()">Main menu</button>
			</div>
			
			<div id="options">
				<?php if (isset($_SESSION['LoggedUser']))echo "<p style='color:gold'>Logged in as '" . $_SESSION['LoggedUser'] . "'</p>";?>
				<button class="button" onclick="location.href='./php/logout.php'">Logout</button><br><br><br>
				<form method="post" action="./php/changePassword.php">
					<input type="password" name="OldPassword" placeholder="Old password" required><br><br>
					<input type="password" name="NewPassword" placeholder="New password" required><br><br>
					<input type="password" name="ConfirmNewPassword" placeholder="Confirm new password" required><br><br>
					<input type="submit" class="button" value="Change Password"><br><br><br>
					<?php if (isset($_SESSION['ChangePSWError']) && $_SESSION['ChangePSWError'] == 1){
							echo "<p style='color:gold'>An error occurred</p>";
							echo "<script>window.onload=getContext();window.onload=optionScreen.showOptions();</script>";
							$_SESSION['ChangePSWError'] = 0;
						  }
						  if (isset($_SESSION['ChangePSWError']) && $_SESSION['ChangePSWError'] == 2){
							echo "<p style='color:gold'>Error: Passwords don't match</p>";
							echo "<script>window.onload=getContext();window.onload=optionScreen.showOptions();</script>";
							$_SESSION['ChangePSWError'] = 0;
						  }
						  if (isset($_SESSION['ChangePSWError']) && $_SESSION['ChangePSWError'] == 3){
							echo "<p style='color:gold'>Error: Incorrect password</p>";
							echo "<script>window.onload=getContext();window.onload=optionScreen.showOptions();</script>";
							$_SESSION['ChangePSWError'] = 0;
						  }
					?>
				</form>
				<button class="button" onclick="optionScreen.backToMainMenu()">Back to menu</button>
			</div>
		</div>
	</body>
</html>