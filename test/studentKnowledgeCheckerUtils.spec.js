import{ checkStudentKnowledge } from '../utils/studentKnowledgeCheckerUtil.js';
import { expect } from 'chai';

describe('checkStudentKnowledge', () => {

  it('should return true when all answers are correct and keys are in the same order', () => {
    const student = { q1: 'A', q2: 'B', q3: 'C' };
    const correct = { q1: 'A', q2: 'B', q3: 'C' };
    expect(checkStudentKnowledge(student, correct)).to.be.true;
  });

  it('should return false when at least one answer is incorrect', () => {
    const student = { q1: 'A', q2: 'B', q3: 'D' };
    const correct = { q1: 'A', q2: 'B', q3: 'C' };
    expect(checkStudentKnowledge(student, correct)).to.be.false;
  });

  it('should return false when keys are the same but in different order', () => {
    const student = { q2: 'B', q1: 'A', q3: 'C' };
    const correct = { q1: 'A', q2: 'B', q3: 'C' };
    expect(checkStudentKnowledge(student, correct)).to.be.false;
  });

  it('should return false when student has extra answers', () => {
    const student = { q1: 'A', q2: 'B', q3: 'C', q4: 'D' };
    const correct = { q1: 'A', q2: 'B', q3: 'C' };
    expect(checkStudentKnowledge(student, correct)).to.be.false;
  });

  it('should return false when student missed some answers', () => {
    const student = { q1: 'A', q2: 'B' };
    const correct = { q1: 'A', q2: 'B', q3: 'C' };
    expect(checkStudentKnowledge(student, correct)).to.be.false;
  });

  it('should return false if answers differ only by letter case', () => {
    const student = { q1: 'a' };
    const correct = { q1: 'A' };
    expect(checkStudentKnowledge(student, correct)).to.equal(false);
  });

  it('should return true for two empty objects (no questions)', () => {
    expect(checkStudentKnowledge({}, {})).to.be.true;
  });

  it('should return true for a single matching question-answer pair', () => {
    expect(checkStudentKnowledge({ q1: '42' }, { q1: '42' })).to.be.true;
  });

  it('should return false for a single question with wrong answer', () => {
    expect(checkStudentKnowledge({ q1: 'wrong' }, { q1: 'right' })).to.be.false;
  });

  it('should return true for two empty objects', () => {
    expect(checkStudentKnowledge({}, {})).to.equal(true);
  });

  it('should return false if answer types differ (string vs number)', () => {
    const student = { q1: '1' };
    const correct = { q1: 1 };
    expect(checkStudentKnowledge(student, correct)).to.equal(false);
  });

  it('should throw if inputs are not objects', () => {
    try {
      checkStudentKnowledge(null, null);
    } catch (e) {
      expect(e).to.be.instanceOf(TypeError);
      return;
    }
    throw new Error('Expected function to throw');
  });

});
