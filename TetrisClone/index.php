<?php
	session_start();
	require_once __DIR__ . "/php/config.php";
	if (isset($_SESSION['LoggedUser'])){
		header( 'Location: ./game.php');
		exit;
	}
?>

<!DOCTYPE html>
<html lang="it">
	<head>
		<meta charset="utf-8">
		<meta name="author" content="Marco Bellezza">
		<meta name="keywords" content="game">
		<link rel="icon" href="./sprites/Tpiece.png">
		<link rel="stylesheet" href="./css/game.css" type="text/css">
		<title>Login page</title>
	</head>
	<body>
		<div id="titleContainer">
			<img src="./sprites/Title.png" alt="tetris title">
		</div>
		<div id="loginFormContainer">
			<form id="loginForm" method="post" action="./php/login.php">
				<input type="text" class="textInput" name="Username" placeholder="Username" required autofocus autocomplete="username"><br>
				<br>
				<input type="password" class="textInput" name="Password" placeholder="Password" required autocomplete="current-password"><br>
				<br>
				<input type="submit" class="button" value="Login">
				<?php
					if (isset($_SESSION['LoginError']) && $_SESSION['LoginError']){
						echo "<br><br>Error: incorrect username or password";
						$_SESSION['LoginError'] = false;
					}
					
				?>
			</form>
			<br>
			Don't have an account yet? &nbsp;
			<a href="./php/registerPage.php">Register here<a/>
		</div>
	</body>
</html>