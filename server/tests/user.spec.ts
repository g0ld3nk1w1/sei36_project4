import app from '../index';
import request from "supertest";
import { StatusCodes } from 'http-status-codes';


describe('App should be up', () => {
    
    it('should return fixed text', (done) => {
        request(app)
        .get("/")
        .expect(StatusCodes.OK)
        .end((err, res) => {
            if(err) return done(err)
            expect(res.text).toMatch("Express + Typescript Server OK")
            done()
        })
    });

    afterAll( done => {
        done();
    }

    )
})

// describe('Basic CRUD on User', () => {
// })