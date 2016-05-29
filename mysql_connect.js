exports.func=function(dat){
require('date-utils');
let mysql = require('mysql');
let connection = mysql.createConnection({
  host : '192.168.24.60',
  user : 'adminuser',
  password : 'kfuk1867',
  port : 3306,
  database: 'test'
});

dt=new Date().getTime();
connection.connect();
connection.query('INSERT INTO test_table (datetime,temprature) VALUES('+dt+','+dat+');', (err, rows, fields) => {
console.log('The solution is: ', rows);
        });
connection.end();

}
