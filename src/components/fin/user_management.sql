-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 27, 2024 at 12:25 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `user_management`
--

-- --------------------------------------------------------

--
-- Table structure for table `availability`
--

CREATE TABLE `availability` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `room_type` varchar(100) DEFAULT NULL,
  `rooms_available` int(11) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `availability`
--

INSERT INTO `availability` (`id`, `user_id`, `room_type`, `rooms_available`, `start_date`, `end_date`, `price`) VALUES
(1, 1, 'Single Room', 1, '2024-01-19', '2024-01-20', 50.00),
(2, 1, 'Single Room', 1, '2024-01-20', '2024-01-25', 50.00),
(3, 1, 'Single Room', 1, '2024-01-20', '2024-01-25', 50.00),
(4, 1, 'Double Room', 1, '2024-01-20', '2024-01-25', 60.00),
(5, 1, 'Single Room', 1, '2024-03-26', '2024-03-28', 0.00),
(6, 1, 'Single Room', 1, '2024-03-26', '2024-03-28', 60.00);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `hotel_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `hotel_name`, `email`, `password`, `role`) VALUES
(1, 'hasib', 'hasib1@mail.com', '$2y$10$kVuoaeKWHfjM.8uyQPMcFOMAV/4fckGGor12MmNM07osZ60UKB.Bi', 'user'),
(2, 'hasib1', 'hasib2@mail.com', '$2y$10$c6ljguNa0olYeQMTx8twFOXmfGuNLn1YFcRagiNF/rJKbb/llwIFG', 'user'),
(3, 'hasib3', 'hasib2@mail.com', '$2y$10$TbXC86i2wfJcQVJB9vqQLOEEayYg4xq.gFKF7PbOA3O2AdSfJ61TO', 'user'),
(4, 'Hotel Stenden', 'user1@mail.com', '$2y$10$SK56OYenBWTSyk1/zuOhJ.tLbrk1T6EABD0gvQaF7.2MZKv37L3zO', 'user'),
(5, 'Admin', 'admin@mail.com', '$2y$10$VA1quc1u0dwfKGFueluvXOdvfJMbhhW2Vl6Cyo4jk2Obc6957fYRK', 'admin'),
(6, 'Admin 2', 'admin2@mail.com', '$2y$10$K9z7EeCdqgnDPJyen5nzp.uim45QCDggmjGuqmOVPnBNEuH4ev1Gy', 'admin'),
(7, 'user10', 'user10@mail.com', '$2y$10$i1Bkrw21i88P7HKcT2bzWeh00rBfaWgsHCTlvvQfOHUFIJ8Urltt6', 'user'),
(8, 'Testing Hotel', 'test1@gmail.com', '$2y$10$0bL4OTENxIduwwTtMfi7f.wI6i8Tp4CZZjOOxjIBU5402ohitW3c.', 'user');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `availability`
--
ALTER TABLE `availability`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `availability`
--
ALTER TABLE `availability`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `availability`
--
ALTER TABLE `availability`
  ADD CONSTRAINT `availability_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
