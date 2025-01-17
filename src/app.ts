import express, { Application } from "express";
import healthcheckRoutes from "./api/v1/routes/healthcheck";


const app: Application = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/v1", healthcheckRoutes);

export default app;

