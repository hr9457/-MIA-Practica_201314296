const {Router} = require('express');
const router = Router();

const mysqlConnection = require('../database');


// --------- peticiones get para cada una de las consultas a mysql
router.get('/cargaMasiva',(req,res)=>{
    crearTemporal();
    res.json({"Title":"Carga masiva terminada"});
});

// consulta 1
router.get('/consulta1',(req,res)=>{
    res.json({"Title":"Hola mundo"});
});

// consulta 2
router.get('/consulta2',(req,res)=>{
    res.json({"Title":"Hola mundo"});
});

// consulta 3
router.get('/consulta3',(req,res)=>{
    res.json({"Title":"Hola mundo"});
});

// consulta 4
router.get('/consulta4',(req,res)=>{
    res.json({"Title":"Hola mundo"});
});

// consulta 5
router.get('/consulta5',(req,res)=>{
    res.json({"Title":"Hola mundo"});
});

// consulta 6
router.get('/consulta6',(req,res)=>{
    res.json({"Title":"Hola mundo"});
});

// consulta 7
router.get('/consulta7',(req,res)=>{
    res.json({"Title":"Hola mundo"});
});

// consulta 8
router.get('/consulta8',(req,res)=>{
    res.json({"Title":"Hola mundo"});
});

// consulta 9
router.get('/consulta9',(req,res)=>{
    res.json({"Title":"Hola mundo"});
});

// consulta 10
router.get('/consulta10',(req,res)=>{
    res.json({"Title":"Hola mundo"});
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

    mysqlConnection.query(cargaDatos,function(error,result){
        if(error){
            console.log(error);
            return;
        }
        else{
            console.log("Datos cargados");
        }
    });
}

module.exports = router;