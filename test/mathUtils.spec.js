import { add,subtract,multiply,divide } from '../utils/mathUtils.js';
import { expect } from 'chai';

describe('add(a, b)', () => {

  it('should return correct result for two positive numbers', () => {
    expect(add(1, 2)).to.equal(3);
  });

  it('should return correct result for one positive and one negative number', () => {
    expect(add(1, -2)).to.equal(-1);
    expect(add(-5, 2)).to.equal(-3);
  });

  it('should return correct result for two negative numbers', () => {
    expect(add(-1, -2)).to.equal(-3);
  });

  it('should handle addition with zero', () => {
    expect(add(0, 12)).to.equal(12);
    expect(add(-1, 0)).to.equal(-1);
  });

  it('should return correct result for integers and decimals', () => {
    expect(add(-1.5, 1)).to.equal(-0.5);
    expect(add(3.4, 3)).to.equal(6.4);
  });

  it('should return correct result for two decimal numbers', () => {
    expect(add(5.5, 3.72)).to.be.closeTo(9.22, 0.001);
    expect(add(-1.5, 1.5)).to.equal(0);
  });

  it('should handle MAX_SAFE_INTEGER correctly', () => {
    expect(add(Number.MAX_SAFE_INTEGER, 0)).to.equal(Number.MAX_SAFE_INTEGER);
  });

  it('should handle MIN_VALUE correctly', () => {
    expect(add(Number.MIN_VALUE, 1)).to.equal(1 + Number.MIN_VALUE);
  });

  it('should return NaN for non-numeric inputs', () => {
    expect(add('a', 1)).to.be.NaN;
    expect(add(1, null)).to.be.NaN;
    expect(add(undefined, 2)).to.be.NaN;
    expect(add({}, 2)).to.be.NaN;
    expect(add([], 2)).to.be.NaN;
  });

  it('should return NaN when arguments are missing', () => {
    expect(add()).to.be.NaN;
    expect(add(2)).to.be.NaN;
  });
});

describe('subtract(a, b)', () => {

  it('should return correct result for two positive numbers', () => {
    expect(subtract(5, 1)).to.equal(4);
  });

  it('should return correct result for positive and negative combinations', () => {
    expect(subtract(1, -2)).to.equal(3);
    expect(subtract(-5, 2)).to.equal(-7);
  });

  it('should return correct result for two negative numbers', () => {
    expect(subtract(-1, -2)).to.equal(1);
  });

  it('should handle subtraction with zero', () => {
    expect(subtract(0, 12)).to.equal(-12);
    expect(subtract(0, -2)).to.equal(2);
  });

  it('should return correct result for integers and decimals', () => {
    expect(subtract(-1.5, 1)).to.equal(-2.5);
    expect(subtract(3.4, 3)).to.be.closeTo(0.4, 0.001);
  });

  it('should return correct result for two decimal numbers', () => {
    expect(subtract(5.5, 3.72)).to.be.closeTo(1.78, 0.001);
    expect(subtract(-1.5, 1.45)).to.be.closeTo(-2.95, 0.001);
  });

  it('should handle MAX_SAFE_INTEGER correctly', () => {
    expect(subtract(Number.MAX_SAFE_INTEGER, 1)).to.equal(Number.MAX_SAFE_INTEGER - 1);
  });

  it('should handle MIN_VALUE correctly', () => {
    expect(subtract(Number.MIN_VALUE, 1)).to.equal(Number.MIN_VALUE - 1);
  });

  it('should return NaN for non-numeric inputs', () => {
    expect(subtract('a', 1)).to.be.NaN;
    expect(subtract(1, null)).to.be.NaN;
    expect(subtract(undefined, 2)).to.be.NaN;
    expect(subtract({}, 2)).to.be.NaN;
    expect(subtract([], 2)).to.be.NaN;
  });

  it('should return NaN when arguments are missing', () => {
    expect(subtract()).to.be.NaN;
    expect(subtract(2)).to.be.NaN;
  });
});

describe('multiply(a, b)', () => {

  it('should return 6 when multiplying 2 and 3', () => {
    expect(multiply(2, 3)).to.equal(6);
  });

  it('should return 0 when multiplying any number by 0', () => {
    expect(multiply(0, 5)).to.equal(0);
    expect(multiply(7, 0)).to.equal(0);
  });

  it('should return negative result for positive * negative', () => {
    expect(multiply(-4, 5)).to.equal(-20);
    expect(multiply(3, -2)).to.equal(-6);
  });

  it('should return positive result for two negatives', () => {
    expect(multiply(-3, -3)).to.equal(9);
  });

  it('should handle very large numbers', () => {
    expect(multiply(Number.MAX_SAFE_INTEGER, 1)).to.equal(Number.MAX_SAFE_INTEGER);
  });

  it('should handle very small numbers', () => {
    expect(multiply(Number.MIN_VALUE, 1)).to.equal(Number.MIN_VALUE);
  });

  it('should handle zero edge case', () => {
    expect(multiply(0, 0)).to.equal(0);
  });

  it('should return NaN when passed a non-number', () => {
    expect(multiply('3', 2)).to.be.NaN;
    expect(multiply(null, 2)).to.be.NaN;
    expect(multiply(undefined, 2)).to.be.NaN;
    expect(multiply({}, 2)).to.be.NaN;
    expect(multiply([], 2)).to.be.NaN;
  });

  it('should return NaN if one or both args are missing', () => {
    expect(multiply()).to.be.NaN;
    expect(multiply(2)).to.be.NaN;
  });
});

describe('divide(a, b)', () => {

  it('should return correct result for two positive numbers', () => {
    expect(divide(6, 2)).to.equal(3);
  });

  it('should return correct result for one positive and one negative', () => {
    expect(divide(6, -2)).to.equal(-3);
    expect(divide(-9, 3)).to.equal(-3);
  });

  it('should return positive result for two negative numbers', () => {
    expect(divide(-8, -2)).to.equal(4);
  });

  it('should return 0 when numerator is 0', () => {
    expect(divide(0, 5)).to.equal(0);
  });

  it('should return decimal result when needed', () => {
    expect(divide(5, 2)).to.equal(2.5);
    expect(divide(1, 3)).to.be.closeTo(0.333, 0.001);
  });

  it('should handle very large numbers', () => {
    expect(divide(Number.MAX_SAFE_INTEGER, 1)).to.equal(Number.MAX_SAFE_INTEGER);
  });

  it('should handle very small numbers', () => {
    expect(divide(Number.MIN_VALUE, 1)).to.equal(Number.MIN_VALUE);
  });

  it('should throw an error when dividing by zero', () => {
    expect(() => divide(5, 0)).to.throw('Cannot divide by zero');
    expect(() => divide(0, 0)).to.throw('Cannot divide by zero');
  });

  it('should return NaN for non-numeric inputs', () => {
    expect(divide('a', 2)).to.be.NaN;
    expect(divide(undefined, 2)).to.be.NaN;
    expect(divide({}, 2)).to.be.NaN;
    expect(divide([], 2)).to.be.NaN;
  });

  it('should return NaN when the second argument is missing', () => {
    expect(divide(2)).to.be.NaN;
    expect(divide()).to.be.NaN;
  });
});
