const mysql = require('mysql');


const mysqlConnection = mysql.createConnection({
    multipleStatements:true,
    host: 'localhost',
    user: 'root',
    password: 'soraz9457',
    database: 'practica1',
    port:3306
});


mysqlConnection.connect(function(err){
    if(err){
        console.log(err);
        return;
    } else {
        console.log('Base de datos conectada');
    }
});


module.exports = mysqlConnection;