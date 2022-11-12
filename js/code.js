//Declaro variables
let num1;
let num2;

//Vinculo el DOM
const btnNumero = document.querySelectorAll(".btnNumero");
const btnOperador = document.querySelectorAll(".btnOperador");
const visorValorActual = document.getElementById("valorActual");
const visorValorAnterior = document.getElementById("valorAnterior");

//Instanciar Visor
const visor = new Visor(visorValorAnterior, visorValorActual);

//Escuchar la botonera
btnNumero.forEach((btn) => {
  btn.addEventListener("click", () => visor.agregarOperando(btn.innerHTML));
});
