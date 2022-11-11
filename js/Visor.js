//Declaro la clase Visor

class Visor {
  constructor(visorValorAnterior, visorValorActual) {
    this.visorValorAnterior = visorValorAnterior;
    this.visorValorActual = visorValorActual;
  }

  agregoNumero(numero) {
    this.visorValorActual = this.visorValorActual + numero;
    this.imprimirEnVisor();
  }

  imprimirEnVisor() {
    this.visorValorActual.textContent = this.visorValorActual;
    this.visorValorAnterior.textContent = this.visorValorAnterior;
  }
}
