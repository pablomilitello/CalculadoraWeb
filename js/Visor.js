//Declaro la clase Visor

class Visor {
  constructor(visorValorAnterior, visorValorActual) {
    this.visorValorAnterior = visorValorAnterior;
    this.visorValorActual = visorValorActual;
    this.valorAnterior = "";
    this.valorActual = "";
    this.calculadora = new Calculadora();
    this.operacion = "undefined";
    this.signos = {
      sumar: "+",
      restar: "-",
      multiplicar: "x",
      dividir: "÷",
      raizcuadrada: "sqrt",
      sin: "sin",
      cos: "cos",
      tg: "tg",
      ln: "ln",
      log: "log",
    };
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
    this.valorAnterior = this.valorActual ?? this.valorAnterior;
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

  //Metodo para imprimir en el visor
  imprimirEnVisor() {
    this.visorValorActual.textContent = this.valorActual;
    this.visorValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.operacion] || ""}`;
  }

  //Metodo para operar la calculadora
  operar() {
    const anterior = parseFloat(this.valorAnterior);
    const actual = parseFloat(this.valorActual);
    if (isNaN(actual) || isNaN(anterior)) return;
    this.valorActual = this.calculadora[this.operacion](anterior, actual);
  }

  //Metodo para almacenar las 3 ultimas operaciones en el SessionStorage
}
