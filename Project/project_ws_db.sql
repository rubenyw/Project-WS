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
(14,'Ambon'),
(19,'Balikpapan'),
(20,'Banda Aceh'),
(21,'Bandar Lampung'),
(23,'Bandung'),
(34,'Banjar'),
(35,'Banjarbaru'),
(36,'Banjarmasin'),
(48,'Batam'),
(51,'Batu'),
(53,'Bau-Bau'),
(55,'Bekasi'),
(62,'Bengkulu'),
(69,'Bima'),
(70,'Binjai'),
(73,'Bitung'),
(75,'Blitar'),
(79,'Bogor'),
(89,'Bontang'),
(93,'Bukittinggi'),
(106,'Cilegon'),
(107,'Cimahi'),
(109,'Cirebon'),
(114,'Denpasar'),
(115,'Depok'),
(120,'Dumai'),
(130,'Gorontalo'),
(137,'Gunungsitoli'),
(151,'Jakarta Barat'),
(152,'Jakarta Pusat'),
(153,'Jakarta Selatan'),
(154,'Jakarta Timur'),
(155,'Jakarta Utara'),
(156,'Jambi'),
(158,'Jayapura'),
(179,'Kediri'),
(182,'Kendari'),
(204,'Kotamobagu'),
(213,'Kupang'),
(230,'Langsa'),
(235,'Lhokseumawe'),
(242,'Lubuk Linggau'),
(248,'Madiun'),
(250,'Magelang'),
(254,'Makassar'),
(256,'Malang'),
(267,'Manado'),
(276,'Mataram'),
(278,'Medan'),
(283,'Metro'),
(290,'Mojokerto'),
(318,'Padang'),
(321,'Padang Panjang'),
(323,'Padang Sidempuan'),
(324,'Pagar Alam'),
(326,'Palangka Raya'),
(327,'Palembang'),
(328,'Palopo'),
(329,'Palu'),
(334,'Pangkal Pinang'),
(336,'Parepare'),
(337,'Pariaman'),
(343,'Pasuruan'),
(345,'Payakumbuh'),
(349,'Pekalongan'),
(350,'Pekanbaru'),
(353,'Pematang Siantar'),
(365,'Pontianak'),
(367,'Prabumulih'),
(370,'Probolinggo'),
(384,'Sabang'),
(386,'Salatiga'),
(387,'Samarinda'),
(394,'Sawah Lunto'),
(399,'Semarang'),
(403,'Serang'),
(407,'Sibolga'),
(415,'Singkawang'),
(421,'Solok'),
(425,'Sorong'),
(429,'Subulussalam'),
(431,'Sukabumi'),
(442,'Sungaipenuh'),
(444,'Surabaya'),
(445,'Surakarta (Solo)'),
(456,'Tangerang'),
(457,'Tangerang Selatan'),
(459,'Tanjung Balai'),
(462,'Tanjung Pinang'),
(467,'Tarakan'),
(469,'Tasikmalaya'),
(470,'Tebing Tinggi'),
(473,'Tegal'),
(477,'Ternate'),
(478,'Tidore Kepulauan'),
(485,'Tomohon'),
(488,'Tual'),
(501,'Yogyakarta');

/*Table structure for table `ktp` */

DROP TABLE IF EXISTS `ktp`;

CREATE TABLE `ktp` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) NOT NULL,
  `foto_ktp` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

/*Data for the table `user` */

insert  into `user`(`id`,`username`,`password`,`email`,`no_hp`,`api_key`,`api_hit`,`role`,`saldo`) values 
(1,'test1','12345678','test1@gmail.com','0123456789','gSkyFoaX2X',0,'Sender',0);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
