import request from 'supertest';
import app from '../src/app'; // Ensure this path points to your app.ts file

describe('Health Check Endpoint', () => {
  it('should return server health status', async () => {
    const response = await request(app).get('/api/v1/health');

    // Assertions
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('status', 'OK');
    expect(response.body).toHaveProperty('uptime');
    expect(response.body).toHaveProperty('timestamp');
    expect(response.body).toHaveProperty('version', '1.0.0');

    // Validate the types of some properties
    expect(typeof response.body.uptime).toBe('number');
    expect(typeof response.body.timestamp).toBe('string');
  });
});

