var numberOne;
var numberTwo;
var operation;
var result = false;

function multiplication(number1, number2) {

  return number1 * number2;

};

function sum(number1, number2) {

  return number1 + number2;

};

function subtraction(number1, number2) {

  return number1 - number2;

};

function division(number1, number2) {

  return number1 / number2;

};

do {

  operation = prompt("Qual operação você deseja realizar? 1 - Soma, 2 - Subtração, 3 - Multiplicação, 4 - Divisão ou 5 - Sair", "Digite aqui...");

  while (operation != 1 && operation != 2 && operation != 3 && operation != 4 && operation != 5) {

    alert("Opção Inválida!");
    operation = prompt("Qual operação você deseja realizar? 1 - Soma, 2 - Subtração, 3 - Multiplicação, 4 - Divisão ou 5 - Sair", "Digite aqui...");
    
  };

  if (operation == 5) {

    alert("Até a próxima.");
    break;

  } else {

    switch (operation) {
      case '1':
        numberOne = parseFloat(prompt("Informe o primeiro número para a soma:", "Digite aqui..."));
        numberTwo = parseFloat(prompt("Informe o segundo número para a soma:", "Digite aqui..."));
        result = sum(numberOne, numberTwo);
        alert(`O resultado da soma é ${result}`);
        break;
      case '2':
        numberOne = parseFloat(prompt("Informe o primeiro número para a subtração:", "Digite aqui..."));
        numberTwo = parseFloat(prompt("Informe o segundo número para a subtração:", "Digite aqui..."));
        result = subtraction(numberOne, numberTwo);
        alert(`O resultado da subtração é ${result}`);
        break;
      case '3':
        numberOne = parseFloat(prompt("Informe o primeiro número para a multiplicação:", "Digite aqui..."));
        numberTwo = parseFloat(prompt("Informe o segundo número para a multiplicação:", "Digite aqui..."));
        result = multiplication(numberOne, numberTwo);
        alert(`O resultado da multiplicação é ${result}`);
        break;
      case '4':
        numberOne = parseFloat(prompt("Informe o primeiro número para a divisão:", "Digite aqui..."));
        numberTwo = parseFloat(prompt("Informe o segundo número para a divisão:", "Digite aqui..."));
        result = division(numberOne, numberTwo);
        alert(`O resultado da divisão é ${result}`);
        break;
    };

  };

} while (operation == 1 || operation == 2 || operation == 3 || operation == 4);
