const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Define the root route
app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

// Use Routes
//app.use("/auth", authRoutes);

// Start Server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
