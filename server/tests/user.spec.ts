import app from "../index";
import request from "supertest";
import { StatusCodes } from "http-status-codes";

describe("App should be up", () => {
  it("return fixed text on /", (done) => {
    request(app)
      .get("/")
      .expect(StatusCodes.OK)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).toMatch("Express + Typescript Server OK");
        done();
      });
  });
});

describe("Basic CRU on User", () => {
  it.todo(
    "Create user"
    /*
Paul Thomas
luke.moore@anderson.org
paulthmas
e48ef76f

*/
  );
  it("Get user", async () => {
    const reqBody = { username: "Lcruz" };
    const resBody = {
      user: {
        firstname: "Leilani",
        lastname: "Cruz",
        role: ["ADMIN"],
        password: "abc123",
        username: "Lcruz",
        email: null,
        id: 3,
      },
    };
    await request(app)
      .post("/user")
      .send(reqBody)
      .expect(StatusCodes.ACCEPTED)
      .then((res) => {
        console.log(res.body);
        expect(res.body).toMatchObject(resBody);
      });
  });

  it.todo("Update user");
});
