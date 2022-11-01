//Declaracion de variables
let operacion;
let num1;
let num2;
let resultado;

while (
  isNaN(operacion) ||
  operacion == null ||
  operacion == "" ||
  operacion > 4 ||
  operacion < 0
) {
  //Ingresar operacion
  ingresarOperacion();
  if (operacion > 4 || operacion < 1) {
    alert("No se ha identificado la operación que desea realizar");
  }
}

//Verifica si es o no un numero
while (
  isNaN(num1) ||
  num1 == null ||
  num1 == "" ||
  isNaN(num2) ||
  num2 == null ||
  num2 == ""
) {
  ingresarOperandos();
}

//Funcion ingresar operacion
function ingresarOperacion() {
  operacion = parseInt(
    prompt(
      "¿Qué operación deseas realizar?. Presione:\n 1 para Sumar \n 2 para Restar\n 3 para Multiplicar\n 4 para Dividir"
    )
  );
}

//Funcion ingresar operandos
function ingresarOperandos() {
  num1 = parseFloat(
    prompt("Ingrese el primer número con el que desea operar:")
  );
  num2 = parseFloat(
    prompt("Ingrese el segundo número con el que desea operar:")
  );
}

class Calculadora {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }
  sumar() {
    return this.num1 + this.num2;
  }
  restar() {
    return this.num1 - this.num2;
  }
  multiplicar() {
    return this.num1 * this.num2;
  }
  dividir() {
    return this.num1 / this.num2;
  }
}

//Declaracion de funcion mostrarResultado
const mostrarResultado = (resultado) => alert(resultado);

//Switch Operaciones
switch (operacion) {
  case 1:
    calculo1 = new Calculadora(num1, num2);
    mostrarResultado(calculo1.sumar());
    break;
  case 2:
    calculo2 = new Calculadora(num1, num2);
    mostrarResultado(calculo2.restar());
    break;
  case 3:
    calculo3 = new Calculadora(num1, num2);
    mostrarResultado(calculo3.multiplicar());
    break;
    break;
  case 4:
    calculo4 = new Calculadora(num1, num2);
    mostrarResultado(calculo4.dividir());
    break;
}
