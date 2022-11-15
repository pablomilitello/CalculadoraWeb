//Vinculo el DOM
const btnNumero = document.querySelectorAll(".btnNumero");
const btnOperador = document.querySelectorAll(".btnOperador");
const visorValorActual = document.getElementById("valorActual");
const visorValorAnterior = document.getElementById("valorAnterior");
const btnBorrarTodo = document.getElementById("borrarTodo");
const btnBorrarAnterior = document.getElementById("borrarAnterior");

//Instanciar Visor
const visor = new Visor(visorValorAnterior, visorValorActual);

//Escuchar botones de operandos
btnNumero.forEach((btn) => {
  btn.addEventListener("click", () => visor.agregarOperando(btn.innerHTML));
});

//Escuchar botones de operadores
btnOperador.forEach((btn) => {
  btn.addEventListener("click", () => visor.agregarOperaciones(btn.value));
});

//Escuchar boton borrar todo
btnBorrarTodo.addEventListener("click", () => visor.borrarTodo());

//Escuchar boton borrar anterior
btnBorrarAnterior.addEventListener("click", () => visor.borrarAnterior());
