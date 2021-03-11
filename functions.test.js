import {
  capitalize, caesar, arrAnalyzer, reverseString, calculator,
} from './functions';

test('Capitalizes the first letter of a string', () => {
  expect(capitalize('delta')).toBe('Delta');
});

test('Reverses a given string', () => {
  expect(reverseString('Delta')).toBe('atleD');
});

test('The calculator should not take string inputs', () => {
  expect(calculator('a', 3, 'add')).toBe('You must input a number on both variables');
});

test('The calculator should sum two numbers', () => {
  expect(calculator(5, 3, 'add')).toBe(8);
});

test('The calculator should substract two numbers', () => {
  expect(calculator(5, 3, 'substract')).toBe(2);
});

test('The calculator should multiply two numbers', () => {
  expect(calculator(5, 3, 'multiply')).toBe(15);
});

test('The calculator should divide two numbers', () => {
  expect(calculator(10, 2, 'divide')).toBe(5);
});

test('The calculator should not divide by 0', () => {
  expect(calculator(5, 0, 'divide')).toBe('error');
});

test('The calculator should substract two numbers', () => {
  expect(calculator(5, 3, 'substract')).toBe(2);
});

test('The cypher shiftes by the desired amount the letter', () => {
  expect(caesar('a', 3)).toBe('d');
});

test('The cypher succefully encrypts a message', () => {
  expect(caesar('lorem Ipsus', 5)).toBe('qtwjr Nuxzx');
});

test('The analyzer only takes numeric arrays', () => {
  expect(arrAnalyzer(['a', 'b', 'c', 2, 3, 4])).toBe('invalid array');
});

test('The analyzer returns an object  with the average value of the array', () => {
  expect(arrAnalyzer([1, 2, 3, 4, 5, 6]).average).toBe(3.5);
});

test('The analyzer returns an object  with the minimum element of the array', () => {
  expect(arrAnalyzer([1, 2, 3, 4, 5, 6]).minimum).toBe(1);
});

test('The analyzer returns an object  with the maximum element of the array', () => {
  expect(arrAnalyzer([1, 2, 3, 4, 5, 6]).maximum).toBe(6);
});

test('The analyzer returns an object  with the length of the array', () => {
  expect(arrAnalyzer([1, 2, 3, 4, 5, 6]).length).toBe(6);
});