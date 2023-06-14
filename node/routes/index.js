var express = require('express');
var router = express.Router();

const config = {
  host: 'db',
  user: 'admin',
  password: 'admin',
  database: 'nodedb'
}

const mysql = require('mysql');
const connection = mysql.createConnection(config);
const createTable = `CREATE TABLE IF NOT EXISTS people(id int not null auto_increment, name varchar(255), primary key(id))`;
connection.query(createTable);
const insert = `INSERT INTO people(name) values('Fabio Araujo')`;
connection.query(insert);  

router.get('/', function(req, res, next) {      
  connection.query("SELECT name FROM people", function (err, result, fields) {
    if (err) throw err;
    let people = result;    
    res.render('index', { title: 'Full Cycle Rocks!', people: people });    
  });  
});

router.get('/name/:name', function(req, res, next) {
  const name = req.params.name;
  const insert = `INSERT INTO people(name) values('` + name + `')`;
  connection.query(insert);  
  res.send('The name ' + name + ' was inserted in database!');
});

module.exports = router;
