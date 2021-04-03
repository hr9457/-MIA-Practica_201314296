USE practica1; 
-- SELECT * FROM Temporal;

/* consulta para agregar las ubicaciones de los hospitales */
INSERT INTO ubicacion_hospital (nombre_ubicacion_hospital)
SELECT DISTINCT Temporal.direccion_hospital 
FROM Temporal
WHERE direccion_hospital IS NOT NULL AND direccion_hospital != '';

-- total 56
-- SELECT * FROM ubicacion_hospital; 


/* consulta para agregar todos los tipos de tratamientos */
insert into tipo_tratamiento(nombre_tratamiento,efectividad_tratamiento)
select distinct Temporal.tratamiento, Temporal.efectividad
from Temporal
where tratamiento is not null and tratamiento != '';

-- total 5
-- select * from tipo_tratamiento


/* consulta para pacientes */
insert into paciente(nombre_paciente,apellido_paciente,direccion_paciente,fecha_muerte,estado_paciente)
select distinct Temporal.nombre_paciente, Temporal.apellido_paciente, Temporal.direccion_paciente, Temporal.fecha_muerte, Temporal.estado_paciente
from Temporal
where nombre_paciente != '' and apellido_paciente != '' and direccion_paciente != '';

-- total 1000
-- select * from paciente



/*  insertar los conocidos en la base de datos */
insert into conocido (nombre_conocido,apellido_conocido)
select distinct Temporal.nombre_asociado, Temporal.apellido_asociado
from Temporal
where nombre_asociado != '' and apellido_asociado != '';

-- total 500
-- select * from conocido 




/* filtro para insertar los pacientes con sus tratamientos  */
insert into tratamiento_paciente(efectividad, inicio_tratamiento, fin_tratamiento, id_paciente, id_tipo_tratamiento)
SELECT DISTINCT Temporal.efectividad_en_paciente, Temporal.fecha_inicio_tratamiento, Temporal.fecha_fin_tratamiento, paciente.id_paciente, tipo_tratamiento.id_tipo_tratamiento  
FROM Temporal
INNER JOIN paciente ON Temporal.direccion_paciente = paciente.direccion_paciente AND Temporal.nombre_paciente = paciente.nombre_paciente AND Temporal.apellido_paciente = paciente.apellido_paciente
INNER JOIN tipo_tratamiento ON Temporal.tratamiento = tipo_tratamiento.nombre_tratamiento;

-- total 567
-- select * from tratamiento_paciente





/* filtro para gregar todoso los hospitales a al base de datos */
insert into hospital(nombre_hospital, id_ubicacion_hospital)
select distinct Temporal.nombre_hospital, ubicacion_hospital.id_ubicacion_hospital
from Temporal
inner join ubicacion_hospital on Temporal.direccion_hospital = ubicacion_hospital.nombre_ubicacion_hospital;

-- total 80
-- select * from hospital 



/* filtro para agregar todos lo tipo de estados existentes en los pacintes  */
insert into estado_paciente(nombre_estado)
select distinct Temporal.estado_paciente 
from Temporal
where Temporal.estado_paciente != '' and Temporal.estado_paciente is not null;

-- total 14
-- select * from estado_paciente




/*   filtro par el registro de pacientes en hospitales    */
insert into registro_hospital(fecha_registro,fecha_confirmacion,fecha_muerte,id_hospital,id_paciente,id_estado_paciente)
select distinct Temporal.fecha_primera_sospecha AS fechaRegistro, Temporal.fecha_confirmacion AS fechaConfirmacion, Temporal.fecha_muerte AS fechaMuerte,
PRUEBA.idH AS idHospitalAg, paciente.id_paciente AS idVictimaAg,
estado_paciente.id_estado_paciente
FROM Temporal
INNER JOIN paciente ON paciente.nombre_paciente = Temporal.nombre_paciente AND paciente.apellido_paciente = Temporal.apellido_paciente
inner join estado_paciente on estado_paciente.nombre_estado = Temporal.estado_paciente
INNER JOIN (
SELECT hospital.id_hospital AS idH, ubicacion_hospital.id_ubicacion_hospital AS idUbi, ubicacion_hospital.nombre_ubicacion_hospital AS ubi, hospital.nombre_hospital AS nomH 
FROM hospital
INNER JOIN ubicacion_hospital ON hospital.id_ubicacion_hospital = ubicacion_hospital.id_ubicacion_hospital
)PRUEBA ON Temporal.nombre_hospital = nomH AND Temporal.direccion_hospital = ubi;


-- total 341
-- select * from registro_hospital



/*  ubicaciones de los pacientes  */
insert into ubicacion (direccion_ubicacion,hora_llegada,hora_salida,id_registro_hospital)
select distinct Temporal.ubicacion_paciente,Temporal.fecha_llegada, Temporal.fecha_retiro, PRUEBA.idRegistro
from Temporal
inner join(
select registro_hospital.id_registro_hospital as idRegistro , paciente.nombre_paciente as nombreP, paciente.apellido_paciente as apellidoP, paciente.direccion_paciente as direccionP
from registro_hospital
inner join paciente on paciente.id_paciente = registro_hospital.id_paciente
)PRUEBA where Temporal.nombre_paciente = PRUEBA.nombreP and Temporal.apellido_paciente = PRUEBA.apellidoP and Temporal.direccion_paciente = PRUEBA.direccionP and Temporal.ubicacion_paciente != ''


-- total 318 
-- select * from ubicacion


/*   tabla pare registar personas con conocidos   */
insert into encuentro(id_conocido,id_paciente)
select conocido.id_conocido, PACIENTE.id_paciente
from conocido
inner join(
select paciente.id_paciente as id_Paciente, paciente.nombre_paciente as name_paciente,CONOCIDO.nameA as nAsociado, CONOCIDO.lastA as lAsociado
from paciente
inner join(
select distinct Temporal.nombre_paciente as nameP, Temporal.apellido_paciente as lastP, 
Temporal.nombre_asociado as nameA, Temporal.apellido_asociado as lastA, Temporal.fecha_conocido as fecha
from Temporal
where Temporal.nombre_paciente != "" and Temporal.nombre_asociado != ""
) CONOCIDO on paciente.nombre_paciente = CONOCIDO.nameP and paciente.apellido_paciente = CONOCIDO.lastP
) PACIENTE on conocido.nombre_conocido = PACIENTE.nAsociado and conocido.apellido_conocido = PACIENTE.lAsociado;

-- total 4525
-- select * from encuentro




/*   registrar los detalles del encuentro    */
insert into detalle_contacto(tipo_encuentro, fecha_encuentro, inicio_encuentro, fin_encuentro, id_encuentro)
select distinct Temporal.contacto_fisico, Temporal.fecha_conocido, Temporal.fecha_inicio_contacto, Temporal.fecha_fin_encuentro, ENCUENTRO.idEncuentro
from Temporal
inner join(
select encuentro.id_encuentro as idEncuentro,  
paciente.nombre_paciente as nombrePaciente, paciente.apellido_paciente as apellidoPaciente, paciente.direccion_paciente as direccionPaciente, 
conocido.nombre_conocido as nombreConocido, conocido.apellido_conocido as apellidoConocido 
from encuentro
inner join paciente on encuentro.id_paciente = paciente.id_paciente
inner join conocido on encuentro.id_conocido = conocido.id_conocido
)ENCUENTRO on Temporal.nombre_paciente = ENCUENTRO.nombrePaciente and Temporal.apellido_paciente = ENCUENTRO.apellidoPaciente
and Temporal.nombre_asociado = ENCUENTRO.nombreConocido and Temporal.apellido_asociado = ENCUENTRO.apellidoConocido 
and Temporal.contacto_fisico != "";



-- total 7335
-- select * from detalle_contacto
