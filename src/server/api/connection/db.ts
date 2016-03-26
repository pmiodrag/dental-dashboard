
var mysql = require('mysql'); // node-mysql module
export var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'smiletime'
});
connection.connect();
