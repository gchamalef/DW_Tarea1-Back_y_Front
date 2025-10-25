# DW_Tarea1-Back_y_Front
## Schema y Tablas
```sql
CREATE DATABASE  IF NOT EXISTS `universidad`;
USE `universidad`;

DROP TABLE IF EXISTS `estudiantes`;

CREATE TABLE `estudiantes` (
  `id_estudiante` int NOT NULL AUTO_INCREMENT,
  `carne` char(4) NOT NULL,
  `nombres` varchar(100) NOT NULL,
  `apellidos` varchar(100) NOT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `correo_electronico` varchar(120) DEFAULT NULL,
  `id_tipo_sangre` int NOT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  PRIMARY KEY (`id_estudiante`),
  UNIQUE KEY `carne` (`carne`),
  KEY `fk_tipo_sangre` (`id_tipo_sangre`),
  CONSTRAINT `fk_tipo_sangre` FOREIGN KEY (`id_tipo_sangre`) REFERENCES `tipos_sangre` (`id_tipo_sangre`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `tipos_sangre`;

CREATE TABLE `tipos_sangre` (
  `id_tipo_sangre` int NOT NULL AUTO_INCREMENT,
  `sangre` varchar(3) NOT NULL,
  PRIMARY KEY (`id_tipo_sangre`),
  UNIQUE KEY `sangre` (`sangre`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```
