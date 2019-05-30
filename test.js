var sum = require('./sum');
var assert = require('assert');
describe("sum", function () {

  it("сумма 1+2 равна 3", function () {
    assert.equal(sum(1)(2)(), 3);
  });
  it("сумма 1+2+3 равна 6", function () {
    assert.equal(sum(1)(2)(3)(), 6);
  });
  it("сумма 1+2+3+4 равна 10", function () {
    assert.equal(sum(1)(2)(3)(4)(), 10);
  });
  it("сумма 1+2+3+4+5 равна 15", function () {
    assert.equal(sum(1)(2)(3)(4)(5)(), 15);
  });

});
