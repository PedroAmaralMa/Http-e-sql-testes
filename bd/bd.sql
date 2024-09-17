create DATABASE auto;
use auto;

CREATE TABLE `carro` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nomecarro` varchar(50) DEFAULT NULL,
  `cor` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
