CREATE TABLE `gallery` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `patientid` int(11) NOT NULL,
  `source` varchar(45) NOT NULL,
  `treatmentid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idgallery_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
