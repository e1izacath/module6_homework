function sum(firstNumber) {
  return function (secondNumber) {
      return firstNumber + secondNumber;
  };
}

firstNumber = + prompt ('Enter the first number');
secondNumber = + prompt ('Enter the second number');

console.log(sum(firstNumber)(secondNumber)); 