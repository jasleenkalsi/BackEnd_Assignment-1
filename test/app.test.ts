import request from 'supertest';
import app from '../src/app'; // Adjust the path to your Express app

describe('API Routes', () => {
  it('should return 200 and a message for GET /', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Welcome to the API!');
  });

  it('should return 404 for unknown routes', async () => {
    const response = await request(app).get('/nonexistent');
    expect(response.status).toBe(404);
  });
});
