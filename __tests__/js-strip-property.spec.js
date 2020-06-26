const stripProperty = require('../src/js-strip-property');

describe('Strip Property', () => {
  test('should return an object with 1 property ', () => {
    const obj = {
      foo: 3,
      bar: 3,
    };
    const response = stripProperty(obj, 'bar');
    expect(response).toEqual({
      foo: 3,
    });
  });

  test('should return the same object ', () => {
    const obj = {
      foo: 3,
      bar: 3,
    };
    const response = stripProperty(obj, 'baz');
    expect(response).toEqual({
      foo: 3,
      bar: 3,
    });
  });
});
