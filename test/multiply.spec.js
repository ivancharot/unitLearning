const Calculator = require('../index');
const {expect} = require('chai');

describe(`Positive scenarios for multiply function`, () => {
  let calculator;
  beforeEach(() => calculator = new Calculator());
  afterEach(() => calculator = null);
  it(`Should return the result of two multiplied numbers`, () =>{
    expect(calculator.multiply(20, 5)).to.be.equal(100);
  });
  it(`Shuold return the result of multiplication of incoming numbers`, () =>{
    expect(calculator.multiply(2, 3, 4)).to.be.equal(24);
  });
});

describe(`Negative scenarios for multiply function`, () => {
  let calculator;
  beforeEach(() => calculator = new Calculator());
  afterEach(() => calculator = null);
  it(`Shoud throw error if there're arguments less than 2`, () =>{
    expect(() => calculator.multiply(9)).to.throw();
  });
  it(`Should throw error when incoming parameters aren't numbers`, () =>{
    expect(() => calculator.multiply('2', '3')).to.throw();
  });
});
