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
(1,'Ambon'),
(2,'Balikpapan'),
(3,'Banda Aceh'),
(4,'Bandar Lampung'),
(5,'Bandung'),
(6,'Banjar'),
(7,'Banjarbaru'),
(8,'Banjarmasin'),
(9,'Batam'),
(10,'Batu'),
(11,'Bau-Bau'),
(12,'Bekasi'),
(13,'Bengkulu'),
(14,'Bima'),
(15,'Binjai'),
(16,'Bitung'),
(17,'Blitar'),
(18,'Bogor'),
(19,'Bontang'),
(20,'Bukittinggi'),
(21,'Cilegon'),
(22,'Cimahi'),
(23,'Cirebon'),
(24,'Denpasar'),
(25,'Depok'),
(26,'Dumai'),
(27,'Gorontalo'),
(28,'Gunungsitoli'),
(29,'Jakarta Barat'),
(30,'Jakarta Pusat'),
(31,'Jakarta Selatan'),
(32,'Jakarta Timur'),
(33,'Jakarta Utara'),
(34,'Jambi'),
(35,'Jayapura'),
(36,'Kediri'),
(37,'Kendari'),
(38,'Kotamobagu'),
(39,'Kupang'),
(40,'Langsa'),
(41,'Lhokseumawe'),
(42,'Lubuk Linggau'),
(43,'Madiun'),
(44,'Magelang'),
(45,'Makassar'),
(46,'Malang'),
(47,'Manado'),
(48,'Mataram'),
(49,'Medan'),
(50,'Metro'),
(51,'Mojokerto'),
(52,'Padang'),
(53,'Padang Panjang'),
(54,'Padang Sidempuan'),
(55,'Pagar Alam'),
(56,'Palangka Raya'),
(57,'Palembang'),
(58,'Palopo'),
(59,'Palu'),
(60,'Pangkal Pinang'),
(61,'Parepare'),
(62,'Pariaman'),
(63,'Pasuruan'),
(64,'Payakumbuh'),
(65,'Pekalongan'),
(66,'Pekanbaru'),
(67,'Pematang Siantar'),
(68,'Pontianak'),
(69,'Prabumulih'),
(70,'Probolinggo'),
(71,'Sabang'),
(72,'Salatiga'),
(73,'Samarinda'),
(74,'Sawah Lunto'),
(75,'Semarang'),
(76,'Serang'),
(77,'Sibolga'),
(78,'Singkawang'),
(79,'Solok'),
(80,'Sorong'),
(81,'Subulussalam'),
(82,'Sukabumi'),
(83,'Sungaipenuh'),
(84,'Surabaya'),
(85,'Surakarta (Solo)'),
(86,'Tangerang'),
(87,'Tangerang Selatan'),
(88,'Tanjung Balai'),
(89,'Tanjung Pinang'),
(90,'Tarakan'),
(91,'Tasikmalaya'),
(92,'Tebing Tinggi'),
(93,'Tegal'),
(94,'Ternate'),
(95,'Tidore Kepulauan'),
(96,'Tomohon'),
(97,'Tual'),
(98,'Yogyakarta');

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
