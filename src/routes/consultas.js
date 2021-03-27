const {Router} = require('express');
const router = Router();


// --------- peticiones get para cada una de las consultas a mysql
router.get('/',(req,res)=>{
    res.json({"Title":"Hola mundo"});
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

module.exports = router;