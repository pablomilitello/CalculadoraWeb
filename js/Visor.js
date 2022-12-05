//Declaro constante signos para vincular con el visor
const SIGNOS = {
  sumar: "+",
  restar: "-",
  multiplicar: "x",
  dividir: "÷",
  raizcuadrada: "sqrt",
  secuenciaDecreciente: "x!",
  deg: "Deg",
  sin: "sin",
  cos: "cos",
  tg: "tg",
  ln: "ln",
  log: "log",
  exponencial: "x^y",
  exponencial10: "EXP",
  porcentaje: "%",
  asen: "asen",
  acos: "acos",
  atg: "atg",
};

//Declaro la clase Visor
class Visor {
  constructor(visorValorAnterior, visorValorActual) {
    this.visorValorAnterior = visorValorAnterior;
    this.visorValorActual = visorValorActual;
    this.valorAnterior = "";
    this.valorActual = "";
    this.calculadora = new Calculadora();
    this.operacion = undefined;
  }

  //Metodo para agregar un operando
  agregarOperando(operando) {
    if (operando === "." && this.valorActual.includes(".")) return;
    this.valorActual = this.valorActual + operando;
    this.imprimirEnVisor();
  }

  //Metodo para agregar una operación
  agregarOperaciones(operaciones) {
    operaciones == "igual" && this.operar();
    this.operacion = operaciones;
    this.valorAnterior = this.valorActual.toString() || this.valorAnterior.toString();
    this.valorActual = "";
    this.imprimirEnVisor();
  }

  agregarOperacionesUnitarias(operacionesUnitarias) {
    operacionesUnitarias == "igual" && this.operar();
    this.operacion = operacionesUnitarias;
    this.valorAnterior = this.valorActual.toString() || this.valorAnterior.toString();
    this.valorActual = "";
    this.imprimirEnVisor();
  }

  //Metodo para borrar todo el visor
  borrarTodo() {
    this.valorActual = "";
    this.valorAnterior = "";
    this.operacion = undefined;
    this.imprimirEnVisor();
  }

  //Metodo para borrar el valor anterior
  borrarAnterior() {
    this.valorActual = this.valorActual.slice(0, -1);
    this.imprimirEnVisor();
  }

  //Metodo para guardarValorActual
  guardarValorActual(valor) {
    let maxCantidadOperaciones = 5;
    if (arrayGuardarValores.length < maxCantidadOperaciones) {
      arrayGuardarValores.push(valor);
      guardarValoresJSON(arrayGuardarValores);
    } else {
      arrayGuardarValores.splice(0, 1);
      arrayGuardarValores.push(valor);
      guardarValoresJSON(arrayGuardarValores);
    }
  }

  //Metodo para imprimir en el visor
  imprimirEnVisor() {
    this.visorValorActual.textContent = this.valorActual;
    this.visorValorAnterior.textContent = `${this.valorAnterior} ${SIGNOS[this.operacion] || ""}`;
  }

  //Metodo para invertir las operaciones seno, coseno y tangente
  invertirOperaciones() {
    const seno = document.getElementById("seno");
    const coseno = document.getElementById("coseno");
    const tangente = document.getElementById("tangente");
    if (regresoOperacion === false) {
      regresoOperacion = true;
      seno.innerHTML = "asen";
      coseno.innerHTML = "acos";
      tangente.innerHTML = "atg";
      seno.value = "asen";
      coseno.value = "acos";
      tangente.value = "atg";
    } else {
      regresoOperacion = false;
      seno.innerHTML = "sen";
      coseno.innerHTML = "cos";
      tangente.innerHTML = "tg";
      seno.value = "sen";
      coseno.value = "cos";
      tangente.value = "tg";
    }
  }

  //Metodo para operar la calculadora
  operar() {
    if (this.valorActual == "e") {
      this.valorActual = JSON.parse(sessionStorage.getItem("guardoConstantes"));
      this.valorActual = parseFloat(this.valorActual.nroEuler);
      this.valorAnterior = "";
      this.imprimirEnVisor();
    } else if (this.valorActual == "π") {
      this.valorActual = JSON.parse(sessionStorage.getItem("guardoConstantes"));
      this.valorActual = parseFloat(this.valorActual.nroPi);
      this.valorAnterior = "";
      this.imprimirEnVisor();
    }
    const anterior = parseFloat(this.valorAnterior);
    const actual = parseFloat(this.valorActual);

    if (
      this.operacion == "raizcuadrada" ||
      this.operacion == "asen" ||
      this.operacion == "acos" ||
      this.operacion == "atg"
    ) {
      this.valorActual = this.calculadora[this.operacion](anterior);
    } else {
      this.valorActual = this.calculadora[this.operacion](anterior, actual);
      this.guardarValorActual(this.valorActual);
    }
  }
}
