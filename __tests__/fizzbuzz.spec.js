const generateFizzBuzz = require('../src/fizzbuzz');

describe('FizzBuzz', () => {
  it('should return a FizzBuzz sequence for input 15', () => {
    const fizzBuzz = generateFizzBuzz(15);

    expect(fizzBuzz).toHaveLength(15);
    expect(fizzBuzz).toEqual([
      1,
      2,
      'Fizz',
      4,
      'Buzz',
      'Fizz',
      7,
      8,
      'Fizz',
      'Buzz',
      11,
      'Fizz',
      13,
      14,
      'FizzBuzz',
    ]);
  });

  it('should not contain FizzBuzz for input 12', () => {
    const fizzBuzz = generateFizzBuzz(12);

    expect(fizzBuzz).toHaveLength(12);
    expect(fizzBuzz).not.toContain('FizzBuzz');
  });

  it('should return the message "erro" if input is an string', () => {
    const fizzBuzz = generateFizzBuzz('XXX');

    expect(fizzBuzz).toBe('erro');
  });
});
