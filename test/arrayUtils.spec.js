import { findMax, findMin, removeDuplicates } from '../utils/arrayUtils.js';
import { expect } from 'chai';

describe('findMax', () => {
  it('should return the maximum value from an array of numbers', () => {
    expect(findMax([1, 2, 3, 10, 4])).to.equal(10);
    expect(findMax([-5, -1, -10])).to.equal(-1);
  });

  it('should return the maximum value when all elements are the same', () => {
    expect(findMax([5, 5, 5, 5])).to.equal(5);
  });

  it('should return the only value if array has one element', () => {
    expect(findMax([7])).to.equal(7);
  });

  it('should return Infinity when array contains Infinity', () => {
    expect(findMax([Infinity, 10, 2])).to.equal(Infinity);
  });

  it('should throw an error if input is not an array', () => {
    expect(() => findMax('hello, word!')).to.throw('Input must be an array');
    expect(() => findMax(123)).to.throw('Input must be an array');
    expect(() => findMax(null)).to.throw('Input must be an array');
  });

  it('should ignore NaN when looking for the maximum value', () => {
    expect(findMax([5, 10, NaN, 3])).to.equal(10);
  });

  it('should return -Infinity for an empty array (works like Math.max behavior)', () => {
    expect(findMax([])).to.equal(-Infinity);
  });
});

describe('findMin', () => {
  it('should return the minimum value from an array of numbers', () => {
    expect(findMin([1, 2, 3, -10, 4])).to.equal(-10);
    expect(findMin([-5, -1, -10])).to.equal(-10);
  });

  it('should return the minimum value when all elements are the same', () => {
    expect(findMin([5, 5, 5, 5])).to.equal(5);
  });

  it('should return the only value if array has one element', () => {
    expect(findMin([42])).to.equal(42);
  });

  it('should return -Infinity when array contains -Infinity', () => {
    expect(findMin([-Infinity, -10, -2])).to.equal(-Infinity);
  });

  it('should throw an error if input is not an array', () => {
    expect(() => findMin('hello, word!')).to.throw('Input must be an array');
    expect(() => findMin(undefined)).to.throw('Input must be an array');
    expect(() => findMin({})).to.throw('Input must be an array');
  });

  it('should ignore NaN when looking for the minimum value', () => {
    expect(findMin([5, 10, NaN, 3])).to.equal(3);
  });

  it('should return Infinity for an empty array (works like Math.min behavior)', () => {
    expect(findMin([])).to.equal(Infinity);
  });
});

describe('removeDuplicates', () => {
  it('should remove duplicates from array', () => {
    expect(removeDuplicates([1, 2, 2, 3, 3, 3])).to.deep.equal([1, 2, 3]);
  });

  it('should return same array if there are no duplicates', () => {
    expect(removeDuplicates([1, 2, 3])).to.deep.equal([1, 2, 3]);
  });

  it('should return empty array if input is empty', () => {
    expect(removeDuplicates([])).to.deep.equal([]);
  });

  it('should handle array with one element', () => {
    expect(removeDuplicates([7])).to.deep.equal([7]);
  });

  it('should work with mixed types (string, number)', () => {
    expect(removeDuplicates([1, '1', 1])).to.deep.equal([1, '1']);
  });

  it('should throw an error if input is not an array', () => {
    expect(() removeDuplicates('hello, word!')).to.throw('Input must be an array');
    expect(() => removeDuplicates(123)).to.throw('Input must be an array');
  });
})
