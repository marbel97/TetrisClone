-- Progettazione Web 
DROP DATABASE if exists tetris; 
CREATE DATABASE tetris; 
USE tetris; 
-- MySQL dump 10.13  Distrib 5.6.20, for Win32 (x86)
--
-- Host: localhost    Database: tetris
-- ------------------------------------------------------
-- Server version	5.6.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `highscores`
--

DROP TABLE IF EXISTS `highscores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `highscores` (
  `Username` char(50) NOT NULL,
  `Score` int(11) NOT NULL,
  `ScoreDate` date NOT NULL,
  PRIMARY KEY (`Username`,`Score`,`ScoreDate`),
  CONSTRAINT `highscores_ibfk_1` FOREIGN KEY (`Username`) REFERENCES `users` (`Username`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `highscores`
--

LOCK TABLES `highscores` WRITE;
/*!40000 ALTER TABLE `highscores` DISABLE KEYS */;
INSERT INTO `highscores` VALUES ('aaa',12000,'2020-06-05'),('bbb',100,'2020-05-05'),('bbb',1200,'2020-05-22'),('bbb',1200,'2020-06-05'),('bbb',12000,'2019-06-05'),('ccc',3900,'2020-06-05'),('ccc',30900,'2019-06-05'),('ccc',39000,'2020-05-05'),('ccc',300900,'2020-05-15'),('ddd',9000,'2020-04-05'),('ddd',9000,'2020-05-05'),('ddd',9000,'2020-06-05'),('ddd',90000,'2019-06-05'),('eee',12200,'2018-06-05'),('eee',12200,'2019-06-05'),('eee',12200,'2020-05-29'),('eee',12200,'2020-06-05'),('fff',6660,'2019-06-05'),('fff',66600,'2020-06-05'),('fff',666000,'2020-05-05'),('fff',6060600,'2020-03-05');
/*!40000 ALTER TABLE `highscores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `Username` char(50) NOT NULL,
  `PassW` char(50) NOT NULL,
  `Email` char(50) NOT NULL,
  PRIMARY KEY (`Username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('aaa','aaa','aaa'),('bbb','bbb','bbb'),('ccc','ccc','ccc'),('ddd','ddd','ddd'),('eee','eee','eee'),('fff','fff','fff');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'tetris'
--
/*!50003 DROP PROCEDURE IF EXISTS `findUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = latin1 */ ;
/*!50003 SET character_set_results = latin1 */ ;
/*!50003 SET collation_connection  = latin1_swedish_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `findUser`(
						IN _username char(50),
                        IN _password char(50)
                      )
BEGIN
	SELECT Username, PassW
    FROM Users
    WHERE _username = Username AND
		  _password = PassW;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `insertScore` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = latin1 */ ;
/*!50003 SET character_set_results = latin1 */ ;
/*!50003 SET collation_connection  = latin1_swedish_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `insertScore`(
								IN _username char(50),
								IN _score int(11)
							)
BEGIN
	INSERT INTO Highscores
    VALUES(_username,_score,current_date);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `passwordChange` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = latin1 */ ;
/*!50003 SET character_set_results = latin1 */ ;
/*!50003 SET collation_connection  = latin1_swedish_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `passwordChange`(
									IN _username char(50),
                                    IN _oldPassword char(50),
                                    IN _newPassword char(50)
							   )
BEGIN
	UPDATE Users
    SET PassW = _newPassword
    WHERE Username = _username AND
		  PassW = _oldPassword;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `registration` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = latin1 */ ;
/*!50003 SET character_set_results = latin1 */ ;
/*!50003 SET collation_connection  = latin1_swedish_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `registration`(
								IN _username char(50),
                                IN _password char(50),
                                IN _email char(50)
							 )
BEGIN
	INSERT INTO Users
    VALUES(_username,_password,_email);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `showHighscores` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = latin1 */ ;
/*!50003 SET character_set_results = latin1 */ ;
/*!50003 SET collation_connection  = latin1_swedish_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `showHighscores`(
									IN _dateParameter char(50)
							   )
BEGIN
	IF (_dateParameter = "AllTime")
    THEN
		SELECT IF(
					@score = H.Score,
					@rank := @rank + LEAST(0, @gap := @gap + 1),
					@rank := @rank + GREATEST(@gap, @gap := 1) + LEAST(0,@score := H.Score)
				  ) AS Ranking, H.Username, H.Score
		FROM HighScores H,
			 (SELECT @score := -1, @rank:=0,@gap:=1) AS Y
		ORDER BY H.Score DESC;
	ELSEIF (_dateParameter = "LastYear")
    THEN
		SELECT IF(	  
					  @score = H.Score,
					  @rank := @rank + LEAST(0, @gap := @gap + 1),
					  @rank := @rank + GREATEST(@gap, @gap := 1) + LEAST(0,@score := H.Score)
				 ) AS Ranking, H.Username, H.Score
		FROM (
				SELECT H1.Username,H1.Score
				FROM Highscores H1
				WHERE YEAR(H1.ScoreDate) = YEAR(current_date)
			 ) AS H,
			(SELECT @score := -1, @rank:=0,@gap:=1) AS Y
		ORDER BY H.Score DESC;
    ELSEIF (_dateParameter = "LastMonth")
    THEN
		SELECT IF(	  
					  @score = H.Score,
					  @rank := @rank + LEAST(0, @gap := @gap + 1),
					  @rank := @rank + GREATEST(@gap, @gap := 1) + LEAST(0,@score := H.Score)
				 ) AS Ranking, H.Username, H.Score
		FROM (
				SELECT H1.Username,H1.Score
				FROM Highscores H1
				WHERE YEAR(H1.ScoreDate) = YEAR(current_date) AND
					  MONTH(H1.ScoreDate) = MONTH(current_date)
			 ) AS H,
			(SELECT @score := -1, @rank:=0,@gap:=1) AS Y
		ORDER BY H.Score DESC;
	ELSEIF (_dateParameter = "LastWeek")
    THEN
		SELECT IF(
					@score = H.Score,
					@rank := @rank + LEAST(0, @gap := @gap + 1),
					@rank := @rank + GREATEST(@gap, @gap := 1) + LEAST(0,@score := H.Score)
				  ) AS Ranking, H.Username, H.Score
		FROM (
				SELECT H1.Username,H1.Score
				FROM Highscores H1
				WHERE YEAR(H1.ScoreDate) = YEAR(current_date) AND
					  WEEK(H1.ScoreDate) = WEEK(current_date)
			 ) AS H,
			(SELECT @score := -1, @rank:=0,@gap:=1) AS Y
		ORDER BY H.Score DESC;
	ELSEIF (_dateParameter = "Today")
    THEN
		SELECT IF(
					@score = H.Score,
					  @rank := @rank + LEAST(0, @gap := @gap + 1),
					  @rank := @rank + GREATEST(@gap, @gap := 1) + LEAST(0,@score := H.Score)
				  ) AS Ranking, H.Username, H.Score
		FROM (
				SELECT H1.Username,H1.Score
				FROM Highscores H1
				WHERE H1.ScoreDate = current_date
			 ) AS H,
			(SELECT @score := -1, @rank:=0,@gap:=1) AS Y
		ORDER BY H.Score DESC;
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-05 16:05:26
