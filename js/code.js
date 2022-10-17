let operacion;
let num1;
let num2;
let resultado;

do {
  operacion = parseInt(
    prompt(
      "¿Qué operación deseas realizar? Presione 1 para Sumar; 2 para Restar; 3 para Multiplicar; 4 para Dividir"
    )
  );
  if (operacion >= 5) {
    alert("No se ha identificado la operación que desea realizar");
  }
} while (0 < operacion > 4);

while (true) {
  ingresarOperandos();
  if (
    !isNaN(num1) &&
    !isNaN(num2) &&
    num1 != null &&
    num2 != null &&
    num1 != "" &&
    num2 != ""
  ) {
    //Es un número
    break;
  } else {
    //No es un número
    continue;
  }
}

function ingresarOperandos() {
  num1 = parseFloat(
    prompt("Ingrese el primer número con el que desea operar:")
  );
  num2 = parseFloat(
    prompt("Ingrese el segundo número con el que desea operar:")
  );
}

const sumar = (num1, num2) => {
  return parseFloat(num1) + parseFloat(num2);
};

const restar = (num1, num2) => {
  return parseFloat(num1) - parseFloat(num2);
};

const multiplicar = (num1, num2) => {
  return parseFloat(num1) * parseFloat(num2);
};

const dividir = (num1, num2) => {
  return parseFloat(num1) / parseFloat(num2);
};

if (operacion == 1) {
  resultado = sumar(num1, num2);
  alert(resultado);
} else if (operacion == 2) {
  resultado = restar(num1, num2);
  alert(resultado);
} else if (operacion == 3) {
  resultado = multiplicar(num1, num2);
  alert(resultado);
} else if (operacion == 4) {
  resultado = dividir(num1, num2);
  alert(resultado);
}
