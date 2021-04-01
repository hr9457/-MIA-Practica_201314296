const {Router, json} = require('express');
const router = Router();

const mysqlConnection = require('../database');


// --------- ruta para la carga de la tabla temporal en la base de datos
router.get('/cargarTemporal',(req,res)=>{
    crearTemporal();
    res.json({"Titulo":"Creacion de la tabla temporal"});
});


// --------------- ruta para hacer la carga de los datos en el modelo de la base de datos
router.get('/cargarModelo',(req,res)=>{
    crearBaseDatos();
    cargarModelo();
    res.json({"Titulo":"Cargando datos en la Base de Datos..............."});
});


//------------------ ruta para elimincion de la tabla temporal de la base de datos
router.get('/eliminarTemporal',(req,res)=>{
    let consultaEliminarTemporal = "DROP TABLE IF EXISTS Temporal;";
    mysqlConnection.query(consultaEliminarTemporal,function(error,resultado){
        if(error){
            console.log(error);
            return;
        }
        else{
            console.log("Tabla temporal eliminada")
            res.json({"Titulo":"Tabla temporal eliminada"});
        }
    });
});


// ------------ ruta para eliminacion de las tablas de las tablas de la base de datos
router.get('/eliminarModelo',(req,res)=>{
    eliminarModelo();
    res.json({"Titulo":"Eliminando Tablas del la base de datos...................."});
});


// ------------------------------ CONSULTAS A LA BASE DE DATOS ----------------------------------
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


// meotod para eliminar el modelo de la base de datos
function eliminarModelo() {
    console.log("----->ELIMINADO MODELO DE LA BASE DE DATOS<------");
    let tabla_detalle_contacto = "DROP TABLE IF EXISTS detalle_contacto;";
    mysqlConnection.query(tabla_detalle_contacto,function(error,resultado){
        if(error){
            console.log(error);
            return;
        }
        else{
            console.log("Tabla de los detalles de los encuentros eliminada");
        }
    });

    let tabla_encuentro = "DROP TABLE IF EXISTS encuentro;";
    mysqlConnection.query(tabla_encuentro,function(error,resultado){
        if(error){
            console.log(error);
            return;
        }
        else{
            console.log("Tabla de los encuentros eliminada");
        }
    });

    let tabla_conocido = "DROP TABLE IF EXISTS conocido;";
    mysqlConnection.query(tabla_conocido,function(error,resultado){
        if(error){
            console.log(error);
            return;
        }
        else{
            console.log("Tabla de conocidos eliminada");
        }
    });


        

    let tabla_tratamiento_paciente = "DROP TABLE IF EXISTS tratamiento_paciente;";
    mysqlConnection.query(tabla_tratamiento_paciente,function(error,resultado){
        if(error){
            console.log(error);
            return;
        }
        else{
            console.log("Tabla de tratamientos de los pacientes eliminada");
        }
    });

    let tabla_tipo_tratamiento = "DROP TABLE IF EXISTS tipo_tratamiento;";
    mysqlConnection.query(tabla_tipo_tratamiento,function(error,resultado){
        if(error){
            console.log(error);
            return;
        }
        else{
            console.log("Tabla de los tipos de tratamientos eliminada");
        }
    });


    let tabla_ubicacion = "DROP TABLE IF EXISTS ubicacion; ";
    mysqlConnection.query(tabla_ubicacion,function(error,resultado){
        if(error){
            console.log(error);
            return;
        }
        else{
            console.log("Tabla ubicacion de los pacientes eliminada");
        }
    });


    let tabla_registro_hospital = "DROP TABLE IF EXISTS registro_hospital; ";
    mysqlConnection.query(tabla_registro_hospital,function(error,resultado){
        if(error){
            console.log(error);
            return;
        }
        else{
            console.log("Tabla registros de hospitales eliminada");
        }
    });



    let tabla_paciente = "DROP TABLE IF EXISTS paciente;"
    mysqlConnection.query(tabla_paciente,function(error,resultado){
        if(error){
            console.log(error);
            return;
        }
        else{
            console.log("Tabla de los pacientes eliminada");
        }
    });
   
    


    
    let tabla_estado_paciente = "DROP TABLE IF EXISTS estado_paciente;";
    mysqlConnection.query(tabla_estado_paciente,function(error,resultado){
        if(error){
            console.log(error);
            return;
        }
        else{
            console.log("Tabla de los estados de los pacientes eliminada");
        }
    });


    


    let tabla_hospital = "DROP TABLE IF EXISTS hospital; ";
    mysqlConnection.query(tabla_hospital,function(error,resultado){
        if(error){
            console.log(error);
            return;
        }
        else{
            console.log("Tabla hospital eliminada");
        }
    });


    let tabla_ubicacion_hospital = "DROP TABLE IF EXISTS ubicacion_hospital;";
    mysqlConnection.query(tabla_ubicacion_hospital,function(error,resultado){
        if(error){
            console.log(error);
            return;
        }
        else{
            console.log("Tabla ubicacion hospital eliminada \n-->TABLAS ELIMINADAS DE LA BASE DE DATOS<---");
        }
    });

    
}

// metodo para crear una tabla temporal en la base de datos
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
            console.log("Tabla temporal creada");
        }
    });


    // ------ carga de datos en la tabla temporal
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
            console.log("Datos cargados a tabla temporal\n--->FIN DE LA CARGA PARA LA TABLA TEMPORAL<---");
        }
    });
}


function crearBaseDatos() {
    // crear la la base de datos y sus tablas
    let baseDatos = "CREATE TABLE ubicacion_hospital(\
        id_ubicacion_hospital INT NOT NULL AUTO_INCREMENT PRIMARY KEY,\
        nombre_ubicacion_hospital VARCHAR(75) NOT NULL\
    );\
    CREATE TABLE hospital(\
        id_hospital INT NOT NULL AUTO_INCREMENT,\
        nombre_hospital VARCHAR(75) NOT NULL,\
        id_ubicacion_hospital INT NOT NULL,\
        PRIMARY KEY(id_hospital,id_ubicacion_hospital),\
        FOREIGN KEY(id_ubicacion_hospital) REFERENCES ubicacion_hospital(id_ubicacion_hospital)\
    );\
    CREATE TABLE estado_paciente(\
        id_estado_paciente INT NOT NULL AUTO_INCREMENT PRIMARY KEY,\
        nombre_estado VARCHAR(75)\
    );\
    CREATE TABLE paciente(\
        id_paciente INT NOT NULL AUTO_INCREMENT PRIMARY KEY,\
        nombre_paciente VARCHAR(75) NOT NULL,\
        apellido_paciente VARCHAR(75) NOT NULL,\
        direccion_paciente VARCHAR(75) NOT NULL,\
        fecha_muerte DATETIME NULL,\
        estado_paciente VARCHAR(75) NOT NULL\
    );\
    CREATE TABLE tipo_tratamiento(\
        id_tipo_tratamiento INT NOT NULL AUTO_INCREMENT PRIMARY KEY,\
        nombre_tratamiento VARCHAR(75),\
        efectividad_tratamiento INT\
    );\
    CREATE TABLE tratamiento_paciente(\
        id_tratamiento_paciente INT NOT NULL AUTO_INCREMENT,\
        efectividad INT NOT NULL,\
        inicio_tratamiento DATETIME NOT NULL,\
        fin_tratamiento DATETIME NOT NULL,\
        id_paciente INT NOT NULL,\
        id_tipo_tratamiento INT NOT NULL,\
        PRIMARY KEY(id_tratamiento_paciente,id_paciente,id_tipo_tratamiento),\
        FOREIGN KEY(id_paciente) REFERENCES paciente(id_paciente),\
        FOREIGN KEY(id_tipo_tratamiento) REFERENCES tipo_tratamiento(id_tipo_tratamiento)\
    );\
    CREATE TABLE registro_hospital(\
        id_registro_hospital INT NOT NULL AUTO_INCREMENT,\
        fecha_registro DATETIME NOT NULL,\
        fecha_confirmacion DATETIME NOT NULL,\
        fecha_muerte DATETIME NULL,\
        id_hospital INT NOT NULL,\
        id_paciente INT NOT NULL,\
        id_estado_paciente INT NOT NULL,\
        PRIMARY KEY(id_registro_hospital,id_hospital,id_paciente,id_estado_paciente),\
        FOREIGN KEY(id_hospital) REFERENCES hospital(id_hospital),\
        FOREIGN KEY(id_paciente) REFERENCES paciente(id_paciente),\
        FOREIGN KEY(id_estado_paciente) REFERENCES estado_paciente(id_estado_paciente)\
    );\
    CREATE TABLE ubicacion(\
        id_ubicacion INT NOT NULL AUTO_INCREMENT,\
        direccion_ubicacion VARCHAR(75) NOT NULL,\
        hora_llegada DATETIME NOT NULL,\
        hora_salida DATETIME NOT NULL,\
        id_registro_hospital INT NOT NULL,\
        PRIMARY KEY(id_ubicacion,id_registro_hospital),\
        FOREIGN KEY(id_registro_hospital) REFERENCES registro_hospital(id_registro_hospital)\
    );\
    CREATE TABLE conocido(\
        id_conocido INT NOT NULL AUTO_INCREMENT PRIMARY KEY,\
        nombre_conocido VARCHAR(75) NOT NULL,\
        apellido_conocido VARCHAR(75) NOT NULL\
    );\
    CREATE TABLE encuentro(\
        id_encuentro INT NOT NULL AUTO_INCREMENT,\
        id_conocido INT NOT NULL,\
        id_paciente INT NOT NULL,\
        PRIMARY KEY(id_encuentro,id_conocido,id_paciente),\
        FOREIGN KEY(id_conocido) REFERENCES conocido(id_conocido),\
        FOREIGN KEY(id_paciente) REFERENCES paciente(id_paciente)\
    );\
    CREATE TABLE detalle_contacto(\
        id_detalle_encuentro INT NOT NULL AUTO_INCREMENT,\
        tipo_encuentro VARCHAR(75),\
        fecha_encuentro DATETIME NOT NULL,\
        inicio_encuentro DATETIME NOT NULL,\
        fin_encuentro DATETIME NOT NULL,\
        id_encuentro INT NOT NULL,\
        PRIMARY KEY(id_detalle_encuentro,id_encuentro),\
        FOREIGN KEY(id_encuentro) REFERENCES encuentro(id_encuentro)\
    );";
    mysqlConnection.query(baseDatos,function(error,result){
        if(error){
            console.log(error);
            return;
        }
        else{
            console.log("BASE DE DATOS CREADA......");
        }
    });
}

// cargar datos a la base de datos
function cargarModelo() {
    
    // creacion de filtros para cargar los datos a sus respectivas tablas
    // carga de datos de ubicaciones de hospitales
    let ubicacionesHospitales = "INSERT INTO ubicacion_hospital (nombre_ubicacion_hospital)\
    SELECT DISTINCT Temporal.direccion_hospital FROM Temporal WHERE direccion_hospital IS NOT NULL AND direccion_hospital != '';\
    ";

    mysqlConnection.query(ubicacionesHospitales,function(error,result){
        if(error){
            console.log(error);
            return;
        }
        else{
            console.log("Ubicaciones de hospitales cargados");
        }
    });

    
    /* consulta para agregar todos los tipos de tratamientos */
    let tiposTratamientos= "insert into tipo_tratamiento(nombre_tratamiento,efectividad_tratamiento)\
    select distinct Temporal.tratamiento, Temporal.efectividad\
    from Temporal\
    where tratamiento is not null and tratamiento != '';";

    mysqlConnection.query(tiposTratamientos,function(error,result){
        if(error){
            console.log(error);
            return;
        }
        else{
            console.log("Tipos de tratamientos cargados");
        }
    });


    /* consulta para pacientes */
    let pacientes = "insert into paciente(nombre_paciente,apellido_paciente,direccion_paciente,fecha_muerte,estado_paciente)\
    select distinct Temporal.nombre_paciente, Temporal.apellido_paciente, Temporal.direccion_paciente, Temporal.fecha_muerte, Temporal.estado_paciente\
    from Temporal\
    where nombre_paciente != '' and apellido_paciente != '' and direccion_paciente != '';";
    mysqlConnection.query(pacientes,function(error,result){
        if(error){
            console.log(error);
            return;
        }
        else{
            console.log("Pacientes cargados");
        }
    });


    /*  insertar los conocidos en la base de datos */
    let conocidos = "insert into conocido (nombre_conocido,apellido_conocido)\
    select distinct Temporal.nombre_asociado, Temporal.apellido_asociado\
    from Temporal\
    where nombre_asociado != '' and apellido_asociado != '';";
    mysqlConnection.query(conocidos,function(error,result){
        if(error){
            console.log(error);
            return;
        }
        else{
            console.log("conocidos cargados");
        }
    });


    /* filtro para insertar los pacientes con sus tratamientos  */
    let pacienteTratamiento = "insert into tratamiento_paciente(efectividad, inicio_tratamiento, fin_tratamiento, id_paciente, id_tipo_tratamiento)\
    SELECT DISTINCT Temporal.efectividad_en_paciente, Temporal.fecha_inicio_tratamiento, Temporal.fecha_fin_tratamiento, paciente.id_paciente, tipo_tratamiento.id_tipo_tratamiento\
    FROM Temporal\
    INNER JOIN paciente ON Temporal.direccion_paciente = paciente.direccion_paciente AND Temporal.nombre_paciente = paciente.nombre_paciente AND Temporal.apellido_paciente = paciente.apellido_paciente\
    INNER JOIN tipo_tratamiento ON Temporal.tratamiento = tipo_tratamiento.nombre_tratamiento;";
    mysqlConnection.query(pacienteTratamiento,function(error,result){
        if(error){
            console.log(error);
            return;
        }
        else{
            console.log("Tratamiento de los pacientes cargados");
        }
    });


    /* filtro para gregar todoso los hospitales a al base de datos */
    let hospitales = "insert into hospital(nombre_hospital, id_ubicacion_hospital)\
    select distinct Temporal.nombre_hospital, ubicacion_hospital.id_ubicacion_hospital\
    from Temporal\
    inner join ubicacion_hospital on Temporal.direccion_hospital = ubicacion_hospital.nombre_ubicacion_hospital;";
    mysqlConnection.query(hospitales,function(error,result){
        if(error){
            console.log(error);
            return;
        }
        else{
            console.log("hospitales cargados");
        }
    });

    /* filtro para agregar todos lo tipo de estados existentes en los pacintes  */
    let estadoPacientes = "insert into estado_paciente(nombre_estado)\
    select distinct Temporal.estado_paciente \
    from Temporal\
    where Temporal.estado_paciente != '' and Temporal.estado_paciente is not null;";
    mysqlConnection.query(estadoPacientes,function(error,result){
        if(error){
            console.log(error);
            return;
        }
        else{
            console.log("Estado de los pacientes cargardos");
        }
    });


    /*   filtro par el registro de pacientes en hospitales    */
    let registroPacientes = "insert into registro_hospital(fecha_registro,fecha_confirmacion,fecha_muerte,id_hospital,id_paciente,id_estado_paciente)\
    select distinct Temporal.fecha_primera_sospecha AS fechaRegistro, Temporal.fecha_confirmacion AS fechaConfirmacion, Temporal.fecha_muerte AS fechaMuerte,\
    PRUEBA.idH AS idHospitalAg, paciente.id_paciente AS idVictimaAg,\
    estado_paciente.id_estado_paciente\
    FROM Temporal\
    INNER JOIN paciente ON paciente.nombre_paciente = Temporal.nombre_paciente AND paciente.apellido_paciente = Temporal.apellido_paciente\
    inner join estado_paciente on estado_paciente.nombre_estado = Temporal.estado_paciente\
    INNER JOIN (\
    SELECT hospital.id_hospital AS idH, ubicacion_hospital.id_ubicacion_hospital AS idUbi, ubicacion_hospital.nombre_ubicacion_hospital AS ubi, hospital.nombre_hospital AS nomH \
    FROM hospital\
    INNER JOIN ubicacion_hospital ON hospital.id_ubicacion_hospital = ubicacion_hospital.id_ubicacion_hospital\
    )PRUEBA ON Temporal.nombre_hospital = nomH AND Temporal.direccion_hospital = ubi;";
    mysqlConnection.query(registroPacientes,function(error,result){
        if(error){
            console.log(error);
            return;
        }
        else{
            console.log("Paciente registrados en hospitales");
        }
    });



    /*  ubicaciones de los pacientes  */
    let ubicacionesPacientes = "insert into ubicacion (direccion_ubicacion,hora_llegada,hora_salida,id_registro_hospital)\
    select distinct Temporal.ubicacion_paciente,Temporal.fecha_llegada, Temporal.fecha_retiro, PRUEBA.idRegistro\
    from Temporal\
    inner join(\
    select registro_hospital.id_registro_hospital as idRegistro , paciente.nombre_paciente as nombreP, paciente.apellido_paciente as apellidoP, paciente.direccion_paciente as direccionP\
    from registro_hospital\
    inner join paciente on paciente.id_paciente = registro_hospital.id_paciente\
    )PRUEBA where Temporal.nombre_paciente = PRUEBA.nombreP and Temporal.apellido_paciente = PRUEBA.apellidoP and Temporal.direccion_paciente = PRUEBA.direccionP and Temporal.ubicacion_paciente != ''";
    mysqlConnection.query(ubicacionesPacientes,function(error,result){
        if(error){
            console.log(error);
            return;
        }
        else{
            console.log("ubicaciones de los pacientes cargados");
        }
    });


    /*   tabla pare registar personas con conocidos   */
    let conocidosPorPaciente = "insert into encuentro(id_conocido,id_paciente)\
    select conocido.id_conocido, PACIENTE.id_paciente\
    from conocido\
    inner join(\
    select paciente.id_paciente as id_Paciente, paciente.nombre_paciente as name_paciente,CONOCIDO.nameA as nAsociado, CONOCIDO.lastA as lAsociado\
    from paciente\
    inner join(\
    select distinct Temporal.nombre_paciente as nameP, Temporal.apellido_paciente as lastP\
    ,Temporal.nombre_asociado as nameA, Temporal.apellido_asociado as lastA, Temporal.fecha_conocido as fecha\
    from Temporal\
    where Temporal.nombre_paciente != '' and Temporal.nombre_asociado != '')CONOCIDO on paciente.nombre_paciente = CONOCIDO.nameP and paciente.apellido_paciente = CONOCIDO.lastP) PACIENTE on conocido.nombre_conocido = PACIENTE.nAsociado and conocido.apellido_conocido = PACIENTE.lAsociado;";
    mysqlConnection.query(conocidosPorPaciente,function(error,result){
        if(error){
            console.log(error);
            return;
        }
        else{
            console.log("registro de los conocidos de los pacinetes");
        }
    });


    /*   registrar los detalles del encuentro    */
    let detallesEncuentro = "insert into detalle_contacto(tipo_encuentro, fecha_encuentro, inicio_encuentro, fin_encuentro, id_encuentro)\
    select distinct Temporal.contacto_fisico, Temporal.fecha_conocido, Temporal.fecha_inicio_contacto, Temporal.fecha_fin_encuentro, ENCUENTRO.idEncuentro\
    from Temporal\
    inner join(\
    select encuentro.id_encuentro as idEncuentro\
    ,paciente.nombre_paciente as nombrePaciente, paciente.apellido_paciente as apellidoPaciente, paciente.direccion_paciente as direccionPaciente\
    ,conocido.nombre_conocido as nombreConocido, conocido.apellido_conocido as apellidoConocido \
    from encuentro\
    inner join paciente on encuentro.id_paciente = paciente.id_paciente\
    inner join conocido on encuentro.id_conocido = conocido.id_conocido\
    )ENCUENTRO on Temporal.nombre_paciente = ENCUENTRO.nombrePaciente and Temporal.apellido_paciente = ENCUENTRO.apellidoPaciente\
    and Temporal.nombre_asociado = ENCUENTRO.nombreConocido and Temporal.apellido_asociado = ENCUENTRO.apellidoConocido \
    and Temporal.contacto_fisico != ''; ";
    mysqlConnection.query(detallesEncuentro,function(error,result){
        if(error){
            console.log(error);
            return;
        }
        else{
            console.log("detalle de encuentros de los pacientes cargados\n-->CARGA DE MODELO FINALIZADA<--");
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