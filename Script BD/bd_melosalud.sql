-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.4.18-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para bd_melosalud
CREATE DATABASE IF NOT EXISTS `bd_melosalud` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `bd_melosalud`;

-- Volcando estructura para tabla bd_melosalud.datos_personal
CREATE TABLE IF NOT EXISTS `datos_personal` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cedula` int(20) NOT NULL,
  `nombre` varchar(250) NOT NULL,
  `apellidos` varchar(250) NOT NULL,
  `especialidad` varchar(250) NOT NULL,
  `fecha_inicio` varchar(250) NOT NULL,
  `fecha_fin` varchar(250) NOT NULL,
  `turno` varchar(250) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unico` (`cedula`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla bd_melosalud.datos_personal: ~14 rows (aproximadamente)
/*!40000 ALTER TABLE `datos_personal` DISABLE KEYS */;
INSERT INTO `datos_personal` (`id`, `cedula`, `nombre`, `apellidos`, `especialidad`, `fecha_inicio`, `fecha_fin`, `turno`) VALUES
	(1, 123456789, 'Pedro', 'Picapiedra Gonzales', 'Enfermería', '2021-11-02', '2021-11-07', 'Turno 3 (10:00 P.M a 6:00 A.M)'),
	(2, 6145789, 'Juanito', 'Perez Arias', 'Enfermería', '2021-11-02', '2021-11-07', 'Turno 3 (10:00 P.M a 6:00 A.M)'),
	(3, 456789, 'Pepito', 'Perez Arias', 'Psiquiatría', '2021-11-02', '2021-11-07', 'Turno 2 (2:00 P.M a 10:00 P.M)'),
	(4, 45617824, 'prueba 12355', ' fsd fdsf ', 'Pediatría', '2021-11-02', '2021-11-07', 'Turno 1 (6:00 A.M a 2:00 P.M)'),
	(5, 41741752, 'prueba 121', ' fdsfsdf fsdf', 'Pediatría', '2021-11-02', '2021-11-07', 'Turno 3 (10:00 P.M a 6:00 A.M)'),
	(6, 145226, 'arnulfio 232', 'fdssfsd', 'Psiquiatría', '2021-11-02', '2021-11-07', 'Turno 3 (10:00 P.M a 6:00 A.M)'),
	(7, 2345644, 'prueba insert', 'con login', 'Psiquiatría', '2021-11-02', '2021-11-07', 'Turno 3 (10:00 P.M a 6:00 A.M)'),
	(8, 51456156, 'prueba amdin', 'askaposka', 'Pediatría', '2021-11-02', '2021-11-07', 'Turno 1 (6:00 A.M a 2:00 P.M)'),
	(9, 1002475, 'Prueba', 'prueba dwodk', 'Pediatría', '2021-11-02', '2021-11-07', 'Turno 3 (10:00 P.M a 6:00 A.M)'),
	(10, 141727, 'Adolfo', 'Martinez', 'Enfermería', '2021-11-02', '2021-11-07', 'Turno 1 (6:00 A.M a 2:00 P.M)'),
	(11, 121312354, 'Juan', 'Perez', 'Enfermería', '2021-11-02', '2021-11-07', 'Turno 2 (2:00 P.M a 10:00 P.M)'),
	(12, 789421233, 'Morao Alberto', ' Palomino Carabalí', 'Psiquiatría', '2021-10-13', '2021-10-20', 'Turno 1 (6:00 A.M a 2:00 P.M)'),
	(13, 15246543, 'Jebús Andres', 'Poteiro Solis', 'Enfermería', '2021-10-21', '2021-10-24', 'Turno 2 (2:00 P.M a 10:00 P.M)'),
	(14, 987484, 'Andres', 'Lopez', 'Enfermería', '2021-10-14', '2021-10-16', 'Turno 2 (2:00 P.M a 10:00 P.M)');
/*!40000 ALTER TABLE `datos_personal` ENABLE KEYS */;

-- Volcando estructura para tabla bd_melosalud.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `pass` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user` (`user`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla bd_melosalud.users: ~4 rows (aproximadamente)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `user`, `name`, `pass`) VALUES
	(1, 'pedrito', 'pedro', '$2a$08$4SCKBWA5L4MB2q7sUTvrP.9/zyYqwq0fSt/ex45UKTsg4DFmS4ROy'),
	(2, '1006294451', 'Jhorman Gañan Arias', '$2a$08$1SJjXJty92XYBlUGe3VP1uHuUjCGg0zvWS1n4yku74mQzJ9tk6NBG'),
	(3, 'Arnulfio12', 'Prueba Arnulfio', '$2a$08$s.k4b7/YzopcHPNe.FKkc.nLS6bkUZ.EhadxEp/th6HCAj6CF5uNm'),
	(4, 'prueba12', 'prueba con sweetalert', '$2a$08$WVdIVVIo4YCgtb8tsEBwU.0TBcdCfD7viWteFH18cx3XTgMGW2u8u');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
