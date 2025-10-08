import request from 'supertest';
import app from '../index.js';

describe("API Users", () => {
  it("GET /users should return all users", async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it("POST /users should create a user", async () => {
    const res = await request(app)
      .post('/users')
      .send({ name: "Alice", email: "alice@example.com" });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id");
  });
  it("PUT /users/:id should update a user", async () => {
    const userRes = await request(app).get('/users');
    const id = userRes.body[0].id;
    const res = await request(app)
      .put(`/users/${id}`)
      .send({ name: "Bob" });
    expect(res.body.name).toBe("Bob");
  });
});
