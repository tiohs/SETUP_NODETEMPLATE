import request from 'supertest';

const baseUrl = 'http://localhost:4000';

describe('GET /', () => {
  it('Should return 200', async () => {
    const response = await request(baseUrl).get('/');

    expect(response.statusCode).toBe(200);
  });
  it('Should return Hello World! Init your project nodejs !', async () => {
    const response = await request(baseUrl).get('/');

    expect(response.body.message).toBe(
      'Hello World! Init your project nodejs !',
    );
  });
});
