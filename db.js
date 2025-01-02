const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',       // Your MySQL host
  user: 'root',            // Your MySQL username (default: root)
  password: '',            // Your MySQL password (leave empty if none)
  database: 'calculator_db', // Your database name
//   port: 3306,
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database!');

  
});

module.exports = connection;
