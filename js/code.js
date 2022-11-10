//Declaro variables
let num1;
let num2;
let numero;
let operacion;

//Vinculo el DOM
const btnNumero = document.querySelectorAll(".btnNumero");
const btnOperador = document.querySelectorAll(".btnOperador");
const borrarNumero = document.getElementById("borrarAnterior");
const borrarTodo = document.getElementById("borrarTodo");
const mostrarValorAnterior = document.getElementById("valorAnterior");
const mostrarValorActual = document.getElementById("valorActual");

//Instancio el Visor
const visor = new Visor(mostrarValorAnterior, mostrarValorActual);

btnNumero.forEach((boton) => {
  boton.addEventListener("click", () => visor.agregarNumero(boton.innerHTML));
});

borrarNumero.addEventListener("click", () => visor.borrarAnterior());
borrarTodo.addEventListener("click", () => visor.borrarVisor());

btnOperador.forEach((boton) => {
  boton.addEventListener("click", () => visor.computar(boton.value));
  console.log(boton.value);
});
