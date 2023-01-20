// import calculate from "../logic/calculate";
// describe('Test calculate.js and operate.js logic', () => {
//   test('Should return a object', () => {
//     const obj = {
//       total: null,
//       next: null,
//       operation: null,
//     };

//     const result = calculate(obj, '5');
//     expect(typeof result).toBe('object');
//   });

//   test('Should return a 5', () => {
//     const obj = {
//       total: null,
//       next: null,
//       operation: null,
//     };

//     const result = calculate(obj, '5');
//     expect(result.next).toBe('5');
//   });

//   test('Should return a 10', () => {
//     const obj = {
//       total: '5',
//       next: '5',
//       operation: '+',
//     };

//     const result = calculate(obj, '=');
//     expect(result.total).toBe('10');
//   });

//   test('Should return a 0', () => {
//     const obj = {
//       total: '5',
//       next: '5',
//       operation: '-',
//     };

//     const result = calculate(obj, '=');
//     expect(result.total).toBe('0');
//   });

//   test('Should return a 25', () => {
//     const obj = {
//       total: '5',
//       next: '5',
//       operation: 'x',
//     };

//     const result = calculate(obj, '=');
//     expect(result.total).toBe('25');
//   });

//   test('Should return 5', () => {
//     const obj = {
//       total: '25',
//       next: '5',
//       operation: '÷',
//     };

//     const result = calculate(obj, '=');
//     expect(result.total).toBe('5');
//   });
// });

import calculate from '../logic/calculate';

describe('Testing the correctness of the calculate and operate logic', () => {
  let obj;

  beforeEach(() => {
    obj = {
      total: null,
      next: null,
      operation: null,
    };
  });

  test('testing that the result is of object type', () => {
    const result = calculate(obj, '5');
    expect(result).toEqual(expect.any(Object));
  });

  test("testing that the result is '5'", () => {
    const result = calculate(obj, '5');
    expect(result.next).toBe('5');
  });

  test("testing that the result is '10'", () => {
    obj.total = '5';
    obj.next = '5';
    obj.operation = '+';
    const result = calculate(obj, '=');
    expect(result.total).toBe('10');
  });

  test("testing that the result is '0'", () => {
    obj.total = '5';
    obj.next = '5';
    obj.operation = '-';
    const result = calculate(obj, '=');
    expect(result.total).toBe('0');
  });

  test("testing that the result is '25'", () => {
    obj.total = '5';
    obj.next = '5';
    obj.operation = 'x';
    const result = calculate(obj, '=');
    expect(result.total).toBe('25');
  });

  test("testing that the result is'5'", () => {
    obj.total = '25';
    obj.next = '5';
    obj.operation = '÷';
    const result = calculate(obj, '=');
    expect(result.total).toBe('5');
  });
});
