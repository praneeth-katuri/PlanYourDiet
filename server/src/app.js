const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const dietRoutes = require("./routes/diet.routes");

const app = express();
//Middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());

// Routes here
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/diet", dietRoutes);

module.exports = app;
