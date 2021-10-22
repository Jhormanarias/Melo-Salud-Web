-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-10-2021 a las 08:40:59
-- Versión del servidor: 10.4.18-MariaDB
-- Versión de PHP: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_melosalud`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `datos_personal`
--

CREATE TABLE `datos_personal` (
  `id` int(11) NOT NULL,
  `cedula` int(20) NOT NULL,
  `nombre` varchar(250) NOT NULL,
  `apellidos` varchar(250) NOT NULL,
  `especialidad` varchar(250) NOT NULL,
  `fecha_inicio` varchar(250) NOT NULL,
  `fecha_fin` varchar(250) NOT NULL,
  `turno` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `datos_personal`
--

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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `user` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `pass` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `user`, `name`, `pass`) VALUES
(1, 'pedrito', 'pedro', '$2a$08$4SCKBWA5L4MB2q7sUTvrP.9/zyYqwq0fSt/ex45UKTsg4DFmS4ROy'),
(2, '1006294451', 'Jhorman Gañan Arias', '$2a$08$1SJjXJty92XYBlUGe3VP1uHuUjCGg0zvWS1n4yku74mQzJ9tk6NBG'),
(3, 'Arnulfio12', 'Prueba Arnulfio', '$2a$08$s.k4b7/YzopcHPNe.FKkc.nLS6bkUZ.EhadxEp/th6HCAj6CF5uNm'),
(4, 'prueba12', 'prueba con sweetalert', '$2a$08$WVdIVVIo4YCgtb8tsEBwU.0TBcdCfD7viWteFH18cx3XTgMGW2u8u');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `datos_personal`
--
ALTER TABLE `datos_personal`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unico` (`cedula`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user` (`user`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `datos_personal`
--
ALTER TABLE `datos_personal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
