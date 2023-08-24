const mysql = require('mysql2');

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '4lmostD@ne',
  database: 'biochar'
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
  
  // List all tables
  listTables();
});

// Function to list all tables
function listTables() {
  const query = 'SHOW TABLES';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error listing tables:', err);
      return;
    }
    
    // Loop through table names and repair each one
    results.forEach((row) => {
      const tableName = row[`Tables_in_${connection.config.database}`];
      console.log("TABLE FOUND:",tableName)
      repairTable(tableName);
    });
  });
}

// Function to repair a table
function repairTable(tableName) {
  const query = `REPAIR TABLE ${tableName}`;
  connection.query(query, (err, results) => {
    if (err) {
      console.error(`Error repairing table ${tableName}:`, err);
      return;
    }
    console.log(`Table ${tableName} ~ repaired OK`);
  });
}

// Close the connection when all repairs are done
// connection.end();
