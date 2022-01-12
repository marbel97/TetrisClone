<?php
	session_start();
	
	require_once __DIR__ . "/config.php";
	require_once BASE_DIR . "DBoperations.php";
	
	if (!isset($_SESSION['LoggedUser']) || !isset($_POST['OldPassword']) || !isset($_POST['NewPassword']) || !isset($_POST['ConfirmNewPassword'])){
		$_SESSION['ChangePSWError'] = 1;
		header('location: ../index.php');
		exit;
	}
	
	$Username = $_SESSION['LoggedUser'];
	$OldPassword = $_POST['OldPassword'];
	$NewPassword = $_POST['NewPassword'];
	$ConfirmNewPassword = $_POST['ConfirmNewPassword'];
	if ($ConfirmNewPassword != $NewPassword){
		$_SESSION['ChangePSWError'] = 2;
		header('location: ../game.php');
		exit;
	}
	
	$result = findUser($Username,$OldPassword);
	
	if ($result === null || !$result || $result->num_rows <=0){
		$_SESSION['ChangePSWError'] = 3;
		header('location: ../game.php');
		exit;
	}
	
	$result = passwordChange($Username,$OldPassword,$NewPassword);
	header('location: ../game.php');
?>