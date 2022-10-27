//Declaration of variables
let operation;
let num1;
let num2;
let result;

while (
  isNaN(operation) ||
  operation == null ||
  operation == "" ||
  operation > 4 ||
  operation < 0
) {
  //Enter operations
  enterOperations();
  if (operation > 4 || operation < 1) {
    alert("No se ha identificado la operación que desea realizar");
  }
}

//Verification is or isn't a number
while (
  isNaN(num1) ||
  num1 == null ||
  num1 == "" ||
  isNaN(num2) ||
  num2 == null ||
  num2 == ""
) {
  enterOperands();
}

//Funtions enter operations
function enterOperations() {
  operation = parseInt(
    prompt(
      "¿Qué operación deseas realizar?. Presione:\n 1 para Sumar \n 2 para Restar\n 3 para Multiplicar\n 4 para Dividir"
    )
  );
}

//Funtions enter operands
function enterOperands() {
  num1 = parseFloat(
    prompt("Ingrese el primer número con el que desea operar:")
  );
  num2 = parseFloat(
    prompt("Ingrese el segundo número con el que desea operar:")
  );
}

//Declaration Funtion Add
const add = (num1, num2) => {
  return num1 + num2;
};

//Declaration Funtion Substract
const substract = (num1, num2) => {
  return num1 - num2;
};

//Declaration Funtion Multiply
const multiply = (num1, num2) => {
  return num1 * num2;
};

//Declaration Funtion Division
const division = (num1, num2) => {
  return num1 / num2;
};

//Declaration Funtion ShowResult
const showResul = (result) => alert(result);

//Switch Operations
switch (operation) {
  case 1:
    result = add(num1, num2);
    showResul(result);
    break;
  case 2:
    result = substract(num1, num2);
    showResul(result);
    break;
  case 3:
    result = multiply(num1, num2);
    showResul(result);
    break;
  case 4:
    result = division(num1, num2);
    showResul(result);
    break;
}
