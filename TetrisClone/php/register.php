<?php
	session_start();
	require_once __DIR__ . "/config.php";
	require_once BASE_DIR . "DBoperations.php";
	if (!isset($_POST['Username']) ||
		!isset($_POST['Password']) || 
		!isset($_POST['Email'])|| 
		!isset($_POST['ConfirmPassword'])
		){
		$_SESSION['RegisterError'] = 1;
		header('location: ./registerPage.php');
		exit;
	}
	
	$Username = $_POST['Username'];
	$Password = $_POST['Password'];
	$ConfirmPassword = $_POST['ConfirmPassword'];
	$Email = $_POST['Email'];
	
	if ($ConfirmPassword != $Password){
		$_SESSION['RegisterError'] = 2;
		header('location: ./registerPage.php');
		exit;
	}
	
	$result = checkAlreadyRegistered($Username,$Email);
	
	if ($result === null || !$result || $result->num_rows <=0){
		register($Username,$Password,$Email);
		header('location: ../index.php');
		exit;
	}
	
	$_SESSION['RegisterError'] = 3;
	header('location: ./registerPage.php');
?>