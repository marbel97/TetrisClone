<?php
	require_once __DIR__ . "/config.php";
	require_once DBMAN_DIR . "dbConfig.php";
	require_once DBMAN_DIR . "tetrisDBmanager.php";
	
	function loadLeaderboards($dateParameter){
		global $tetris;
		$dateParameter = $tetris->sqlInjectionFilter($dateParameter);
		$queryText = 'CALL showHighscores(\'' . $dateParameter . '\');';
		
		$result = $tetris->performQuery($queryText);
		$tetris->closeConnection();
		return $result;
	}
	
	function findUser($Username,$Password){
		global $tetris;
		$Username = $tetris->sqlInjectionFilter($Username);
		$Password = $tetris->sqlInjectionFilter($Password);
		$queryText = 'CALL findUser(\'' . $Username . '\', \'' . $Password . '\');';
		
		$result = $tetris->performQuery($queryText);
		$tetris->closeConnection();
		return $result;
	}

	function submitScore($Username,$Score){
		global $tetris;
		$Username = $tetris->sqlInjectionFilter($Username);
		$Score = $tetris->sqlInjectionFilter($Score);
		$queryText = 'CALL insertScore(\'' . $Username . '\', \'' . $Score . '\');';
		
		$result = $tetris->performQuery($queryText);
		$tetris->closeConnection();
		return $result;
	}

	function checkAlreadyRegistered($Username,$Email){
		global $tetris;
		$Username = $tetris->sqlInjectionFilter($Username);
		$Email = $tetris->sqlInjectionFilter($Email);
		$queryText = 'SELECT Username,Email '
					 . ' FROM Users '
					 . ' WHERE Username = \'' . $Username . '\' OR '
					 . ' Email = \'' . $Email . '\';';
		$result = $tetris->performQuery($queryText);
		$tetris->closeConnection();
		return $result;
	}

	function register($Username,$Password,$Email){
		global $tetris;
		$Username = $tetris->sqlInjectionFilter($Username);
		$Password = $tetris->sqlInjectionFilter($Password);
		$Email = $tetris->sqlInjectionFilter($Email);
		$queryText = 'CALL registration(\'' . $Username . '\', \'' . $Password . '\', \'' . $Email . '\');';
		
		$result = $tetris->performQuery($queryText);
		$tetris->closeConnection();
		return $result;
	}
	
	function passwordChange($Username,$OldPassword,$NewPassword){
		global $tetris;
		$Username = $tetris->sqlInjectionFilter($Username);
		$OldPassword = $tetris->sqlInjectionFilter($OldPassword);
		$NewPassword = $tetris->sqlInjectionFilter($NewPassword);
		$queryText = 'CALL passwordChange(\'' . $Username . '\', \'' . $OldPassword . '\', \'' . $NewPassword . '\');';
		
		$result = $tetris->performQuery($queryText);
		$tetris->closeConnection();		
		return $result;
	}
?>