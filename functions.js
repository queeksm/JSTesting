const arrAnalyzer = (array) => {
  let avg = 0;
  let min = array[0];
  let max = array[0];
  let sum = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (typeof array[index] !== 'number') {
      return 'invalid array';
    }
    if (array[index] <= min) {
      min = array[index];
    }
    if (array[index] >= max) {
      max = array[index];
    }
    sum += array[index];
  }
  avg = sum / array.length;

  const obj = {
    average: avg, minimum: min, maximum: max, length: array.length,
  };

  return obj;
};

const calculator = (a, b, operation) => {
  if (typeof a === 'number' && typeof b === 'number') {
    switch (operation) {
      case 'add':
        return a + b;
      case 'substract':
        return a - b;
      case 'multiply':
        return a * b;
      case 'divide':
        if (b === 0) {
          return 'error';
        }
        return a / b;
      default:
        return 'undefined operation';
    }
  }
  return 'You must input a number on both variables';
};

const capitalize = (string) => {
  const first = string.charAt(0);
  return string.replace(first, first.toUpperCase());
};

const caesar = (message, amount) => {
  if (amount < 0) {
    return caesar(message, amount + 26);
  }
  let output = '';

  for (let i = 0; i < message.length; i += 1) {
    let c = message[i];

    if (c.match(/[a-z]/i)) {
      const code = message.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
      }
    }
    output += c;
  }
  return output;
};

const reverseString = (string) => string.split('').reverse().join('');

export {
  caesar, reverseString, capitalize, calculator, arrAnalyzer,
};
