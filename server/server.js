const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const dbConnection = require("./config/dbConnection");
const userRoutes = require("./routes/userRoutes");

dotenv.config();

// Connect to MongoDB
dbConnection();

// Initialize Express
const app = express();

// Middleware
app.use(express.json()); // Body parser middleware
app.use(cookieParser()); // Cookie parser middleware

// CORS Configuration
app.use(
  cors({
    origin: "https://authfe.vercel.app", // Removed the trailing slash
    credentials: true,
  })
);

// Routes
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/users", userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong", error: err.message });
});

// Start the server
const PORT = process.env.PORT || 8002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
