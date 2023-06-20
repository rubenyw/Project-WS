-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 20, 2023 at 03:35 PM
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
-- Table structure for table `aviation`
--

CREATE TABLE `aviation` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `iata_code` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `aviation`
--

INSERT INTO `aviation` (`id`, `nama`, `iata_code`) VALUES
(17, 'APALAPSILI', 'AAS'),
(45, 'ATAMBUA', 'ABU'),
(97, 'AEK GODANG', 'AEG'),
(121, 'ANGGI', 'AGD'),
(148, 'AMAHAI', 'AHI'),
(208, 'ASTRAKSETRA', 'AKQ'),
(250, 'MATARAM', 'AMI'),
(257, 'AMBON', 'AMQ'),
(345, 'ALOR ISLAND', 'ARD'),
(351, 'ARSO', 'ARJ'),
(437, 'ATAURO', 'AUT'),
(497, 'AYAWASI', 'AYW'),
(591, 'BANJARMASIN', 'BDJ'),
(596, 'BANDUNG', 'BDO'),
(616, 'TANJUNG REDEP', 'BEJ'),
(707, 'BIAK', 'BIK'),
(729, 'BOLAANG', 'BJG'),
(733, 'BENJINA', 'BJK'),
(745, 'BAJAWA', 'BJW'),
(763, 'BENGKULU', 'BKS'),
(813, 'BIMA', 'BMU'),
(878, 'BALIKPAPAN', 'BPN'),
(956, 'BATAM', 'BTH'),
(958, 'BANDA ACEH', 'BTJ'),
(971, 'BATU LICIN', 'BTW'),
(982, 'BOKONDINI', 'BUI'),
(994, 'BAUBAU', 'BUW'),
(1040, 'BABO', 'BXB'),
(1042, 'BADE', 'BXD'),
(1050, 'BATOM', 'BXM'),
(1055, 'BONTANG', 'BXT'),
(1074, 'BUNYU', 'BYQ'),
(1139, 'CIREBON', 'CBN'),
(1441, 'CEPU', 'CPF'),
(1593, 'CILACAP', 'CXP'),
(1748, 'JAMBI', 'DJB'),
(1751, 'JAYAPURA', 'DJJ'),
(1807, 'DOBO', 'DOB'),
(1832, 'DENPASAR', 'DPS'),
(1842, 'DABRA', 'DRH'),
(1867, 'DATADAWAI', 'DTD'),
(1885, 'DUMAI', 'DUM'),
(2023, 'ELELIM', 'ELR'),
(2048, 'ENDE', 'ENE'),
(2147, 'EWER', 'EWE'),
(2148, 'ENAROTALI', 'EWI'),
(2245, 'FAK FAK', 'FKQ'),
(2299, 'NUMFOOR', 'FOO'),
(2397, 'GAG ISLAND', 'GAV'),
(2452, 'GEBE', 'GEB'),
(2549, 'GALELA', 'GLX'),
(2574, 'GUNUNGSITOLI', 'GNS'),
(2660, 'GORONTALO', 'GTO'),
(3115, 'ILLAGA', 'ILA'),
(3169, 'INANWATAN', 'INX'),
(3245, 'ILU', 'IUL'),
(3379, 'JAKARTA', 'JKT'),
(3406, 'YOGYAKARTA', 'JOG'),
(3490, 'KAU', 'KAZ'),
(3496, 'KARUBAGA', 'KBF'),
(3510, 'KOTABARU', 'KBU'),
(3512, 'KAMBUAYA', 'KBX'),
(3518, 'KAMUR', 'KCD'),
(3522, 'KON', 'KCI'),
(3541, 'KENDARI', 'KDI'),
(3558, 'KEISAH', 'KEA'),
(3565, 'KEPI', 'KEI'),
(3573, 'KEBAR', 'KEQ'),
(3698, 'KELUANG', 'KLQ'),
(3719, 'KIMAM', 'KMM'),
(3738, 'KAIMANA', 'KNG'),
(3759, 'KOTABANGUN', 'KOD'),
(3779, 'KOKONAO', 'KOX'),
(3807, 'KERINCI', 'KRC'),
(3861, 'KETAPANG', 'KTG'),
(3915, 'KARIMUNJAWA', 'KWB'),
(3975, 'LABUHA', 'LAH'),
(4000, 'LABUAN BAJO', 'LBJ'),
(4013, 'LONG BAWAN', 'LBW'),
(4117, 'LEREH', 'LHI'),
(4132, 'MULIA', 'LII'),
(4152, 'LARANTUKA', 'LKA'),
(4180, 'KELILA', 'LLN'),
(4243, 'PRAYA', 'LOP'),
(4269, 'LONG APUNG', 'LPU'),
(4314, 'LHOKSUMAWE', 'LSW'),
(4315, 'LHOK SUKON', 'LSX'),
(4357, 'LANGGUR', 'LUV'),
(4358, 'LUWUK', 'LUW'),
(4375, 'LEWOLEBA', 'LWE'),
(4401, 'LUNYUK', 'LYK'),
(4429, 'MANGOLE', 'MAL'),
(4492, 'MANADO', 'MDC'),
(4504, 'MINDIPTANA', 'MDP'),
(4528, 'MEULABOH', 'MEQ'),
(4529, 'MEDAN', 'MES'),
(4649, 'MAMUJU', 'MJU'),
(4653, 'MANGUNJAYA', 'MJY'),
(4669, 'MERAUKE', 'MKQ'),
(4675, 'MANOKWARI', 'MKW'),
(4684, 'MALANG', 'MLG'),
(4726, 'MELANGGUANE', 'MNA'),
(4757, 'MAUMERE', 'MOF'),
(4777, 'MUKO-MUKO', 'MPC'),
(4857, 'MASALEMBO', 'MSI'),
(4904, 'MUTING', 'MUF'),
(4957, 'MATAK', 'MWK'),
(4973, 'MASAMBA', 'MXB'),
(5047, 'BANAINA', 'NAF'),
(5049, 'NAHA', 'NAH'),
(5054, 'NAMLEA', 'NAM'),
(5077, 'NABIRE', 'NBX'),
(5093, 'BANDANAIRA', 'NDA'),
(5171, 'SINAK', 'NKD'),
(5217, 'NUNUKAN', 'NNX'),
(5242, 'NANGAPINOH', 'NPO'),
(5257, 'NAMROLE', 'NRE'),
(5285, 'BINTUNI', 'NTI'),
(5294, 'NATUNA RANAI', 'NTX'),
(5360, 'OBANO', 'OBD'),
(5449, 'OKSIBIL', 'OKL'),
(5453, 'OKABA', 'OKQ'),
(5504, 'MOANAMANI', 'ONI'),
(5580, 'PITU', 'OTI'),
(5692, 'PALIBELO', 'PBW'),
(5697, 'PONDOK CABE', 'PCB'),
(5723, 'PADANG', 'PDG'),
(5727, 'PENDOPO', 'PDO'),
(5778, 'PANGKALPINANG', 'PGK'),
(5849, 'PANGKALANBUUN', 'PKN'),
(5855, 'PEKANBARU', 'PKU'),
(5858, 'PALANGKARAYA', 'PKY'),
(5870, 'PALEMBANG', 'PLM'),
(5879, 'PALU', 'PLW'),
(5916, 'PONTIANAK', 'PNK'),
(5960, 'PULAU PANJANG', 'PPJ'),
(5968, 'PASIR PANGARAYAN', 'PPR'),
(6018, 'POSO', 'PSJ'),
(6027, 'PUTUSSIBAU', 'PSU'),
(6070, 'POMALA', 'PUM'),
(6102, 'PURWOKERTO', 'PWL'),
(6252, 'RAHA', 'RAQ'),
(6303, 'MERDEY', 'RDE'),
(6351, 'RENGAT', 'RGT'),
(6391, 'ROKOT', 'RKI'),
(6392, 'SIPORA', 'RKO'),
(6493, 'RANSIKI', 'RSK'),
(6506, 'RUTENG', 'RTG'),
(6507, 'ROTI', 'RTI'),
(6518, 'YURUF', 'RUF'),
(6567, 'SANGIR', 'SAE'),
(6580, 'SAWU', 'SAU'),
(6590, 'SABANG', 'SBG'),
(6657, 'SENGGEH', 'SEH'),
(6662, 'SUNGAI PAKNING', 'SEQ'),
(6709, 'SANGGATA', 'SGQ'),
(6759, 'SINGKEP', 'SIQ'),
(6765, 'SIBISA', 'SIW'),
(6859, 'SAMPIT', 'SMQ'),
(6897, 'SOLO CITY', 'SOC'),
(6911, 'SORONG', 'SOQ'),
(6948, 'SINTANG', 'SQG'),
(6954, 'SANANA', 'SQN'),
(6957, 'SOROAKO', 'SQR'),
(6972, 'SEMARANG', 'SRG'),
(6974, 'SAMARINDA', 'SRI'),
(7038, 'SURABAYA', 'SUB'),
(7051, 'SUMENEP', 'SUP'),
(7097, 'SUMBAWA', 'SWQ'),
(7113, 'SAUMLAKI', 'SXK'),
(7159, 'SENIPAH', 'SZH'),
(7197, 'TALIABU', 'TAX'),
(7212, 'TUMBANG SAMBA', 'TBM'),
(7349, 'TEMBAGAPURA', 'TIM'),
(7363, 'TANJUNG BALAI', 'TJB'),
(7365, 'TANJUNG WARUKIN', 'TJG'),
(7371, 'TANJUNG PANDAN', 'TJQ'),
(7372, 'TANJUNG SELOR', 'TJS'),
(7381, 'BANDAR LAMPUNG', 'TKG'),
(7408, 'TOLITOLI', 'TLI'),
(7426, 'TAMBOLAKA', 'TMC'),
(7430, 'TANAHMERAH', 'TMH'),
(7446, 'TIOM', 'TMY'),
(7449, 'TANAH GROGOT', 'TNB'),
(7457, 'TANJUNG PINANG', 'TNJ'),
(7504, 'TAPAKTUAN', 'TPK'),
(7529, 'TARAKAN', 'TRK'),
(7564, 'TANJUNG SANTAN', 'TSX'),
(7565, 'TASIKMALAYA', 'TSY'),
(7571, 'TERNATE', 'TTE'),
(7581, 'TANA TORAJA', 'TTR'),
(7632, 'TEMINABUAN', 'TXM'),
(7673, 'UBRUB', 'UBR'),
(7706, 'ZUGAPA', 'UGU'),
(7774, 'BUOL', 'UOL'),
(7780, 'UJUNG PANDANG', 'UPG'),
(8044, 'WARIS', 'WAR'),
(8053, 'WAHAI', 'WBA'),
(8084, 'WAGETHE', 'WET'),
(8095, 'WAINGAPU', 'WGP'),
(8156, 'WAMENA', 'WMX'),
(8209, 'WASIOR', 'WSR'),
(9115, 'SENGGO', 'ZEG'),
(9217, 'STEENKOOL', 'ZKL'),
(9291, 'SERUI', 'ZRI'),
(9293, 'SARMI', 'ZRM');

-- --------------------------------------------------------

--
-- Table structure for table `barang`
--

CREATE TABLE `barang` (
  `id` int(11) NOT NULL,
  `id_sender` int(11) DEFAULT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `berat` int(11) DEFAULT NULL,
  `harga` int(11) DEFAULT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'PENDING',
  `id_kota_keberangkatan` int(11) NOT NULL,
  `id_kota_tujuan` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `barang`
--

INSERT INTO `barang` (`id`, `id_sender`, `nama`, `berat`, `harga`, `status`, `id_kota_keberangkatan`, `id_kota_tujuan`) VALUES
(1, 1, 'botol', 14, 5000, 'PENDING', 0, 0),
(2, 1, 'tepak', 3, 5000, 'PENDING', 0, 0),
(8, 1, 'ha', 12, 132000, 'DONE', 0, 0),
(9, 1, 'ha', 12, 132000, 'DONE', 0, 0),
(10, 1, 'ha', 12, 132000, 'DONE', 0, 0),
(11, 1, 'ha', 12, 132000, 'DONE', 0, 0),
(12, 1, 'aaa', 12, 96000, 'PENDING', 444, 256);

-- --------------------------------------------------------

--
-- Table structure for table `barangperjalanan`
--

CREATE TABLE `barangperjalanan` (
  `id` int(11) NOT NULL,
  `id_perjalanan` int(11) DEFAULT NULL,
  `id_barang` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `barangperjalanan`
--

INSERT INTO `barangperjalanan` (`id`, `id_perjalanan`, `id_barang`) VALUES
(2, 2, 8),
(3, 2, 9),
(4, 2, 10),
(5, 2, 11);

-- --------------------------------------------------------

--
-- Table structure for table `kota`
--

CREATE TABLE `kota` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `id_rajaongkir` int(11) DEFAULT NULL,
  `id_flightapi` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kota`
--

INSERT INTO `kota` (`id`, `nama`, `id_rajaongkir`, `id_flightapi`) VALUES
(1, 'AMBON', 14, 257),
(2, 'BALIKPAPAN', 19, 878),
(3, 'BANDA ACEH', 20, 958),
(4, 'BANDAR LAMPUNG', 21, 7381),
(5, 'BANDUNG', 23, 596),
(8, 'BANJARMASIN', 36, 591),
(9, 'BATAM', 48, 956),
(13, 'BENGKULU', 62, 763),
(14, 'BIMA', 69, 813),
(19, 'BONTANG', 89, 1055),
(23, 'CIREBON', 109, 1139),
(24, 'DENPASAR', 114, 1832),
(26, 'DUMAI', 120, 1885),
(27, 'GORONTALO', 130, 2660),
(28, 'GUNUNGSITOLI', 137, 2574),
(34, 'JAMBI', 156, 1748),
(35, 'JAYAPURA', 158, 1751),
(37, 'KENDARI', 182, 3541),
(46, 'MALANG', 256, 4684),
(47, 'MANADO', 267, 4492),
(48, 'MATARAM', 276, 250),
(49, 'MEDAN', 278, 4529),
(52, 'PADANG', 318, 5723),
(57, 'PALEMBANG', 327, 5870),
(59, 'PALU', 329, 5879),
(66, 'PEKANBARU', 350, 5855),
(68, 'PONTIANAK', 365, 5916),
(71, 'SABANG', 384, 6590),
(73, 'SAMARINDA', 387, 6974),
(75, 'SEMARANG', 399, 6972),
(80, 'SORONG', 425, 6911),
(84, 'SURABAYA', 444, 7038),
(88, 'TANJUNG BALAI', 459, 7363),
(89, 'TANJUNG PINANG', 462, 7457),
(90, 'TARAKAN', 467, 7529),
(91, 'TASIKMALAYA', 469, 7565),
(94, 'TERNATE', 477, 7571),
(98, 'YOGYAKARTA', 501, 3406);

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
  `id_traveller` int(11) DEFAULT NULL,
  `id_kota_keberangkatan` int(11) DEFAULT NULL,
  `id_kota_tujuan` int(11) DEFAULT NULL,
  `durasi` int(11) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `waktu_keberangkatan` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `perjalanan`
--

INSERT INTO `perjalanan` (`id`, `id_traveller`, `id_kota_keberangkatan`, `id_kota_tujuan`, `durasi`, `status`, `waktu_keberangkatan`) VALUES
(1, 4, 444, 51, NULL, 'PENDING', '2023-06-20 13:34:43'),
(2, 4, 444, 51, NULL, 'DONE', '2023-06-20 13:34:43'),
(3, 4, 444, 51, NULL, 'PENDING', '2023-06-20 13:34:43'),
(4, 4, 444, 51, NULL, 'PENDING', '2023-06-20 13:34:43'),
(5, 4, 444, 51, NULL, 'PENDING', '2023-06-20 13:34:43'),
(6, 4, 84, 24, NULL, 'ONGOING', '2023-06-20 13:34:43'),
(7, 4, 84, 24, NULL, 'ONGOING', '2023-06-20 13:34:43'),
(8, 4, 84, 24, NULL, 'ONGOING', '2023-06-20 13:34:43'),
(9, 4, 84, 24, 115, 'ONGOING', '2023-06-20 13:34:43'),
(10, 4, 84, 24, 2147483647, 'ONGOING', '2023-06-20 13:34:43'),
(11, 4, 84, 24, 115, 'ONGOING', '2023-06-20 13:34:43');

-- --------------------------------------------------------

--
-- Table structure for table `rajaongkir`
--

CREATE TABLE `rajaongkir` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `rajaongkir`
--

INSERT INTO `rajaongkir` (`id`, `nama`) VALUES
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
(4, 'rubenyw', '12345', 'rubenyasonwinarta@gmail.com', '08111111111', 'FlKZoqcmWL', 0, 'Traveller', 780000);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `aviation`
--
ALTER TABLE `aviation`
  ADD PRIMARY KEY (`id`);

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
-- Indexes for table `rajaongkir`
--
ALTER TABLE `rajaongkir`
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `barangperjalanan`
--
ALTER TABLE `barangperjalanan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `kota`
--
ALTER TABLE `kota`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=600;

--
-- AUTO_INCREMENT for table `perjalanan`
--
ALTER TABLE `perjalanan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

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
