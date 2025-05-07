const request = require("supertest");
const app = require("../src/app");

describe("Date API", () => {
  it("should return the current date in ISO shorthand format", async () => {
    const res = await request(app).get("/api/date");

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("date");
    expect(res.body).toHaveProperty("timestamp");

    // Validate the date is in ISO shorthand format (YYYY-MM-DD)
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    expect(datePattern.test(res.body.date)).toBe(true);

    // Validate the timestamp is a number and recent
    expect(typeof res.body.timestamp).toBe("number");

    // Current timestamp should be within 5 seconds of the returned timestamp
    const now = Date.now();
    expect(Math.abs(now - res.body.timestamp)).toBeLessThan(5000);

    // Check that the date is today's date
    const today = new Date();
    const todayFormatted = today.toISOString().split("T")[0];
    expect(res.body.date).toBe(todayFormatted);
  });

  it("should return a wrong date (one year ago) in ISO shorthand format", async () => {
    const res = await request(app).get("/api/wrong-date");

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("date");
    expect(res.body).toHaveProperty("timestamp");

    // Validate the date is in ISO shorthand format (YYYY-MM-DD)
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    expect(datePattern.test(res.body.date)).toBe(true);

    // Get today's date and the expected wrong date (one year ago)
    const today = new Date();
    const wrongDate = new Date();
    wrongDate.setFullYear(today.getFullYear() - 1);

    const wrongDateFormatted = wrongDate.toISOString().split("T")[0];
    const todayFormatted = today.toISOString().split("T")[0];

    // Verify the date is not today's date
    expect(res.body.date).not.toBe(todayFormatted);

    // Verify the date is one year ago
    expect(res.body.date).toBe(wrongDateFormatted);
  });
});
