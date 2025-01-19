import { Router, Request, Response } from 'express';

const router = Router();

// Health check endpoint
router.get('/health', (req: Request, res: Response) => {
  const healthStatus = {
    status: 'OK',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    version: '1.0.0', // Replace with dynamic version if applicable
  };

  res.status(200).json(healthStatus);
});

export default router;
