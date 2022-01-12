<?php
	session_start();
	require_once __DIR__ . "/../config.php";
	require_once BASE_DIR . "DBoperations.php";
	require_once BASE_DIR . "ajax/ajaxResponse.php";
	
	$Username = $_SESSION['LoggedUser'];
	$Score = $_GET['Score'];
	
	submitScore($Username,$Score);
	
	$message = "Score submitted";
	$response = new AjaxResponse("0", $message);
	echo json_encode($response);
	return;
?>