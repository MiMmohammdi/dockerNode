const chai = require("chai");
const chaiHttp = require("chai-http");
const assert = chai.assert;

const { getRandom, app } = require("./index");

chai.use(chaiHttp);

describe("Unit Test", () => {
  it("Should generate a random number between 0 and 100", () => {
    let random = getRandom();

    assert.isNotNull(random);
    assert.isNumber(random);
    assert.isAtLeast(random, 0);
    assert.isAtMost(random, 100);
  });
});

describe("Integration Test", () => {
  it("Gets random number from endpoint", (done) => {
    chai
      .request(app)
      .get("/")
      .end((err, res) => {
        assert.equal(res.statusCode, 200);
        assert.isNotNull(res.body.number);
        assert.isNumber(res.body.number);
        assert.isAtLeast(res.body.number, 0);
        assert.isAtMost(res.body.number, 100);
        done();
      });
  });
});
