// src/config/swagger.ts

import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const setupSwagger = (app: Express) => {
  const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'API Documentation',
        version: '1.0.0',
        description: 'API documentation for the project',
      },
    },
    apis: ['./src/routes/*.ts'], // Adjust path to your route files
  };

  const swaggerSpec = swaggerJSDoc(options);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

export default setupSwagger;
