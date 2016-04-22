// var mysql = require('mysql');

// var connection = mysql.createConnection({
//   host     : process.env.RDS_HOSTNAME,
//   user     : process.env.RDS_USERNAME,
//   password : process.env.RDS_PASSWORD,
//   port     : process.env.RDS_PORT
// });

var mysql = require('mysql')

var connection = mysql.createConnection({
host : 'localhost',
user : 'root',
password : '',
database : 'test'
});

module.exports = connection