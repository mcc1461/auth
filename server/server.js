const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const dbConnection = require("./config/dbConnection");
const userRoutes = require("./routes/userRoutes");

dotenv.config();

// Connect to MongoDB
dbConnection();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 8002;

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong", error: err.message });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
