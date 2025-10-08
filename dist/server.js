"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
const app = express();
// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(bodyParser.json());
//Root route
app.get("/", (req, res) => {
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
    .catch((err) => {
    console.error("❌ Failed to connect to DB:", err);
    process.exit(1);
});
//# sourceMappingURL=server.js.map