require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const { errorHandler, notFound } = require("./middleware/errorHandler");
const contactRoutes = require("./routes/contactRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Security & logging
app.use(helmet());
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));

// CORS
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:8080",
    credentials: true,
  })
);

// Rate limiting
app.use(
  "/api",
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: { success: false, message: "Too many requests. Please try again later." },
  })
);

// Body parsing
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// Health check (both paths for compatibility)
app.get(["/health", "/api/health"], (req, res) => {
  res.json({ status: "ok", service: "VINOFYX API", version: "1.0.0" });
});

// API routes (v1)
app.use("/api/v1/contact", contactRoutes);

// 404 + error handler
app.use(notFound);
app.use(errorHandler);

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`\n🚀 VINOFYX Backend running on port ${PORT}`);
    console.log(`   Environment: ${process.env.NODE_ENV || "development"}`);
    console.log(`   Health: http://localhost:${PORT}/api/health\n`);
  });
}

module.exports = app;
