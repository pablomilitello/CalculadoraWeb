//Declaro la clase Visor

class Visor {
  constructor(visorValorAnterior, visorValorActual) {
    this.visorValorAnterior = visorValorAnterior;
    this.visorValorActual = visorValorActual;
  }

  agregarOperando(operando) {
    this.visorValorActual = this.visorValorActual + operando;
    this.imprimirEnVisor();
  }

  imprimirEnVisor() {
    this.visorValorActual.textContent = parseFloat(this.visorValorActual);
    this.visorValorAnterior.textContent = this.visorValorAnterior;
  }
}
