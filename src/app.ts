import express, { Express } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

const app = express();
app.use(express.json());

// Swagger setup
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'API documentation for the Express app',
    },
  },
  apis: ['./src/app.ts'], // Adjust the path as needed
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /api/v1/health:
 *   get:
 *     summary: Health check endpoint
 *     description: Returns the server's health status, uptime, and version.
 *     responses:
 *       200:
 *         description: A JSON object containing the server status and details.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "OK"
 *                 uptime:
 *                   type: number
 *                   example: 3600
 *                 timestamp:
 *                   type: string
 *                   example: "2025-01-18T12:34:56.789Z"
 *                 version:
 *                   type: string
 *                   example: "1.0.0"
 */
app.get('/api/v1/health', (req, res) => {
  res.json({
    status: 'OK',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    version: '1.0.0',
  });
});

export default app;
