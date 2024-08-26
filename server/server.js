const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const dbConnection = require("./config/dbConnection");
const userRoutes = require("./routes/userRoutes");

const allowedOrigins = [
  process.env.CLIENT_URL,
  "http://localhost:3000",
  "http://127.0.0.1:3000",
  "http://localhost:5173",
  "http://127.0.0.1:5173",
];

// Connect to MongoDB
dbConnection();

// Middleware
app.use(express.json()); // Body parser middleware
app.use(cookieParser()); // Cookie parser middleware

// CORS
app.use(
  cors({
    origin: function (origin, callback) {
      console.log("Request origin:", origin); // Log the incoming origin
      if (!origin) {
        callback(null, true);
        return;
      }
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
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

const PORT = process.env.PORT || 8002;
const HOST = process.env.HOST || "http://127.0.0.1";

app.listen(PORT, () => {
  console.log(`Server running on ${HOST}:${PORT}`);
});
