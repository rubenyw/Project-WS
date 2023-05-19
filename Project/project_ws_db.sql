/*
SQLyog Community v13.1.9 (64 bit)
MySQL - 10.4.24-MariaDB : Database - project_ws
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`project_ws` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `project_ws`;

/*Table structure for table `barang` */

DROP TABLE IF EXISTS `barang`;

CREATE TABLE `barang` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_sender` int(11) NOT NULL,
  `id_traveller` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `berat` int(11) NOT NULL,
  `id_kota_keberangkatan` int(11) NOT NULL,
  `id_kota_tujuan` int(11) NOT NULL,
  `durasi` int(11) NOT NULL,
  `harga` int(11) NOT NULL,
  `status` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_sender` (`id_sender`),
  KEY `id_traveller` (`id_traveller`),
  KEY `id_kota_keberangkatan` (`id_kota_keberangkatan`),
  KEY `id_kota_tujuan` (`id_kota_tujuan`),
  CONSTRAINT `barang_ibfk_1` FOREIGN KEY (`id_sender`) REFERENCES `user` (`id`),
  CONSTRAINT `barang_ibfk_2` FOREIGN KEY (`id_traveller`) REFERENCES `user` (`id`),
  CONSTRAINT `barang_ibfk_3` FOREIGN KEY (`id_kota_keberangkatan`) REFERENCES `kota` (`id`),
  CONSTRAINT `barang_ibfk_4` FOREIGN KEY (`id_kota_tujuan`) REFERENCES `kota` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `barang` */

/*Table structure for table `kota` */

DROP TABLE IF EXISTS `kota`;

CREATE TABLE `kota` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=600 DEFAULT CHARSET=utf8mb4;

/*Data for the table `kota` */

insert  into `kota`(`id`,`nama`) values 
(14,'AMBON'),
(19,'BALIKPAPAN'),
(20,'BANDA ACEH'),
(21,'BANDAR LAMPUNG'),
(23,'BANDUNG'),
(34,'BANJAR'),
(35,'BANJARBARU'),
(36,'BANJARMASIN'),
(48,'BATAM'),
(51,'BATU'),
(53,'BAU-BAU'),
(55,'BEKASI'),
(62,'BENGKULU'),
(69,'BIMA'),
(70,'BINJAI'),
(73,'BITUNG'),
(75,'BLITAR'),
(79,'BOGOR'),
(89,'BONTANG'),
(93,'BUKITTINGGI'),
(106,'CILEGON'),
(107,'CIMAHI'),
(109,'CIREBON'),
(114,'DENPASAR'),
(115,'DEPOK'),
(120,'DUMAI'),
(130,'GORONTALO'),
(137,'GUNUNGSITOLI'),
(151,'JAKARTA BARAT'),
(152,'JAKARTA PUSAT'),
(153,'JAKARTA SELATAN'),
(154,'JAKARTA TIMUR'),
(155,'JAKARTA UTARA'),
(156,'JAMBI'),
(158,'JAYAPURA'),
(179,'KEDIRI'),
(182,'KENDARI'),
(204,'KOTAMOBAGU'),
(213,'KUPANG'),
(230,'LANGSA'),
(235,'LHOKSEUMAWE'),
(242,'LUBUK LINGGAU'),
(248,'MADIUN'),
(250,'MAGELANG'),
(254,'MAKASSAR'),
(256,'MALANG'),
(267,'MANADO'),
(276,'MATARAM'),
(278,'MEDAN'),
(283,'METRO'),
(290,'MOJOKERTO'),
(318,'PADANG'),
(321,'PADANG PANJANG'),
(323,'PADANG SIDEMPUAN'),
(324,'PAGAR ALAM'),
(326,'PALANGKA RAYA'),
(327,'PALEMBANG'),
(328,'PALOPO'),
(329,'PALU'),
(334,'PANGKAL PINANG'),
(336,'PAREPARE'),
(337,'PARIAMAN'),
(343,'PASURUAN'),
(345,'PAYAKUMBUH'),
(349,'PEKALONGAN'),
(350,'PEKANBARU'),
(353,'PEMATANG SIANTAR'),
(365,'PONTIANAK'),
(367,'PRABUMULIH'),
(370,'PROBOLINGGO'),
(384,'SABANG'),
(386,'SALATIGA'),
(387,'SAMARINDA'),
(394,'SAWAH LUNTO'),
(399,'SEMARANG'),
(403,'SERANG'),
(407,'SIBOLGA'),
(415,'SINGKAWANG'),
(421,'SOLOK'),
(425,'SORONG'),
(429,'SUBULUSSALAM'),
(431,'SUKABUMI'),
(442,'SUNGAIPENUH'),
(444,'SURABAYA'),
(445,'SURAKARTA (SOLO)'),
(456,'TANGERANG'),
(457,'TANGERANG SELATAN'),
(459,'TANJUNG BALAI'),
(462,'TANJUNG PINANG'),
(467,'TARAKAN'),
(469,'TASIKMALAYA'),
(470,'TEBING TINGGI'),
(473,'TEGAL'),
(477,'TERNATE'),
(478,'TIDORE KEPULAUAN'),
(485,'TOMOHON'),
(488,'TUAL'),
(501,'YOGYAKARTA');

/*Table structure for table `ktp` */

DROP TABLE IF EXISTS `ktp`;

CREATE TABLE `ktp` (
  `id_user` int(11) NOT NULL,
  `foto_ktp` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  PRIMARY KEY (`id_user`),
  KEY `id_user` (`id_user`),
  CONSTRAINT `ktp_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `ktp` */

/*Table structure for table `rating` */

DROP TABLE IF EXISTS `rating`;

CREATE TABLE `rating` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_sender` int(11) NOT NULL,
  `id_traveller` int(11) NOT NULL,
  `rate` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_sender` (`id_sender`),
  KEY `id_traveller` (`id_traveller`),
  CONSTRAINT `rating_ibfk_1` FOREIGN KEY (`id_sender`) REFERENCES `user` (`id`),
  CONSTRAINT `rating_ibfk_2` FOREIGN KEY (`id_traveller`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `rating` */

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `no_hp` varchar(20) NOT NULL,
  `api_key` varchar(255) NOT NULL,
  `api_hit` int(11) NOT NULL,
  `role` varchar(255) NOT NULL,
  `saldo` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

/*Data for the table `user` */

insert  into `user`(`id`,`username`,`password`,`email`,`no_hp`,`api_key`,`api_hit`,`role`,`saldo`) values 
(1,'test1','12345678','test1@gmail.com','0123456789','gSkyFoaX2X',9310,'Sender',0),
(2,'test1','12345678','test1@gmail.com','0123456789','aw5w1QD044',0,'Sender',0),
(3,'test1','12345678','test1@gmail.com','0123456789','o5yY2FOrt8',0,'Sender',0),
(4,'rubenyw','12345','rubenyasonwinarta@gmail.com','08111111111','FlKZoqcmWL',0,'Traveller',0);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
