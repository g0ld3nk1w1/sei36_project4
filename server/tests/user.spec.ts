import app from "../index";
import request from "supertest";
import { StatusCodes } from "http-status-codes";

//So this really inserts into the DB. Theorectically should be a mocked thingy?

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

  /*
  it("Create user", async () => {
    const reqBody = {
        firstname: "Paul",
        lastname: "Thomas",
        email:"luke.moore@anderson.org",
        username: "paulthmas",
        password: "e48ef76f",
        role: ["CONSUMER"]
    }

    await request(app)
    .post("/user")
    .send(reqBody)
    .expect(StatusCodes.ACCEPTED)
    // .then( res => {
    //     console.log(res.body);
    //     // expect(res.body);
    // })
  });
  */

  it.todo("Create user failure scenario");
  it("Get user", async () => {
    const reqBody = { username: "Lcruz" };
    const resBody = {
        firstname: "Leilani",
        lastname: "Cruz",
        role: ["ADMIN"],
        password: "abc123",
        username: "Lcruz",
        email: null,
        id: 1,
      };
    await request(app)
      .get("/user")
      .send(reqBody)
      .expect(StatusCodes.ACCEPTED)
      .then((res) => {
        // console.log(res.body);
        expect(res.body).toMatchObject(resBody);
      });
  });

  it("Update user if username exists PUT request", async () => {
    const reqBody = {
      username: "callulas",
      email: "douglas.callum@gmail.com"
    };
    const resBody = {};
    await request(app)
    .put("/user")
    .send(reqBody)
    .expect(StatusCodes.OK)
    .then(res => {
      const {body} = res;
      expect(body.email).toBe("douglas.callum@gmail.com");
      expect(body.lastname).toBe("Douglas");
    }).catch(err => console.log(err));
  });

//delete Object.[]
});
