require("dotenv").config();
const express = require("express");
const connectDB = require("./config/database.js");
const config = require("./config/config.js");
const globalErrorHandler = require("./middlewares/globalErrorHandler.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

const PORT = config.port;
connectDB();

// Middleware
app.use(express.json()); // parse incoming req in json format
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Root Endpoint
app.get("/", (req, res) => {
  res.json({ message: "Hello from POS Server!" });
});

// Other End points
app.use("/api/user", require("./routes/userRoute.js"));
app.use("/api/product", require("./routes/productRoute.js"));
app.use("/api/customer", require("./routes/customerRoute.js"));
app.use("/api/supplier", require("./routes/supplierRoute.js"));
app.use("/api/RFProcessing", require("./routes/refundProcessingRoute.js"));

// Global Error Handler
app.use(globalErrorHandler);

// Server
app.listen(PORT, () => {
  console.log(`☑️ POS Server is listening on port ${PORT}`);
});
