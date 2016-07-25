CREATE DATABASE  IF NOT EXISTS `smiletime` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `smiletime`;
DROP TABLE IF EXISTS `agenda`;
CREATE TABLE `agenda` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(200) NOT NULL,
  `start` varchar(45) NOT NULL,
  `end` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8;
