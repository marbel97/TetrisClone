<?php
	session_start();
	require_once __DIR__ . "/config.php";
?>

<!DOCTYPE html>
<html lang="it">
	<head>
		<meta charset="utf-8">
		<meta name="author" content="Marco Bellezza">
		<meta name="keywords" content="game">
		<link rel="icon" href="../sprites/Tpiece.png">
		<link rel="stylesheet" href="../css/game.css" type="text/css">
		<title>Register page</title>
	</head>
	<body>
		<div id="titleContainer">
			<img src="../sprites/Title.png" alt="tetris title">
		</div>
		<div id="loginFormContainer">
			<form id="loginForm" method="post" action="./register.php">
				<input type="text" class="textInput" name="Username" placeholder="Username" required autofocus><br>
				<br>
				<input type="email" class="textInput" name="Email" placeholder="Email" required><br>
				<br>
				<input type="password" class="textInput" name="Password" placeholder="Password" required><br>
				<br>
				<input type="password" class="textInput" name="ConfirmPassword" placeholder="Confirm Password" required><br>
				<br>
				<input type="submit" class="button" value="Register">
				<?php
					if (isset($_SESSION['RegisterError']) && $_SESSION['RegisterError']==1){
						echo "<br><br>An error occurred";
						$_SESSION['RegisterError'] = 0;
					}
					if (isset($_SESSION['RegisterError']) && $_SESSION['RegisterError']==2){
						echo "<br><br>Error: passwords don't match";
						$_SESSION['RegisterError'] = 0;
					}
					if (isset($_SESSION['RegisterError']) && $_SESSION['RegisterError']==3){
						echo "<br><br>Error: username or email already used";
						$_SESSION['RegisterError'] = 0;
					}
				?>
			</form>
			<br>
			Already have an account? &nbsp;
			<a href="../index.php">Login here<a/>
		</div>
	</body>
</html>