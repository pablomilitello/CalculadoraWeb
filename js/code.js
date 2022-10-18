//Declaration of variables
let operation;
let num1;
let num2;
let result;

while (true) {
  //Enter operations
  enterOperations();
  if (!isNaN(operation) && operation != null && operation != "") {
    //It's a number
    break;
  } else {
    //It's not a number
    continue;
  }
}

if (operation <= 4 && operation >= 1) {
  //check = "true";
} else {
  while (operation >= 5 || operation <= 0) {
    alert("No se ha identificado la operación que desea realizar");
    while (true) {
      //Enter operations
      enterOperations();
      if (!isNaN(operation) && operation != null && operation != "") {
        //It's a number
        break;
      } else {
        //It's not a number
        continue;
      }
    }
  }
  //check = "true";
}

//Verification is or isn't a number
while ("true") {
  enterOperands();
  if (
    !isNaN(num1) ||
    !isNaN(num2) ||
    num1 != null ||
    num2 != null ||
    num1 != "" ||
    num2 != ""
  ) {
    //It's a number
    break;
  } else {
    //It's not a number
    continue;
  }
}

//Funtions
function enterOperations() {
  operation = parseInt(
    prompt(
      "¿Qué operación deseas realizar?. Presione:\n 1 para Sumar \n 2 para Restar\n 3 para Multiplicar\n 4 para Dividir"
    )
  );
}

function enterOperands() {
  num1 = parseFloat(
    prompt("Ingrese el primer número con el que desea operar:")
  );
  num2 = parseFloat(
    prompt("Ingrese el segundo número con el que desea operar:")
  );
}

const add = (num1, num2) => {
  return num1 + num2;
};

const substract = (num1, num2) => {
  return num1 - num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const division = (num1, num2) => {
  return num1 / num2;
};

const showResul = (result) => alert(result);

if (operation == 1) {
  result = add(num1, num2);
  showResul(result);
} else if (operation == 2) {
  result = substract(num1, num2);
  showResul(result);
} else if (operation == 3) {
  result = multiply(num1, num2);
  showResul(result);
} else if (operation == 4) {
  result = division(num1, num2);
  showResul(result);
}
