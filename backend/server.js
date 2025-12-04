const express = require("express");
const cors = require("cors");
require("dotenv").config();

const sequelize = require("./config/db");
const User = require("./models/User");
const Task = require("./models/Task");

const authRoutes = require("./routes/auth");
const taskRoutes = require("./routes/tasks");

const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

// swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => res.send("Agadir Task Manager Backend"));

const PORT = process.env.PORT || 5000;

async function start() {
  try {
    await sequelize.authenticate();
    // sync models (for development). In prod use migrations.
    await sequelize.sync({ alter: true });
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  } catch (err) {
    console.error("Failed to start", err);
    process.exit(1);
  }
}

start();
