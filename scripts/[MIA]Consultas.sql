/***********************************************************************************************************************************************************/
/* mostrar nombre del hospital, direccion y el numero de fallecidos por cada hospital */
/*  consulta 1 */
SELECT hospital.nombre_hospital AS hospital , ubicacion_hospital.nombre_ubicacion_hospital AS ubicacion, COUNT(registro_hospital.fecha_muerte) AS fallecidos
FROM hospital 
INNER JOIN ubicacion_hospital ON hospital.id_ubicacion_hospital = ubicacion_hospital.id_ubicacion_hospital
INNER JOIN registro_hospital ON hospital.id_hospital = registro_hospital.id_hospital
GROUP BY hospital,ubicacion;




/* consulta 2   mostrar el nombre,apellido de todos los pacientes en cuarentena que presentaron una efectividad
mayor a 5 en el tratamiento "Transfusiones de sangre" */
select paciente.nombre_paciente as nombre, paciente.apellido_paciente as apellido, 
tratamiento_paciente.efectividad as efectividad,
tipo_tratamiento.nombre_tratamiento
from paciente
inner join registro_hospital on paciente.id_paciente = registro_hospital.id_paciente
inner join estado_paciente on registro_hospital.id_estado_paciente = estado_paciente.id_estado_paciente and estado_paciente.nombre_estado like '%En cuarentena%'
inner join tratamiento_paciente on paciente.id_paciente = tratamiento_paciente.id_paciente and tratamiento_paciente.efectividad > 5
inner join tipo_tratamiento on tratamiento_paciente.id_tipo_tratamiento = tipo_tratamiento.id_tipo_tratamiento and tipo_tratamiento.nombre_tratamiento like '%Transfusiones de sangre%'



/*consulta tres */
/* mostar nombre, apellido, direccion de victimas falleciddas con mas de tres personas asociadas */
select MUERTOS.nombre, MUERTOS.apellido, MUERTOS.direccion, MUERTOS.conocidos
FROM(
select paciente.id_paciente, 
paciente.nombre_paciente as nombre, 
paciente.apellido_paciente as apellido,
paciente.direccion_paciente as direccion,
paciente.fecha_muerte, 
count(encuentro.id_paciente) as conocidos 
from paciente
inner join encuentro on paciente.id_paciente = encuentro.id_paciente
where paciente.fecha_muerte is not null
group by paciente.id_paciente
)MUERTOS where MUERTOS.conocidos > 3;


/* consulta 4  nombre, apellido victimas en estado sospecha contacto tipo beso - total 5     */
select 
PACIENTE.nombre_paciente as nombre,
PACIENTE.apellido_paciente as apellido
from encuentro
inner join(
	select 
    paciente.id_paciente as id_paciente,
	paciente.nombre_paciente as nombre_paciente,
	paciente.apellido_paciente as apellido_paciente
	from paciente
	where paciente.estado_paciente like '%sospecha%'
)PACIENTE on encuentro.id_paciente = PACIENTE.id_paciente
inner join detalle_contacto on detalle_contacto.id_encuentro = encuentro.id_encuentro and detalle_contacto.tipo_encuentro like '%beso%'
group by nombre, apellido
having count(encuentro.id_conocido) > 2


/* consulta 5  top 5 de victimas que mas tratamientos se han aplicado del trtameitno oxigeno */
select 
nombre_paciente, 
apellido_paciente, 
COUNT(TRATAMIENTO.nombreTratamiento) as cantidad_tratamiento
from paciente
inner join(
select
tipo_tratamiento.id_tipo_tratamiento as tipoTratamiento, 
tipo_tratamiento.nombre_tratamiento as nombreTratamiento, 
tratamiento_paciente.id_paciente as id
from tipo_tratamiento
inner join tratamiento_paciente on tipo_tratamiento.id_tipo_tratamiento = tratamiento_paciente.id_tipo_tratamiento and tipo_tratamiento.nombre_tratamiento like '%oxigeno%'
) TRATAMIENTO on paciente.id_paciente = TRATAMIENTO.id
group by id_paciente, nombre_paciente, apellido_paciente limit 5;




/*  CONSULTA 6 mostar el nombre, apellido y fecha de facellimiento de todas la victimas 
que se movieron por la direccion 1987 Delphine Well y se le aplico manejo de precion arterial
*/
select
ubicacion.direccion_ubicacion as ubicacion,
REGISTRO_HOSPITAL.id_paciente,
REGISTRO_HOSPITAL.nombre_paciente,
REGISTRO_HOSPITAL.apellido_paciente,
REGISTRO_HOSPITAL.nombre_tratamiento
from ubicacion
	inner join(
	select 
	registro_hospital.id_registro_hospital as registro_hospital,
	registro_hospital.id_paciente as id_paciente,
	PACIENTE.nombre_paciente as nombre_paciente,
	PACIENTE.apellido_paciente as apellido_paciente,
	PACIENTE.nombre_tratamiento as nombre_tratamiento
	from registro_hospital
		inner join(
		select 
		paciente.id_paciente as id_paciente,
		paciente.nombre_paciente as nombre_paciente,
		paciente.apellido_paciente as apellido_paciente,
        paciente.fecha_muerte as fecha_muerte,
		TRATAMIENTO_PACIENTE.nombre_tratamiento as nombre_tratamiento
		from 
		paciente
		inner join(
			select 
			tratamiento_paciente.id_tratamiento_paciente as id_tratamiento,
			tratamiento_paciente.id_paciente as id_paciente,
			TIPO_TRATAMIENTO.nombre_tratamiento as nombre_tratamiento
			from tratamiento_paciente
			inner join(
				select 
				tipo_tratamiento.id_tipo_tratamiento as id_tipo, 
				tipo_tratamiento.nombre_tratamiento as nombre_tratamiento
				from 
				tipo_tratamiento
				where
				tipo_tratamiento.nombre_tratamiento like '%Manejo de la presion arterial%'
			)TIPO_TRATAMIENTO on tratamiento_paciente.id_tipo_tratamiento = TIPO_TRATAMIENTO.id_tipo
		)TRATAMIENTO_PACIENTE on paciente.id_paciente = TRATAMIENTO_PACIENTE.id_paciente
	)PACIENTE on registro_hospital.id_paciente = PACIENTE.id_paciente and PACIENTE.fecha_muerte is not null
)REGISTRO_HOSPITAL on ubicacion.id_registro_hospital = REGISTRO_HOSPITAL.registro_hospital and ubicacion.direccion_ubicacion = '1987 Delphine Well';


/*  consulta 7  nombre, apellido, direccion que tiene menos de 2 allegado los
cuales hayan estado en un hospital y que se le hayan aplicado dos tratamientos */
select paciente.id_paciente as ID, paciente.nombre_paciente as nombre, paciente.apellido_paciente as apellido
from paciente
inner join registro_hospital on registro_hospital.id_paciente = paciente.id_paciente
inner join(
	select  encuentro.id_paciente, count(encuentro.id_paciente) as asociados
	from encuentro
	group by encuentro.id_paciente
) as conteo_asociados on conteo_asociados.id_paciente = paciente.id_paciente
inner join(
	select tratamiento_paciente.id_paciente, count(tratamiento_paciente.id_paciente) as tratamientos
	from tratamiento_paciente
	group by tratamiento_paciente.id_paciente
) as conteo_tratamientos on conteo_tratamientos.id_paciente = paciente.id_paciente
where conteo_asociados.asociados < 2 and conteo_tratamientos.tratamientos = 2    





/*  CONSULTA 8 - mostrar el numero mes de fecha primera sospecha, nombre, apellido de pacientes que mas tratamientos se han aplicado y las que menos  */
select 
paciente.nombre_paciente as nombre,
paciente.apellido_paciente as apellido,
TRATAMIENTO_PACIENTE.total_tratamientos
from paciente
inner join(
	select
	tratamiento_paciente.id_paciente as id_paciente,
	count(tipo_tratamiento.id_tipo_tratamiento) as total_tratamientos
	from tratamiento_paciente
	inner join tipo_tratamiento on tratamiento_paciente.id_tipo_tratamiento = tipo_tratamiento.id_tipo_tratamiento
	group by tratamiento_paciente.id_paciente
    order by total_tratamientos desc
    limit 5
)TRATAMIENTO_PACIENTE ON paciente.id_paciente = TRATAMIENTO_PACIENTE.id_paciente
union all
select 
paciente.nombre_paciente as nombre,
paciente.apellido_paciente as apellido,
TRATAMIENTO_PACIENTE.total_tratamientos
from paciente
inner join(
	select
	tratamiento_paciente.id_paciente as id_paciente,
	count(tipo_tratamiento.id_tipo_tratamiento) as total_tratamientos
	from tratamiento_paciente
	inner join tipo_tratamiento on tratamiento_paciente.id_tipo_tratamiento = tipo_tratamiento.id_tipo_tratamiento
	group by tratamiento_paciente.id_paciente
    order by total_tratamientos asc
    limit 5
)TRATAMIENTO_PACIENTE ON paciente.id_paciente = TRATAMIENTO_PACIENTE.id_paciente;



/* consulta 9    mostrar el porcentaje de victimas que les correspondan a cada hospital */
SELECT 
ubicacion_hospital.nombre_ubicacion_hospital AS ubicacion,
hospital.nombre_hospital AS hospital, 
(COUNT(registro_hospital.fecha_registro) / (select count(*) from registro_hospital) * 100) as porcentaje
FROM hospital 
INNER JOIN ubicacion_hospital ON hospital.id_ubicacion_hospital = ubicacion_hospital.id_ubicacion_hospital
INNER JOIN registro_hospital ON hospital.id_hospital = registro_hospital.id_hospital
GROUP BY hospital,ubicacion;



/* Consulta 10   mostar el porcentaje del contatacto fisico mas comun de cada hospital de la siguiente manera
nombre hospita, nombre del contacto fisico, porcentaje de victimas*/
select detalle_contacto.tipo_encuentro, 
count(detalle_contacto.tipo_encuentro) as total
from detalle_contacto
group by detalle_contacto.tipo_encuentro
order by total desc 
limit 1