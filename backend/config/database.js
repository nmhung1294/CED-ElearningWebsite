const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost', 
  user: 'ced_elearning',
  password: '12345678', 
  database: 'onlineCourses'
});

connection.connect(error => {
  if (error) {
    console.error('An error occurred while connecting to the DB:', error);
    return;
  }
});

module.exports = connection;