const express = require("express");
const { poolPromise, sql } = require("../config/dbConfig");

const router = express.Router();

// Get all users
router.get("/users", async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query("SELECT * FROM Users");
    res.json(result.recordset);
  } catch (err) {
    console.error("SQL error", err);
    res.status(500).send("An error occurred while fetching users.");
  }
});

// Add a new user
router.post("/users", async (req, res) => {
  const { name, email } = req.body;

  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("Name", sql.NVarChar, name)
      .input("Email", sql.NVarChar, email)
      .query("INSERT INTO Users (Name, Email) VALUES (@Name, @Email)");

    res.status(201).send("User added successfully");
  } catch (err) {
    console.error("SQL error", err);
    res.status(500).send("An error occurred while adding the user.");
  }
});

module.exports = router;
