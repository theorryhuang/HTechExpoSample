const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS (allows Expo frontend to communicate with backend)
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Hello, World! Node.js backend is running.");
});

// API route for frontend
app.get("/api/data", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});
