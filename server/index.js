const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const uploadRoutes = require("./routes/upload");
const paymentRoutes = require("./routes/Payment");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api", uploadRoutes);
app.use("/api/payment", paymentRoutes);

// MongoDB connect (only once per cold start)
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err.message));

// ✅ Export the app (Vercel handles listen)
module.exports = app;
