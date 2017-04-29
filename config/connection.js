// Inside the connection.js file, setup the code to connect Node to MySQL.
// Export the connection.

// Pull in required dependencies
var mysql = require('mysql');

// Create the MySQL connection object
var connection;

if (process.env.BurgerDB_URL) {
	// DB is BurgerDB on Heroku
	connection = mysql.createConnection(process.env.BurgerDB_URL);
} else {
	// DB is local on localhost
	connection = mysql.createConnection({
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: 'Manny111',
		database: 'burgers_db'
	});
};

// Make the connection to MySQL
connection.connect(function(err) {
  if (err) {
    console.error('ERROR: MySQL connection error -- ' + err.stack + '\n\n');
    return;
  }
  console.log('Connected to MySQL database as id ' + connection.threadId + '\n\n');
});

// Export connection for ORM use
module.exports = connection;