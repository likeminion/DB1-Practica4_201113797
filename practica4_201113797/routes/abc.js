var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('abc', { title: 'Bus Velocity' });
});

router.post('/', function(req, res) {

    var results = [];

    // Grab data from http request
    var data = {text: req.body.fname, complete: req.body.lname, capacidad:req.body.cname,text1: req.body.fname1, complete1: req.body.lname1, capacidad1:req.body.cname1, elim: req.body.idel, id: req.body.lt1};
    var data2 = {boton: req.body.ingreso, boton1: req.body.borrar, boton2: req.body.modificar};

    console.log(data2.boton+"soyboton");
    // Get a Postgres client from the connection pool
    var pg = require('pg');
	var conString = "pg://postgres:123@localhost:5432/Practica4_db1";
    pg.connect(conString, function(err, client, done) {
        
       client.query("INSERT INTO \"BUS\"(\"TIPO_BUS_idTIPO_BUS\", \"CONDUCTOR\", \"CAPACIDAD\") values("+data.text+", '"+data.complete+"',"+data.capacidad+")", 
            function(err, result) {
                if (err) {
                    console.log(err+"1");
                } 

              
                    client.end();
            });
    
	});
	res.render('abc', { title: 'Bus Velocity' });
});

module.exports = router;
