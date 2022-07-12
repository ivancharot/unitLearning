const Calculator = require('../index');
const {expect} = require('chai');

describe(`positive scenarios for add function`, () => {
  let calculator;
  beforeEach(()=>{
    calculator = new Calculator();
  });
  afterEach(() => {
    calculator = null;
  });
  it(`should return sum of incoming numbers`, () => {
    expect(calculator.add(3, 10)).to.be.equal(13);
  });
  // eslint-disable-next-line max-len
  it(`should return sum of incoming numbers if there are more than 2 of them`, () => {
    expect(calculator.add(1, 2, 3)).to.be.equal(6);
  });
  it(`should return number if it's only one`, () => {
    expect(calculator.add(3)).to.be.equal(3);
  });
});

describe(`negative scenarios for add function`, () => {
  let calculator;
  beforeEach(() =>{
    calculator = new Calculator();
  });
  afterEach(() => {
    calculator = null;
  });
  it(`throw error if incoming data isn't 'number'`, () => {
    expect(() => calculator.add('3', '4')).to.throw();
  });
});
