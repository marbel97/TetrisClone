<?php 
	session_start();
	session_destroy();

	if (isset($_SESSION['LoggedUser']))
		unset($_SESSION['LoggedUser']); 

	header('location: ../index.php'); 
?>