<?php
	session_start();
	require_once __DIR__ . "/config.php";
	require_once BASE_DIR . "DBoperations.php";
	if (!isset($_POST['Username']) || !isset($_POST['Password'])){
		$_SESSION['LoginError'] = false;
		header('location: ../index.php');
		exit;
	}
	
	$Username = $_POST['Username'];
	$Password = $_POST['Password'];
	$result = findUser($Username,$Password);
	
	if ($result === null || !$result || $result->num_rows <=0){
		$_SESSION['LoginError'] = true;
		header('location: ../index.php');
		exit;
	}
	
	$_SESSION['LoggedUser'] = $Username;
	
	$_SESSION['LoginError'] = false;
	header('location: ../game.php');
?>