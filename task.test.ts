import request from "supertest";
import { AppDataSource } from "./src/data-source";
import app from "./src/server";

beforeAll(async () => {
  await AppDataSource.initialize();
});

afterAll(async () => {
  await AppDataSource.destroy();
});

describe("Task API", () => {
  it("should create a new task", async () => {
    const res = await request(app).post("/api").send({
      name: "Huy Đi Test",
      startDate: "2025-10-01",
      endDate: "2025-10-02",
    });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("id");
  });

  it("should get all tasks", async () => {
    const res = await request(app).get("/api");
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("should get a task by id", async () => {
    const task = await request(app).post("/api").send({
      name: "Task to get",
      startDate: "2025-10-01",
      endDate: "2025-10-02",
    });

    const taskId = task.body.id;
    const res = await request(app).get(`/api/${taskId}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("id", taskId);
  });

  it("should update a task", async () => {
    const task = await request(app).post("/api").send({
      name: "Task to update",
    });
    const taskId = task.body.id;

    const res = await request(app).put(`/api/${taskId}`).send({
      name: "Updated Task",
    });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("name");
  });

  it("should delete a task", async () => {
    const task = await request(app).post("/api").send({
      name: "Task to delete",
    });
    const taskId = task.body.id;

    const res = await request(app).delete(`/api/${taskId}`);
    expect(res.statusCode).toEqual(200);
  });
});
