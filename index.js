/**
 *
 *
 * @class Calculator
 */
class Calculator {
  /**
     * Creates an instance of Calculator.
     * @memberof Calculator
     */
  constructor() {
  };

  /**
   *
   *
   * @param {Iterable<number>} params
   * @return {number} sum of all incoming numbers
   * @memberof Calculator
   */
  add(...params) {
    const parameters = Array.from(params);
    if (parameters.every((el) => typeof el === 'number')) {
      return parameters.reduce((acc, el) => acc+=el);
    } else throw new Error(`Type of incoming parameters is not equal 'Number'`);
  }

  /**
   *
   *
   * @param {Iterable<number>} params
   * @return {number} multiplied all incoming numbers
   * @memberof Calculator
   */
  multiply(...params) {
    const parameters = Array.from(params);
    if (parameters.length<2) {
      throw new Error(`Not enough parameters to multiply`);
    };
    if (parameters.every((el) => typeof el === 'number')) {
      return parameters.reduce((acc, el) => acc*=el);
    } else throw new Error(`Type of incoming parameters is not equal 'Number'`);
  }
}

module.exports = Calculator;

