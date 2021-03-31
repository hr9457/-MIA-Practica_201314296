const {Router, json} = require('express');
const router = Router();

const mysqlConnection = require('../database');


// --------- peticiones get para cada una de las consultas a mysql
router.get('/cargarTemporal',(req,res)=>{
    crearTemporal();
    res.json({"Title":"Carga masiva terminada"});
});


// consulta 1
router.get('/consulta1',(req,res)=>{
    mysqlConnection.query(consultaHospitales(),function(error,resultado){
        if(error){
            console.log(error);
            return;
        }
        else{
            res.end(JSON.stringify(resultado,null,2));
        }
    });
});


// consulta 2
router.get('/consulta2',(req,res)=>{
    mysqlConnection.query(consulta2(),function(error,resultado){
        if(error){
            console.log(error);
            return;
        }
        else{
            res.end(JSON.stringify(resultado,null,2));
        }
    });
});

// consulta 3
router.get('/consulta3',(req,res)=>{
    mysqlConnection.query(consulta3(),function(error,resultado){
        if(error){
            console.log(error);
            return;
        }
        else{
            res.end(JSON.stringify(resultado,null,2));
        }
    });
});

// consulta 4
router.get('/consulta4',(req,res)=>{
    mysqlConnection.query(consulta4(),function(error,resultado){
        if(error){
            console.log(error);
            return;
        }
        else{
            res.end(JSON.stringify(resultado,null,2));
        }
    });
});

// consulta 5
router.get('/consulta5',(req,res)=>{
    mysqlConnection.query(consulta5(),function(error,resultado){
        if(error){
            console.log(error);
            return;
        }
        else{
            res.end(JSON.stringify(resultado,null,2));
        }
    });
});

// consulta 6
router.get('/consulta6',(req,res)=>{
    mysqlConnection.query(consulta6(),function(error,resultado){
        if(error){
            console.log(error);
            return;
        }
        else{
            res.end(JSON.stringify(resultado,null,2));
        }
    });
});

// consulta 7
router.get('/consulta7',(req,res)=>{
    mysqlConnection.query(consulta7(),function(error,resultado){
        if(error){
            console.log(error);
            return;
        }
        else{
            res.end(JSON.stringify(resultado,null,2));
        }
    });
});


// consulta 8
router.get('/consulta8',(req,res)=>{
    mysqlConnection.query(consulta8(),function(error,resultado){
        if(error){
            console.log(error);
            return;
        }
        else{
            res.end(JSON.stringify(resultado,null,2));
        }
    });
});


// consulta 9
router.get('/consulta9',(req,res)=>{
    mysqlConnection.query(consulta9(),function(error,resultado){
        if(error){
            console.log(error);
            return;
        }
        else{
            res.end(JSON.stringify(resultado,null,2));
        }
    });
});

// consulta 10
router.get('/consulta10',(req,res)=>{
    mysqlConnection.query(consulta10(),function(error,resultado){
        if(error){
            console.log(error);
            return;
        }
        else{
            res.end(JSON.stringify(resultado,null,2));
        }
    });
});


// eliminar Temporal
router.get('/eliminarTemporal',(req,res)=>{
    res.json({"Title":"Hola mundo"});
});


// eliminar modelo
router.get('/eliminarModelo',(req,res)=>{
    res.json({"Title":"Hola mundo"});
});


// cargar termporal
router.get('/cargarTemporal',(req,res)=>{
    res.json({"Title":"Hola mundo"});
});


// metodo para 
function crearTemporal()
{
    // creacion de tabla temporal
    let sqlTemporal = "DROP TABLE IF EXISTS Temporal;\
        create table Temporal(\
        nombre_paciente varchar(75) not null,\
        apellido_paciente varchar(75) not null,\
        direccion_paciente varchar(75) not null,\
        fecha_primera_sospecha datetime not null,\
        fecha_confirmacion datetime not null,\
        fecha_muerte datetime null,\
        estado_paciente varchar(75) not null,\
        nombre_asociado varchar(75) null,\
        apellido_asociado varchar(75) null,\
        fecha_conocido datetime  null,\
        contacto_fisico varchar(75) null,\
        fecha_inicio_contacto datetime null,\
        fecha_fin_encuentro datetime null,\
        nombre_hospital varchar(75) null,\
        direccion_hospital varchar(75) null,\
        ubicacion_paciente varchar(75) null,\
        fecha_llegada datetime null,\
        fecha_retiro datetime null,\
        tratamiento varchar(75) null,\
        efectividad int null,\
        fecha_inicio_tratamiento datetime null,\
        fecha_fin_tratamiento datetime null,\
        efectividad_en_paciente int null\
    );";
    //
    mysqlConnection.query(sqlTemporal,function(error,result){
        if(error){ 
            console.log(error);
            return;
        }
        else{    
            console.log("tabla temporal creada");
        }
    });

    // carga de datos en la tabla temporal
    let cargaDatos = "LOAD DATA LOCAL INFILE '/home/hector/Documentos/MIA/datos.csv'\
    into table Temporal\
    character set utf8mb4\
    fields terminated by ';'\
    ignore 1 lines\
    (nombre_paciente,apellido_paciente,direccion_paciente,@fecha_primera_sospecha,@fecha_confirmacion,@fecha_muerte,estado_paciente,nombre_asociado,apellido_asociado,\
        @fecha_conocido,contacto_fisico,@fecha_inicio_contacto,@fecha_fin_encuentro,nombre_hospital,direccion_hospital,ubicacion_paciente,@fecha_llegada,@fecha_retiro,\
        tratamiento,efectividad,@fecha_inicio_tratamiento,@fecha_fin_tratamiento,efectividad_en_paciente)\
    set fecha_primera_sospecha = STR_TO_DATE (@fecha_primera_sospecha, '%Y-%m-%d %H:%i:%s'),\
    fecha_confirmacion = STR_TO_DATE (@fecha_confirmacion, '%Y-%m-%d %H:%i:%s'),\
    fecha_muerte = STR_TO_DATE (@fecha_muerte, '%Y-%m-%d %H:%i:%s'),\
    fecha_conocido = STR_TO_DATE (@fecha_conocido, '%Y-%m-%d %H:%i:%s'),\
    fecha_inicio_contacto = STR_TO_DATE (@fecha_inicio_contacto, '%Y-%m-%d %H:%i:%s'),\
    fecha_fin_encuentro = STR_TO_DATE (@fecha_fin_encuentro, '%Y-%m-%d %H:%i:%s'),\
    fecha_llegada = STR_TO_DATE (@fecha_llegada, '%Y-%m-%d %H:%i:%s'),\
    fecha_retiro = STR_TO_DATE (@fecha_retiro, '%Y-%m-%d %H:%i:%s'),\
    fecha_inicio_tratamiento = STR_TO_DATE (@fecha_inicio_tratamiento, '%Y-%m-%d %H:%i:%s'),\
    fecha_fin_tratamiento = STR_TO_DATE (@fecha_fin_tratamiento, '%Y-%m-%d %H:%i:%s');\
    ";

    mysqlConnection.query(cargaDatos,function(error,rows,fields){
        if(error){
            console.log(error);
            return;
        }
        else{
            console.log("Datos cargados");
        }
    });
}







// consulta 1 consulta para agregar las ubicaciones de los hospitales
function consultaHospitales(){
    var consulta = "select hospital.nombre_hospital AS hospital, ubicacion_hospital.nombre_ubicacion_hospital AS ubicacion, COUNT(registro_hospital.fecha_muerte) AS fallecidos \
    FROM hospital\
    INNER JOIN ubicacion_hospital ON hospital.id_ubicacion_hospital = ubicacion_hospital.id_ubicacion_hospital \
    INNER JOIN registro_hospital ON hospital.id_hospital = registro_hospital.id_hospital \
    GROUP BY hospital,ubicacion;\
    ";
    return consulta;
}


/* mostrar el nombre,apellido de todos los pacientes en cuarentena que presentaron una efectividad
mayor a 5 en el tratamiento "Transfusiones de sangre" */
function consulta2() {
    let consulta = "select paciente.nombre_paciente as nombre, paciente.apellido_paciente as apellido\
    ,tratamiento_paciente.efectividad as efectividad\
    ,tipo_tratamiento.nombre_tratamiento\
    from paciente\
    inner join registro_hospital on paciente.id_paciente = registro_hospital.id_paciente\
    inner join estado_paciente on registro_hospital.id_estado_paciente = estado_paciente.id_estado_paciente and estado_paciente.nombre_estado like '%En cuarentena%'\
    inner join tratamiento_paciente on paciente.id_paciente = tratamiento_paciente.id_paciente and tratamiento_paciente.efectividad > 5\
    inner join tipo_tratamiento on tratamiento_paciente.id_tipo_tratamiento = tipo_tratamiento.id_tipo_tratamiento and tipo_tratamiento.nombre_tratamiento like '%Transfusiones de sangre%';";
    return consulta;
}

/*consulta tres */
/* mostar nombre, apellido, direccion de victimas falleciddas con mas de tres personas asociadas */
function consulta3() {
    let consulta = "select MUERTOS.nombre, MUERTOS.apellido, MUERTOS.direccion, MUERTOS.conocidos\
    FROM(\
    select paciente.id_paciente\
    ,paciente.nombre_paciente as nombre, paciente.apellido_paciente as apellido, paciente.direccion_paciente as direccion, paciente.fecha_muerte\
    ,count(encuentro.id_paciente) as conocidos\
    from paciente\
    inner join encuentro on paciente.id_paciente = encuentro.id_paciente\
    where paciente.fecha_muerte is not null\
    group by paciente.id_paciente\
    )MUERTOS where MUERTOS.conocidos > 3;";
    return consulta;
}


/* consulta 4  nombre, apellido victimas en estado sospecha contacto tipo beso - total 5     */
function consulta4() {
    let consulta4 = "select PACIENTE.nombre_paciente as nombre,\
    PACIENTE.apellido_paciente as apellido\
    from encuentro\
    inner join(\
        select \
        paciente.id_paciente as id_paciente,\
        paciente.nombre_paciente as nombre_paciente,\
        paciente.apellido_paciente as apellido_paciente\
        from paciente\
        where paciente.estado_paciente like '%sospecha%'\
    )PACIENTE on encuentro.id_paciente = PACIENTE.id_paciente\
    inner join detalle_contacto on detalle_contacto.id_encuentro = encuentro.id_encuentro and detalle_contacto.tipo_encuentro like '%beso%'\
    group by nombre, apellido\
    having count(encuentro.id_conocido) > 2;";
    return consulta4;
}


/* consulta 5  top 5 de victimas que mas tratamientos se han aplicado del trtameitno oxigeno */
function consulta5() {
    let consulta5 = "select nombre_paciente, apellido_paciente, COUNT(TRATAMIENTO.nombreTratamiento) as cantidad_tratamiento\
    from paciente\
    inner join(\
    select tipo_tratamiento.id_tipo_tratamiento as tipoTratamiento,tipo_tratamiento.nombre_tratamiento as nombreTratamiento,tratamiento_paciente.id_paciente as id\
    from tipo_tratamiento\
    inner join tratamiento_paciente on tipo_tratamiento.id_tipo_tratamiento = tratamiento_paciente.id_tipo_tratamiento and tipo_tratamiento.nombre_tratamiento like '%oxigeno%'\
    ) TRATAMIENTO on paciente.id_paciente = TRATAMIENTO.id\
    group by id_paciente, nombre_paciente, apellido_paciente limit 5;";
    return consulta5;
}


/*  CONSULTA 6 mostar el nombre, apellido y fecha de facellimiento de todas la victimas 
que se movieron por la direccion 1987 Delphine Well y se le aplico manejo de precion arterial
*/
function consulta6() {
    let consulta = "select ubicacion.direccion_ubicacion as ubicacion,REGISTRO_HOSPITAL.id_paciente,REGISTRO_HOSPITAL.nombre_paciente, REGISTRO_HOSPITAL.apellido_paciente,REGISTRO_HOSPITAL.nombre_tratamiento\
    from ubicacion\
    inner join(\
    select registro_hospital.id_registro_hospital as registro_hospital,registro_hospital.id_paciente as id_paciente,PACIENTE.nombre_paciente as nombre_paciente,PACIENTE.apellido_paciente as apellido_paciente,PACIENTE.nombre_tratamiento as nombre_tratamiento\
    from registro_hospital\
            inner join(\
            select \
            paciente.id_paciente as id_paciente,\
            paciente.nombre_paciente as nombre_paciente,\
            paciente.apellido_paciente as apellido_paciente,\
            paciente.fecha_muerte as fecha_muerte,\
            TRATAMIENTO_PACIENTE.nombre_tratamiento as nombre_tratamiento\
            from paciente\
            inner join(\
                select \
                tratamiento_paciente.id_tratamiento_paciente as id_tratamiento,\
                tratamiento_paciente.id_paciente as id_paciente,\
                TIPO_TRATAMIENTO.nombre_tratamiento as nombre_tratamiento\
                from tratamiento_paciente\
                inner join(\
                    select \
                    tipo_tratamiento.id_tipo_tratamiento as id_tipo, \
                    tipo_tratamiento.nombre_tratamiento as nombre_tratamiento\
                    from tipo_tratamiento\
                    where\
                    tipo_tratamiento.nombre_tratamiento like '%Manejo de la presion arterial%'\
                )TIPO_TRATAMIENTO on tratamiento_paciente.id_tipo_tratamiento = TIPO_TRATAMIENTO.id_tipo\
            )TRATAMIENTO_PACIENTE on paciente.id_paciente = TRATAMIENTO_PACIENTE.id_paciente\
        )PACIENTE on registro_hospital.id_paciente = PACIENTE.id_paciente and PACIENTE.fecha_muerte is not null\
    )REGISTRO_HOSPITAL on ubicacion.id_registro_hospital = REGISTRO_HOSPITAL.registro_hospital and ubicacion.direccion_ubicacion = '1987 Delphine Well';\
    ";
    return consulta;
}

/*  consulta 7    */
function consulta7() {
    let consulta = "select paciente.id_paciente,\
    paciente.nombre_paciente,\
    paciente.apellido_paciente,\
    paciente.direccion_paciente,\
    count(encuentro.id_paciente) as conocidos,\
    count(tratamiento_paciente.id_paciente) as tratamientos\
    from paciente\
    inner join encuentro on paciente.id_paciente = encuentro.id_paciente\
    inner join conocido on encuentro.id_conocido = conocido.id_conocido\
    inner join tratamiento_paciente on paciente.id_paciente = tratamiento_paciente.id_paciente\
    group by paciente.id_paciente\
    having conocidos < 2;";
    return consulta;
}


/*  CONSULTA 8 - mostrar el numero mes de fecha primera sospecha, nombre, apellido de pacientes que mas tratamientos se han aplicado y las que menos  */
function consulta8() {
    let consulta = "select paciente.nombre_paciente as nombre,\
    paciente.apellido_paciente as apellido,\
    TRATAMIENTO_PACIENTE.total_tratamientos\
    from paciente\
    inner join(\
        select\
        tratamiento_paciente.id_paciente as id_paciente,\
        count(tipo_tratamiento.id_tipo_tratamiento) as total_tratamientos\
        from tratamiento_paciente\
        inner join tipo_tratamiento on tratamiento_paciente.id_tipo_tratamiento = tipo_tratamiento.id_tipo_tratamiento\
        group by tratamiento_paciente.id_paciente\
        order by total_tratamientos desc\
        limit 5\
    )TRATAMIENTO_PACIENTE ON paciente.id_paciente = TRATAMIENTO_PACIENTE.id_paciente\
    union all\
    select \
    paciente.nombre_paciente as nombre,\
    paciente.apellido_paciente as apellido,\
    TRATAMIENTO_PACIENTE.total_tratamientos\
    from paciente\
    inner join(\
        select\
        tratamiento_paciente.id_paciente as id_paciente,\
        count(tipo_tratamiento.id_tipo_tratamiento) as total_tratamientos\
        from tratamiento_paciente\
        inner join tipo_tratamiento on tratamiento_paciente.id_tipo_tratamiento = tipo_tratamiento.id_tipo_tratamiento\
        group by tratamiento_paciente.id_paciente\
        order by total_tratamientos asc\
        limit 5\
    )TRATAMIENTO_PACIENTE ON paciente.id_paciente = TRATAMIENTO_PACIENTE.id_paciente;";
    return consulta;
}


/* consulta 9    mostrar el porcentaje de victimas que les correspondan a cada hospital */
function consulta9() {
    let consulta = "SELECT ubicacion_hospital.nombre_ubicacion_hospital AS ubicacion,\
    hospital.nombre_hospital AS hospital, \
    (COUNT(registro_hospital.fecha_registro) / (select count(*) from registro_hospital) * 100) as porcentaje\
    FROM hospital \
    INNER JOIN ubicacion_hospital ON hospital.id_ubicacion_hospital = ubicacion_hospital.id_ubicacion_hospital\
    INNER JOIN registro_hospital ON hospital.id_hospital = registro_hospital.id_hospital\
    GROUP BY hospital,ubicacion;";
    return consulta;
}


/* Consulta 10   mostar el porcentaje del contatacto fisico mas comun de cada hospital de la siguiente manera
nombre hospita, nombre del contacto fisico, porcentaje de victimas*/
function consulta10() {
    let consulta = "select detalle_contacto.tipo_encuentro, count(detalle_contacto.tipo_encuentro) as total\
    from detalle_contacto\
    group by detalle_contacto.tipo_encuentro\
    order by total desc \
    limit 1";
    return consulta;
}




module.exports = router;