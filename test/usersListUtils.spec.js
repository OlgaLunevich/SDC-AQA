import { filterUsersByAge, findUserById, sortUsersByName, isEmailTaken } from '../utils/usersListUtils.js';
import { expect } from 'chai';

const users = [
  { id: 1, name: 'Olga', age: 25, email: 'olga@example.com' },
  { id: 2, name: 'Ivan', age: 30, email: 'ivan@example.com' },
  { id: 3, name: 'Maria', age: 20, email: 'maria@example.com' },
  { id: 4, name: 'egor', age: 18, email: 'egoregor@example.com' },
];

describe('filterUsersByAge', () => {
  it('should filter users within age range', () => {
    const result = filterUsersByAge(users, 20, 30);
    expect(result.map(u => u.name)).to.have.members(['Olga', 'Ivan', 'Maria']);
  });

  it('should return user on exact minAge and maxAge boundaries', () => {
    const result = filterUsersByAge(users, 18, 25);
    expect(result.map(u => u.name)).to.include.members(['egor', 'Olga']);
  });

  it('should return all users if minAge is 0 and maxAge is Infinity', () => {
    const result = filterUsersByAge(users, 0, Infinity);
    expect(result.length).to.equal(users.length);
  });

  it('should return empty array if no one fits', () => {
    expect(filterUsersByAge(users, 100, 120)).to.deep.equal([]);
  });

  it('should return empty array for empty user list', () => {
    expect(filterUsersByAge([], 18, 30)).to.deep.equal([]);
  });

  it('should throw if users is not an array', () => {
    expect(() => filterUsersByAge(null, 18, 30)).to.throw();
  });

  it('should ignore users without age field', () => {
    const expandedUsers = [...users, { id: 5, name: 'Alex' }];
    const result = filterUsersByAge(expandedUsers, 18, 30);
    expect(result).to.not.deep.include({ id: 5, name: 'Alex' });
  });

  it('should throw an error if users is not an array', () => {
    expect(() => sortUsersByName(null)).to.throw('Users must be an array');
    expect(() => sortUsersByName(undefined)).to.throw('Users must be an array');
    expect(() => sortUsersByName(123)).to.throw('Users must be an array');
    expect(() => sortUsersByName({ name: 'Olga' })).to.throw('Users must be an array');
    expect(() => sortUsersByName('not an array')).to.throw('Users must be an array');
  });

});

describe('sortUsersByName', () => {
  it('should sort users alphabetically by name )', () => {
    const result = sortUsersByName(users);
    // Сортировка с учётом регистра: заглавные буквы раньше строчных
    expect(result.map(u => u.name)).to.deep.equal(['egor', 'Ivan', 'Maria', 'Olga']);
  });

  it('should sort users with non-alphabetic characters in name', () => {
    const usersWithSymbols = [...users, { id: 5, name: '@lex', age: 40, email: 'alex@example.com' }];
    const result = sortUsersByName(usersWithSymbols);
    expect(result[0].name).to.equal('@lex');
  });

  it('should handle mixed case names using localeCompare', () => {
    const result = sortUsersByName(users);
    expect(result.map(u => u.name)[0]).to.equal('egor');
  });

  it('should throw if users is not an array', () => {
    expect(() => sortUsersByName(null)).to.throw();
  });

  it('should work with empty user array', () => {
    expect(sortUsersByName([])).to.deep.equal([]);
  });

  it('should sort names with mixed unicode characters', () => {
    const unicodeUsers = [
      { id: 1, name: 'Álvaro', age: 25, email: 'a@a.com' },
      { id: 2, name: 'Aarón', age: 25, email: 'b@b.com' },
    ];
    const result = sortUsersByName(unicodeUsers);
    expect(result.map(u => u.name)).to.deep.equal(['Aarón', 'Álvaro']);
  });

  it('should not modify the original array', () => {
    const copy = [...users];
    sortUsersByName(users);
    expect(users).to.deep.equal(copy);
  });
});

describe('findUserById', () => {
  it('should return the user with the given id', () => {
    const result = findUserById(users, 2);
    expect(result.name).to.equal('Ivan');
  });

  it('should find user with id 0 if exists', () => {
    const withZeroId = [{ id: 0, name: 'Zero', age: 20, email: 'z@z.com' }, ...users];
    const result = findUserById(withZeroId, 0);
    expect(result.name).to.equal('Zero');
  });

  it('should handle users with missing id field', () => {
    const mixed = [...users, { name: 'Alex', email: 'alex@nowhere.com' }];
    expect(findUserById(mixed, 999)).to.equal(null);
  });

  it('should return null if user with id is not found', () => {
    expect(findUserById(users, 999)).to.equal(null);
  });

  it('should return null if id is null or undefined', () => {
    expect(findUserById(users, null)).to.equal(null);
    expect(findUserById(users, undefined)).to.equal(null);
  });

  it('should return null if id is NaN or invalid', () => {
    expect(findUserById(users, 'abc')).to.equal(null);
  });

  it('should throw if users is not an array', () => {
    expect(() => findUserById(null, 2)).to.throw();
  });

});

describe('isEmailTaken', () => {
  it('should return true if email is found', () => {
    expect(isEmailTaken(users, 'ivan@example.com')).to.be.true;
  });

  it('should return false if email is not in the list', () => {
    expect(isEmailTaken(users, 'nobody@example.com')).to.be.false;
  });

  it('should return false for empty email string', () => {
    expect(isEmailTaken(users, '')).to.be.false;
  });

  it('should be case-sensitive by default', () => {
    expect(isEmailTaken(users, 'IVAN@example.com')).to.be.false;
  });

  it('should return false for null or undefined email', () => {
    expect(isEmailTaken(users, null)).to.be.false;
    expect(isEmailTaken(users, undefined)).to.be.false;
  });

  it('should return false if user has no email field', () => {
    const expandedUsers = [...users, { id: 5, name: 'Alex', age: 33 }];
    expect(isEmailTaken(expandedUsers, 'alex@nowhere.com')).to.be.false;
  });

  it('should return true if email exists multiple times', () => {
    const duplicates = [...users, { id: 5, name: 'Peter', age: 22, email: 'olga@example.com' }];
    expect(isEmailTaken(duplicates, 'olga@example.com')).to.be.true;
  });

  it('should throw if users is not an array', () => {
    expect(() => isEmailTaken(null, 'ivan@example.com')).to.throw('Users must be an array');
    expect(() => isEmailTaken({}, 'ivan@example.com')).to.throw('Users must be an array');
    expect(() => isEmailTaken('not an array', 'ivan@example.com')).to.throw('Users must be an array');
  });
});

