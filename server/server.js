const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Sample API route
app.get("/", (req, res) => {
  res.send("Hello, World! Node.js backend is running.");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
