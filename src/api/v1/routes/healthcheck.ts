import { Router, Request, Response } from "express";

const router = Router();

// Record the server start time
const serverStartTime = Date.now();

// Health check endpoint
router.get("/health", (req: Request, res: Response) => {
  const uptime = Math.floor((Date.now() - serverStartTime) / 1000); // Uptime in seconds
  const response = {
    status: "OK",
    uptime: uptime,
    timestamp: new Date().toISOString(),
    version: "1.0.0", // Replace with your API version
  };
  res.status(200).json(response);
});

export default router;
