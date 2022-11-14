//Declaro la clase Visor

class Visor {
  constructor(visorValorAnterior, visorValorActual) {
    this.visorValorAnterior = visorValorAnterior;
    this.visorValorActual = visorValorActual;
    this.valorAnterior = "";
    this.valorActual = "";
    this.calculadora = new Calculadora();
    this.operacion = undefined;
    this.signos = {
      sumar: "+",
      restar: "-",
      multiplicar: "x",
      dividir: "÷",
    };
  }

  agregarOperando(operando) {
    if (operando == "." && this.valorActual.includes(".")) return;
    else {
      this.valorActual = this.valorActual.toString() + operando.toString();
      this.imprimirEnVisor();
    }
  }

  agregarOperaciones(operaciones) {
    this.tipoOperacion != "igual" && this.operar();
    this.operacion = operaciones;
    this.valorAnterior = this.valorActual || this.valorAnterior;
    this.valorActual = "";
    this.imprimirEnVisor();
  }

  borrarTodo() {
    this.valorActual = "";
    this.valorAnterior = "";
    this.operacion = undefined;
    this.imprimirEnVisor();
  }

  borrarAnterior() {
    this.valorActual = this.valorActual.slice(0, -2);
    this.imprimirEnVisor();
  }

  imprimirEnVisor() {
    this.visorValorActual.textContent = this.valorActual;
    this.visorValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.operacion] || ""}`;
  }

  operar() {
    const valorActual = parseFloat(this.valorActual);
    const valorAnterior = parseFloat(this.valorAnterior);

    if (isNaN(valorActual) || isNaN(valorAnterior)) return;
    this.valorActual = this.calculadora[this.operacion](valorAnterior, valorActual);
  }
}
