import request from 'supertest';
import app from '../src/app'; // Import your Express app

describe('Health Check Endpoint', () => {
  it('should return the server status and API version', async () => {
    const response = await request(app).get('/api/v1/health');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('status', 'OK');
    expect(response.body).toHaveProperty('uptime');
    expect(response.body).toHaveProperty('timestamp');
    expect(response.body).toHaveProperty('version', '1.0.0');
  });
});

