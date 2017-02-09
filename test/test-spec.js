const chai = require('chai');
const should = chai.should();

describe('bubbleSort', () => {

  it('should be a function', () => {
    bubbleSort.should.be.a('function');
  });

  it('should return an array', () => {
    let arr = [];
    arr.should.be.an('array');
  });

  it('should sort [5, 1, 4, 2, 8] into [1, 2, 4, 5, 8]', () => {
    let numbers = [5, 1, 4, 2, 8];
    numbers.should.deep.equal([1, 2, 4, 5, 8]);
  });

});