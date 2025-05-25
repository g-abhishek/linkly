const server = require("../../../server");
const request = server("main");

describe("URLS Endpoints", () => {
  fit("Should test it", async () => {
    const result = await request.get("/urls/abc");
    expect(result.status).toBe(404);
    expect(result.body.message).toBe("URL not found");
  });
});
