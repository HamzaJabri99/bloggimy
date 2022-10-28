-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: bloggimy
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `img` varchar(255) NOT NULL,
  `date` datetime NOT NULL,
  `userid` int NOT NULL,
  `category` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userid_idx` (`userid`),
  CONSTRAINT `userid` FOREIGN KEY (`userid`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (3,'BNEACH Thousand Year Blood War anime: Release date, story, characters, seiyuu, manga','<p>Is that a Bankai in your pants, or are you just happy to see me? After losing his shinigami powers in the final battle against Aizen Sosuke, Ichigo goes from protector to protected. His friends now take up the job of keeping Karakura Town safe from Hollows, while he does odd jobs to earn money. Ichigo comes into contact with the secretive organization Xcution. Led by Kugo Ginjo, who is surprisingly informed about Ichigo’s past, he offers Ichigo the chance to gain a new power: Fullbring, possessed by spiritually aware humans like himself, Orihime, and Chad. With Uryu out of commission following an attack from the mysterious villain Shukuro Tsukishima, Ichigo accepts.</p>','1666898963269Bleach_AnimeSennenKessenHen-1024x576.png','2022-10-27 14:13:26',8,'science'),(28,'JUST A TEST FOR A FOOD POST','<p>Updated! CJ HASN\'T found his HUBMERGER YUMMIII EAZTS HASNASNASAS</p>','1666901529014281267196_7653313798072419_2359046599436315624_n.jpg','2022-10-27 20:35:33',8,'food'),(29,'asaaaaaaaa','<p>assssssssssssssssssaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>','166690155355816c84589a1ceef313e45c4a39b0f28f2cbeaaf85.jpg','2022-10-27 21:12:33',8,'sport');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`,`email`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'jabri99','jabri.oldd@gmail.com','test123',NULL),(2,'jhin99','jabrsi.oldd@gmail.com','$2a$10$7Q6S0KjSohpurpX3Uv7EQOXl3wC8KcD09rcOjsk8Y1//QcKfqQ5ge',NULL),(4,'','','$2a$10$9KZFObOrwyZVLthlK.mHR.Yq6yq2C8b8A71Vm79Bb/z19K8lR9qwe',NULL),(5,'Adminn','azdad.az@gmail.com','$2a$10$jl.853X9pUzbXhJVPfoEOO2sWAk/Ep5hQlhdDNcfyWsR90/kBAeZe',NULL),(6,'Adminx','jabri.olxdd@gmail.com','$2a$10$8iehDsUcx89NQM89nNsqGOgayExPn22JNeVXZVWq2iEHu9M.7DRHK',NULL),(7,'roronoaz_Hamza','jabri.olddz@gmail.com','$2a$10$JrXJFIV30RvwMHHYrLr1bOm2GvwsR/KGn2E8uZjVEayy1wIWKIfze',NULL),(8,'Admin','jabri.olddd@gmail.com','$2a$10$dCPq/73ZoEjJSd.8YFaWTeQ3NkNrdlFDQPL771GZAmo2E8msf2I52',NULL),(9,'Admin1','Admin2.oldd@gmail.com','$2a$10$Axwq5e4xE50OgC2raIvKCeKOdWZQflyiTrOf3Pp54BgbFGGQuwuN.',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-28 14:50:54
