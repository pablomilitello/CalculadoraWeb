//Declaro la clase Visor

class Visor {
  constructor(mostrarValorAnterior, mostrarValorActual) {
    this.mostrarValorAnterior = mostrarValorAnterior;
    this.mostrarValorActual = mostrarValorActual;
    this.calculadora = new Calculadora();
    this.tipoOperacion = undefined;
    this.vActual = "";
    this.vAnterior = "";
    this.signos = {
      sumar: "+",
      restar: "-",
      multiplicar: "X",
      dividir: "/",
    };
  }
  borrarAnterior() {
    this.vActual = this.vActual.toString().slice(0, -1);
    this.imprimirValores();
  }

  borrarVisor() {
    this.vActual = "";
    this.VAnterior = "";
    this.tipoOperacion = undefined;
    this.imprimirValores();
  }

  agregarNumero(numero) {
    if (numero === "." && this.vActual.includes(".")) return;
    this.vActual = this.vActual.toString() + numero.toString();
    this.imprimirValores();
  }

  imprimirValores() {
    this.mostrarValorActual.textContent = this.vActual;
    this.mostrarValorAnterior.textContent = `${this.VAnterior} ${this.signos[this.tipoOperacion] || ""}`;
  }

  computar(tipo) {
    this.tipoOperacion !== "igual" && this.calcular();
    this.tipoOperacion = tipo;
    this.valorAnterior = this.valorActual || this.valorAnterior;
    this.valorActual = "";
    this.imprimirValores();
  }

  calcular() {
    const valorAnterior = parseFloat(this.VAnterior);
    const valorActual = parseFloat(this.VActual);

    if (isNaN(valorActual) || isNaN(valorAnterior)) return;
    this.valorActual = this.calculadora[this.tipoOperacion](valorAnterior, valorActual);
  }
}
