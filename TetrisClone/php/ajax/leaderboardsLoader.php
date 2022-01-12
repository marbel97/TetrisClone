<?php
	session_start();
	require_once __DIR__ . "/../config.php";
	require_once BASE_DIR . "DBoperations.php";
	require_once BASE_DIR . "ajax/ajaxResponse.php";
	
	$response = new AjaxResponse();
	
	if (!isset($_GET['dateParameter'])){
		echo json_encode($response);
		return;
	}
	
	$dateParameter = $_GET['dateParameter'];
	
	$result = loadLeaderboards($dateParameter);
	
	if (checkEmptyResult($result)){
		$response = setEmptyResponse();
		echo json_encode($response);
		return;
	}
	
	$message = "OK";
	$response = setResponse($result, $message);
	echo json_encode($response);
	return;
	
	function checkEmptyResult($result){
		if ($result === null || !$result)
			return true;
			
		return ($result->num_rows <= 0);
	}
	
	function setEmptyResponse(){
		$message = "No scores to load";
		return new AjaxResponse("-1", $message);
	}
	
	function setResponse($result, $message){
		$response = new AjaxResponse("0", $message);
			
		$index = 0;
		while ($row = $result->fetch_assoc()){
			$gameScore = new GameScore();
			
			$gameScore->Ranking = $row['Ranking'];
			$gameScore->Username = $row['Username'];
			$gameScore->Score = $row['Score'];
			
			$response->data[$index] = $gameScore;
			$index++;
		}
		
		return $response;
	}

?>	