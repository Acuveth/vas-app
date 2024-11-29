const sql = require("mssql");

// Configuration for SQL Server
const dbConfig = {
  user: "your_username", // Your SQL Server username
  password: "your_password", // Your SQL Server password
  server: "localhost", // Hostname or IP address of your SQL Server
  database: "my_database", // Your database name
  options: {
    encrypt: true, // Use if connecting to Azure or encrypting data
    trustServerCertificate: true, // Use in local development
  },
};

// Create and export a connection pool
const poolPromise = new sql.ConnectionPool(dbConfig)
  .connect()
  .then((pool) => {
    console.log("Connected to SQL Server");
    return pool;
  })
  .catch((err) => {
    console.error("Database connection failed! Bad config: ", err);
    throw err;
  });

module.exports = {
  sql,
  poolPromise,
};
