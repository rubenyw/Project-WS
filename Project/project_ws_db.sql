-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 23, 2023 at 05:26 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project_ws`
--

-- --------------------------------------------------------

--
-- Table structure for table `barang`
--

CREATE TABLE `barang` (
  `id` int(11) NOT NULL,
  `id_sender` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `berat` int(11) NOT NULL,
  `harga` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `barangperjalanan`
--

CREATE TABLE `barangperjalanan` (
  `id` int(11) NOT NULL,
  `id_perjalanan` int(11) NOT NULL,
  `id_barang` int(11) NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `kota`
--

CREATE TABLE `kota` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kota`
--

INSERT INTO `kota` (`id`, `nama`) VALUES
(14, 'AMBON'),
(19, 'BALIKPAPAN'),
(20, 'BANDA ACEH'),
(21, 'BANDAR LAMPUNG'),
(23, 'BANDUNG'),
(34, 'BANJAR'),
(35, 'BANJARBARU'),
(36, 'BANJARMASIN'),
(48, 'BATAM'),
(51, 'BATU'),
(53, 'BAU-BAU'),
(55, 'BEKASI'),
(62, 'BENGKULU'),
(69, 'BIMA'),
(70, 'BINJAI'),
(73, 'BITUNG'),
(75, 'BLITAR'),
(79, 'BOGOR'),
(89, 'BONTANG'),
(93, 'BUKITTINGGI'),
(106, 'CILEGON'),
(107, 'CIMAHI'),
(109, 'CIREBON'),
(114, 'DENPASAR'),
(115, 'DEPOK'),
(120, 'DUMAI'),
(130, 'GORONTALO'),
(137, 'GUNUNGSITOLI'),
(151, 'JAKARTA BARAT'),
(152, 'JAKARTA PUSAT'),
(153, 'JAKARTA SELATAN'),
(154, 'JAKARTA TIMUR'),
(155, 'JAKARTA UTARA'),
(156, 'JAMBI'),
(158, 'JAYAPURA'),
(179, 'KEDIRI'),
(182, 'KENDARI'),
(204, 'KOTAMOBAGU'),
(213, 'KUPANG'),
(230, 'LANGSA'),
(235, 'LHOKSEUMAWE'),
(242, 'LUBUK LINGGAU'),
(248, 'MADIUN'),
(250, 'MAGELANG'),
(254, 'MAKASSAR'),
(256, 'MALANG'),
(267, 'MANADO'),
(276, 'MATARAM'),
(278, 'MEDAN'),
(283, 'METRO'),
(290, 'MOJOKERTO'),
(318, 'PADANG'),
(321, 'PADANG PANJANG'),
(323, 'PADANG SIDEMPUAN'),
(324, 'PAGAR ALAM'),
(326, 'PALANGKA RAYA'),
(327, 'PALEMBANG'),
(328, 'PALOPO'),
(329, 'PALU'),
(334, 'PANGKAL PINANG'),
(336, 'PAREPARE'),
(337, 'PARIAMAN'),
(343, 'PASURUAN'),
(345, 'PAYAKUMBUH'),
(349, 'PEKALONGAN'),
(350, 'PEKANBARU'),
(353, 'PEMATANG SIANTAR'),
(365, 'PONTIANAK'),
(367, 'PRABUMULIH'),
(370, 'PROBOLINGGO'),
(384, 'SABANG'),
(386, 'SALATIGA'),
(387, 'SAMARINDA'),
(394, 'SAWAH LUNTO'),
(399, 'SEMARANG'),
(403, 'SERANG'),
(407, 'SIBOLGA'),
(415, 'SINGKAWANG'),
(421, 'SOLOK'),
(425, 'SORONG'),
(429, 'SUBULUSSALAM'),
(431, 'SUKABUMI'),
(442, 'SUNGAIPENUH'),
(444, 'SURABAYA'),
(445, 'SURAKARTA (SOLO)'),
(456, 'TANGERANG'),
(457, 'TANGERANG SELATAN'),
(459, 'TANJUNG BALAI'),
(462, 'TANJUNG PINANG'),
(467, 'TARAKAN'),
(469, 'TASIKMALAYA'),
(470, 'TEBING TINGGI'),
(473, 'TEGAL'),
(477, 'TERNATE'),
(478, 'TIDORE KEPULAUAN'),
(485, 'TOMOHON'),
(488, 'TUAL'),
(501, 'YOGYAKARTA');

-- --------------------------------------------------------

--
-- Table structure for table `ktp`
--

CREATE TABLE `ktp` (
  `id_user` int(11) NOT NULL,
  `foto_ktp` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `perjalanan`
--

CREATE TABLE `perjalanan` (
  `id` int(11) NOT NULL,
  `id_traveller` int(11) NOT NULL,
  `id_kota_keberangkatan` int(11) NOT NULL,
  `id_kota_tujuan` int(11) NOT NULL,
  `durasi` int(11) NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `rating`
--

CREATE TABLE `rating` (
  `id` int(11) NOT NULL,
  `id_sender` int(11) NOT NULL,
  `id_traveller` int(11) NOT NULL,
  `rate` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `no_hp` varchar(20) NOT NULL,
  `api_key` varchar(255) NOT NULL,
  `api_hit` int(11) NOT NULL,
  `role` varchar(255) NOT NULL,
  `saldo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `email`, `no_hp`, `api_key`, `api_hit`, `role`, `saldo`) VALUES
(1, 'test1', '12345678', 'test1@gmail.com', '0123456789', 'gSkyFoaX2X', 9310, 'Sender', 0),
(2, 'test1', '12345678', 'test1@gmail.com', '0123456789', 'aw5w1QD044', 0, 'Sender', 0),
(3, 'test1', '12345678', 'test1@gmail.com', '0123456789', 'o5yY2FOrt8', 0, 'Sender', 0),
(4, 'rubenyw', '12345', 'rubenyasonwinarta@gmail.com', '08111111111', 'FlKZoqcmWL', 0, 'Traveller', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `barang`
--
ALTER TABLE `barang`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `barangperjalanan`
--
ALTER TABLE `barangperjalanan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `kota`
--
ALTER TABLE `kota`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ktp`
--
ALTER TABLE `ktp`
  ADD PRIMARY KEY (`id_user`),
  ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `perjalanan`
--
ALTER TABLE `perjalanan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rating`
--
ALTER TABLE `rating`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_sender` (`id_sender`),
  ADD KEY `id_traveller` (`id_traveller`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `barang`
--
ALTER TABLE `barang`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `barangperjalanan`
--
ALTER TABLE `barangperjalanan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `kota`
--
ALTER TABLE `kota`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=600;

--
-- AUTO_INCREMENT for table `rating`
--
ALTER TABLE `rating`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `ktp`
--
ALTER TABLE `ktp`
  ADD CONSTRAINT `ktp_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`);

--
-- Constraints for table `rating`
--
ALTER TABLE `rating`
  ADD CONSTRAINT `rating_ibfk_1` FOREIGN KEY (`id_sender`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `rating_ibfk_2` FOREIGN KEY (`id_traveller`) REFERENCES `user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
