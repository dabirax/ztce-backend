import type { Application, Request, Response } from "express";
const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/db");
const attendeeRoutes = require("./routes/attendeeRoutes");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const path = require("path");

dotenv.config();



const app: Application = express();

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5173",
  "http://localhost:8081", 
  "https://ztce-frontend.onrender.com", 
];

// Middlewares
app.use(
  cors({
    origin: allowedOrigins, 
    methods: ["GET", "POST", "PUT", "DELETE"],    
  allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.options("/*", cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(bodyParser.json());

//Root route
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "TypeScript backend is running 🚀" });
});

// Attendee routes
app.use("/api/attendees", attendeeRoutes);


const swaggerDocument = YAML.load(path.join(__dirname, "../swagger.yaml"));

// Swagger route
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 5000;




// Connect DB first, then start server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Server running on port ${PORT}`);
    });
  })
  .catch((err: any) => {
    console.error("❌ Failed to connect to DB:", err);
    process.exit(1);
  });

