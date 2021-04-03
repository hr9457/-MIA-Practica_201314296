-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'soraz9457'; flush privileges;

/* eliminaciond de la base datos si existiera para cambios */
DROP DATABASE IF EXISTS practica1;

/* creacion de la base de datos */
CREATE DATABASE practica1;

/* uso del base de datos de practica 1*/ 
USE practica1;


/* tabla para registro de ubicaciones de hospitales */  
CREATE TABLE ubicacion_hospital(
	id_ubicacion_hospital INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre_ubicacion_hospital VARCHAR(75) NOT NULL
);


/* tabla para registro de todos los hospitales */
CREATE TABLE hospital(
	id_hospital INT NOT NULL AUTO_INCREMENT,
    nombre_hospital VARCHAR(75) NOT NULL,
    id_ubicacion_hospital INT NOT NULL,
    PRIMARY KEY(id_hospital,id_ubicacion_hospital),
    FOREIGN KEY(id_ubicacion_hospital) REFERENCES ubicacion_hospital(id_ubicacion_hospital)
);


/* tabla para los tipos de estados en pacientes */
CREATE TABLE estado_paciente(
	id_estado_paciente INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre_estado VARCHAR(75)
);


/* tabla para registro de pacientes */
CREATE TABLE paciente(
	id_paciente INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre_paciente VARCHAR(75) NOT NULL,
    apellido_paciente VARCHAR(75) NOT NULL,
    direccion_paciente VARCHAR(75) NOT NULL,
    fecha_muerte DATETIME NULL,
    estado_paciente VARCHAR(75) NOT NULL
); 


/* tabla para registro de los tipos de tratamientos */
CREATE TABLE tipo_tratamiento(
	id_tipo_tratamiento INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre_tratamiento VARCHAR(75),
    efectividad_tratamiento INT
); 


/* tabla para registro de los tratamientos que aplica un paciente */
CREATE TABLE tratamiento_paciente(
	id_tratamiento_paciente INT NOT NULL AUTO_INCREMENT,
    efectividad INT NOT NULL,
    inicio_tratamiento DATETIME NOT NULL,
    fin_tratamiento DATETIME NOT NULL,
    id_paciente INT NOT NULL,
    id_tipo_tratamiento INT NOT NULL,
    PRIMARY KEY(id_tratamiento_paciente,id_paciente,id_tipo_tratamiento),
    FOREIGN KEY(id_paciente) REFERENCES paciente(id_paciente),
    FOREIGN KEY(id_tipo_tratamiento) REFERENCES tipo_tratamiento(id_tipo_tratamiento)
);


/* tabla para registro en el hospital de un paciente */
CREATE TABLE registro_hospital(
	id_registro_hospital INT NOT NULL AUTO_INCREMENT,
    fecha_registro DATETIME NOT NULL,
    fecha_confirmacion DATETIME NOT NULL,
    fecha_muerte DATETIME NULL,
    id_hospital INT NOT NULL,
    id_paciente INT NOT NULL,
    id_estado_paciente INT NOT NULL,
    PRIMARY KEY(id_registro_hospital,id_hospital,id_paciente,id_estado_paciente),
    FOREIGN KEY(id_hospital) REFERENCES hospital(id_hospital),
    FOREIGN KEY(id_paciente) REFERENCES paciente(id_paciente),
    FOREIGN KEY(id_estado_paciente) REFERENCES estado_paciente(id_estado_paciente)
);


/* tabla para registro de las ubicaciones de un paciente para el hospital */
CREATE TABLE ubicacion(
	id_ubicacion INT NOT NULL AUTO_INCREMENT,
    direccion_ubicacion VARCHAR(75) NOT NULL,
    hora_llegada DATETIME NOT NULL,
    hora_salida DATETIME NOT NULL,
    id_registro_hospital INT NOT NULL,
    PRIMARY KEY(id_ubicacion,id_registro_hospital),
    FOREIGN KEY(id_registro_hospital) REFERENCES registro_hospital(id_registro_hospital)
);



/* tabla para registro de los conocidos de un paciente */
CREATE TABLE conocido(
	id_conocido INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre_conocido VARCHAR(75) NOT NULL,
    apellido_conocido VARCHAR(75) NOT NULL
);


/* tabla de registro para todos los encuentro de los pacientes con conocidos */
CREATE TABLE encuentro(
	id_encuentro INT NOT NULL AUTO_INCREMENT,    
    id_conocido INT NOT NULL,
    id_paciente INT NOT NULL,
    PRIMARY KEY(id_encuentro,id_conocido,id_paciente),
    FOREIGN KEY(id_conocido) REFERENCES conocido(id_conocido),
    FOREIGN KEY(id_paciente) REFERENCES paciente(id_paciente)
);

/* detalle de los contacto que hubo en un encuentro */
CREATE TABLE detalle_contacto(
	id_detalle_encuentro INT NOT NULL AUTO_INCREMENT,
    tipo_encuentro VARCHAR(75),
    fecha_encuentro DATETIME NOT NULL,
    inicio_encuentro DATETIME NOT NULL,
    fin_encuentro DATETIME NOT NULL,
    id_encuentro INT NOT NULL,
    PRIMARY KEY(id_detalle_encuentro,id_encuentro),
    FOREIGN KEY(id_encuentro) REFERENCES encuentro(id_encuentro)
);




















