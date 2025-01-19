import express, { Express } from 'express'; // Corrected the import statement for express
import setupSwagger from 'config/swagger';  // Corrected the import path
  // Ensure 'config/swagger' points to the correct path

const app: Express = express(); // Use Express type to define the app instance

// Health check route
app.get('/health', (request, res) => {
  res.send({
    status: 'OK',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    version: '1.0.0',
  });
});

// Setup Swagger
setupSwagger(app);  // Setup Swagger after defining the routes

export default app;

