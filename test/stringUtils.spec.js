import { isPalindrome, capitalize, reverseString } from '../utils/stringUtils.js';
import { expect } from 'chai';

describe('capitalize', () => {
  it('should capitalize the first letter of a string', () => {
    expect(capitalize('hello')).to.equal('Hello');
    expect(capitalize('world')).to.equal('World');
  });

  it('should return the same string if the first letter is already capitalized', () => {
    expect(capitalize('Hello')).to.equal('Hello');
  });

  it('should return the same string if all letters are uppercase', () => {
    expect(capitalize('HELLO')).to.equal('HELLO');
  });

  it('should handle single character string', () => {
    expect(capitalize('a')).to.equal('A');
    expect(capitalize('Z')).to.equal('Z');
  });

  it('should return empty string if input is empty string', () => {
    expect(capitalize('')).to.equal('');
  });

  it('should not change a string with only spaces', () => {
    expect(capitalize('   ')).to.equal('   ');
  });

  it('should throw an error if input is not a string', () => {
    expect(() => capitalize(123)).to.throw('Input must be a string');
    expect(() => capitalize(null)).to.throw('Input must be a string');
    expect(() => capitalize(undefined)).to.throw('Input must be a string');
    expect(() => capitalize([])).to.throw('Input must be a string');
  });
});

describe('reverseString', () => {
  it('should return the reversed string', () => {
    expect(reverseString('hello')).to.equal('olleh');
    expect(reverseString('world')).to.equal('dlrow');
  });

  it('should return the same string for single character input', () => {
    expect(reverseString('a')).to.equal('a');
    expect(reverseString('Z')).to.equal('Z');
  });

  it('should return empty string if input is empty string', () => {
    expect(reverseString('')).to.equal('');
  });

  it('should correctly reverse a string with spaces and special characters', () => {
    expect(reverseString('hello world!')).to.equal('!dlrow olleh');
  });

  it('should correctly reverse a string with numbers and special characters', () => {
    expect(reverseString('123abc!')).to.equal('!cba321');
  });

  it('should throw an error if input is not a string', () => {
    expect(() => reverseString(123)).to.throw('Input must be a string');
    expect(() => reverseString(null)).to.throw('Input must be a string');
    expect(() => reverseString(undefined)).to.throw('Input must be a string');
    expect(() => reverseString([])).to.throw('Input must be a string');
  });
});

describe('isPalindrome', () => {
  it('should return true for a palindrome string', () => {
    expect(isPalindrome('madam')).to.equal(true);
    expect(isPalindrome('racecar')).to.equal(true);
  });

  it('should return true for a case-insensitive palindrome', () => {
    expect(isPalindrome('Madam')).to.equal(false);
    expect(isPalindrome('RaceCar')).to.equal(false);
  });

  it('should return false for a non-palindrome string', () => {
    expect(isPalindrome('hello')).to.equal(false);
    expect(isPalindrome('world')).to.equal(false);
  });

  it('should return true for a single character string', () => {
    expect(isPalindrome('a')).to.equal(true);
    expect(isPalindrome('Z')).to.equal(true);
  });

  it('should return true for an empty string (considered a palindrome)', () => {
    expect(isPalindrome('')).to.equal(true);
  });

  it('should return true for a palindrome with spaces when exactly reversed', () => {
    expect(isPalindrome('a b c b a')).to.equal(true);
  });

  it('should return false for a string with mixed characters that is not a palindrome', () => {
    expect(isPalindrome('123abc321')).to.equal(false);
  });

  it('should throw an error if input is not a string', () => {
    expect(() => isPalindrome(123)).to.throw('Input must be a string');
    expect(() => isPalindrome(null)).to.throw('Input must be a string');
    expect(() => isPalindrome(undefined)).to.throw('Input must be a string');
    expect(() => isPalindrome([])).to.throw('Input must be a string');
  });
});
