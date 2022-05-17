-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 20, 2021 at 10:48 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.4.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `upwork`
--

-- --------------------------------------------------------

--
-- Table structure for table `addjob`
--

CREATE TABLE `addjob` (
  `name` varchar(25) NOT NULL,
  `dis` varchar(255) NOT NULL,
  `qualification` varchar(25) NOT NULL,
  `mailid` varchar(20) NOT NULL,
  `mobile` varchar(20) NOT NULL,
  `slno` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `addjob`
--

INSERT INTO `addjob` (`name`, `dis`, `qualification`, `mailid`, `mobile`, `slno`) VALUES
('coading', 'need programmer for Python', 'diploma', 'zion2@gmail.com', '8606414384', 1),
('wed developer', 'need webdevloper in nodejs', 'diploma', 'zion2@gmail.com', '8606414384', 2),
('network admin', 'need network administrator', 'diploma', 'zion2@gmail.com', '8606414384', 3),
('network admin', 'need network administrator', 'diploma', 'zion2@gmail.com', '8606414384', 4),
('network admin', 'need network administrator', 'diploma', 'zion2@gmail.com', '8606414384', 5),
('network admin', 'need network administrator', 'diploma', 'zion2@gmail.com', '8606414384', 6),
('network admin', 'need network administrator', 'diploma', 'zion2@gmail.com', '8606414384', 7),
('network admin', 'need network administrator', 'diploma', 'zion2@gmail.com', '8606414384', 8),
('network admin', 'need network administrator', 'diploma', 'zion2@gmail.com', '8606414384', 9),
('network admin', 'need network administrator', 'diploma', 'zion2@gmail.com', '8606414384', 10);

-- --------------------------------------------------------

--
-- Table structure for table `applayjob`
--

CREATE TABLE `applayjob` (
  `name` varchar(20) NOT NULL,
  `email` varchar(100) NOT NULL,
  `cemail` varchar(50) NOT NULL,
  `slno` int(20) NOT NULL,
  `status` varchar(20) NOT NULL DEFAULT 'requested'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `applayjob`
--

INSERT INTO `applayjob` (`name`, `email`, `cemail`, `slno`, `status`) VALUES
('anaz', 'anazksunil2@gmail.com', 'zion2@gmail.com', 5, 'aproved'),
('anaz', 'anazksunil2@gmail.com', 'zion2@gmail.com', 6, 'aproved'),
('anaz k sunil', 'anazksunil2@gmail.com', 'zion2@gmail.com', 7, 'aproved'),
('anaz zana', 'anazksunil2@gmail.com', 'zion2@gmail.com', 8, 'aproved'),
('anaz zana', 'anazksunil2@gmail.com', 'zion2@gmail.com', 9, 'aproved');

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `name` varchar(20) NOT NULL,
  `email` varchar(20) NOT NULL,
  `mobile` varchar(20) NOT NULL,
  `img` varchar(255) NOT NULL,
  `section` varchar(30) NOT NULL,
  `password` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`name`, `email`, `mobile`, `img`, `section`, `password`) VALUES
('zionIT', 'zion2@gmail.com', '8606414384', 'download.jpg', 'IT', '1234');

-- --------------------------------------------------------

--
-- Table structure for table `myworks`
--

CREATE TABLE `myworks` (
  `name` varchar(20) NOT NULL,
  `email` varchar(200) NOT NULL,
  `file` varchar(255) NOT NULL,
  `dis` varchar(255) NOT NULL,
  `id` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `myworks`
--

INSERT INTO `myworks` (`name`, `email`, `file`, `dis`, `id`) VALUES
('coading ', 'anazksunil2@gmail.com', 'FEB-converted.pdf', 'nice one', 5),
('website', 'anazksunil2@gmail.com', 'updatepro.html', 'website building ', 6),
('LOGIN REG COADING', 'anazksunil2@gmail.com', '1613747667302_DATA STRUCTURE AMAL-converted.pdf', 'FREE dwonlrd', 7),
('LOGIN REG COADING', 'anazksunil2@gmail.com', '1613747667302_DATA STRUCTURE AMAL-converted.pdf', 'FREE dwonlrd', 8),
('css', 'anazksunil2@gmail.com', 'github-recovery-codes.txt', 'nice coading', 9),
('css', 'anazksunil2@gmail.com', 'github-recovery-codes.txt', 'nice coading', 10);

-- --------------------------------------------------------

--
-- Table structure for table `pay`
--

CREATE TABLE `pay` (
  `amt` int(30) NOT NULL,
  `date` date NOT NULL,
  `cemail` varchar(40) NOT NULL,
  `mail` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pay`
--

INSERT INTO `pay` (`amt`, `date`, `cemail`, `mail`) VALUES
(1000, '2021-03-13', 'zion2@gmail.com', 'anazksunil2@gmail.com'),
(100, '2021-03-13', 'zion2@gmail.com', 'anazksunil2@gmail.com'),
(1500, '2021-03-13', 'zion2@gmail.com', 'anazksunil2@gmail.com'),
(1500, '2021-03-13', 'zion2@gmail.com', 'anazksunil2@gmail.com'),
(1000, '2021-03-20', 'zion2@gmail.com', 'anazksunil2@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `name` varchar(25) NOT NULL,
  `email` varchar(30) NOT NULL,
  `mobile` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `img` varchar(255) NOT NULL,
  `profession` varchar(20) NOT NULL,
  `education` varchar(255) NOT NULL,
  `strength` varchar(30) NOT NULL,
  `dis` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`name`, `email`, `mobile`, `password`, `img`, `profession`, `education`, `strength`, `dis`) VALUES
('anaz k sunil', 'anazksunil2@gmail.com', '8606414384', '123', 'xx6j6G9R_400x400.jpg', 'computer science', 'Diploma computer science', 'coading', 'can do any type of languges used in program in a short time');

-- --------------------------------------------------------

--
-- Table structure for table `works`
--

CREATE TABLE `works` (
  `file` varchar(255) NOT NULL,
  `dis` varchar(255) NOT NULL,
  `cemail` varchar(255) NOT NULL,
  `mail` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `works`
--

INSERT INTO `works` (`file`, `dis`, `cemail`, `mail`) VALUES
('1613747667302_DATA STRUCTURE AMAL (1).pptx', 'good one', 'zion2@gmail.com', 'anazksunil@2gmail.com'),
('1613747667302_DATA STRUCTURE AMAL (1).pptx', 'good one', 'zion2@gmail.com', 'anazksunil@2gmail.com'),
('MASK DETECTION-converted.pdf', 'good one', 'zion2@gmail.com', 'anazksunil@2gmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `addjob`
--
ALTER TABLE `addjob`
  ADD PRIMARY KEY (`slno`);

--
-- Indexes for table `applayjob`
--
ALTER TABLE `applayjob`
  ADD PRIMARY KEY (`slno`);

--
-- Indexes for table `myworks`
--
ALTER TABLE `myworks`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `addjob`
--
ALTER TABLE `addjob`
  MODIFY `slno` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `applayjob`
--
ALTER TABLE `applayjob`
  MODIFY `slno` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `myworks`
--
ALTER TABLE `myworks`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
