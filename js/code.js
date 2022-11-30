//Vinculo el DOM
const btnNumero = document.querySelectorAll(".btnNumero");
const btnOperador = document.querySelectorAll(".btnOperador");
const btnOperadorUnitario = document.querySelectorAll(".btnOperadorUnitario");
const visorValorActual = document.getElementById("valorActual");
const visorValorAnterior = document.getElementById("valorAnterior");
const btnBorrarTodo = document.getElementById("borrarTodo");
const btnBorrarAnterior = document.getElementById("borrarAnterior");
const btnAutor = document.getElementById("btn__autor");
const btnCV = document.getElementById("btn__cv");
const opAnterior = document.getElementById("operacionAnterior");

//Sweet Alert Bienvenida
// Swal.fire({
//   title: "Bienvenido",
//   text: "Podrás trabajar con la Calculadora Científica!!!",
//   icon: "success",
//   confirmButtonText: "OK",
// });

//Toastify
btnAutor.addEventListener("click", () => {
  Toastify({
    text: "Creado por Pablo Militello!",
    duration: 1500,
    gravity: "top",
    position: "right",
  }).showToast();
});

//Función Download CV
function downloadPDF() {
  const download = document.createElement("a");
  download.href = "./documents/CV MILITELLO PABLO 2022.pdf";
  download.target = "_blank";
  download.download = "Curriculum Pablo Militello";
  document.body.appendChild(download);
  download.click();
  document.body.removeChild(download);
}

//Llamado a función Download PDF
btnCV.addEventListener("click", () => {
  downloadPDF();
});

//Llamado a funcion guardarValorActual
const arrayGuardarValores = [];

function guardarValorActual(valor) {
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

//Escuchar botones de operadores unitarios
btnOperadorUnitario.forEach((btn) => {
  btn.addEventListener("click", () => visor.agregarOperacionesUnitarias(btn.value));
});

//Escuchar boton borrar todo
btnBorrarTodo.addEventListener("click", () => visor.borrarTodo());

//Escuchar boton borrar anterior
btnBorrarAnterior.addEventListener("click", () => visor.borrarAnterior());

//Session storage y JSON
const nroEuler = Math.E;
const nroPi = Math.PI;

const guardoConstantes = { nroEuler, nroPi };
const enJSON = JSON.stringify(guardoConstantes);
sessionStorage.setItem("guardoConstantes", enJSON);

//Funcion que guarda los resultados de las operaciones realizadas en LocalStorage en formato JSON
function guardarValoresJSON(array) {
  const enJSON = JSON.stringify(array);
  localStorage.setItem("guardoValoresAnteriores", enJSON);
}

//Función que ejecuta la promesa de traer los Resultados del Local Storage después de 2seg
const resultadoOperaciones = () => {
  return new Promise((respuesta, rechazo) => {
    setTimeout(() => {
      respuesta(JSON.parse(localStorage.getItem("guardoValoresAnteriores")));
    }, 2000);
  });
};

//Escuchar boton operacionAnterior
opAnterior.addEventListener("click", (e) => {
  e.preventDefault();

  resultadoOperaciones().then((respuesta) => {
    let resultadoRescatado = respuesta;

    console.log(resultadoRescatado[`${resultadoRescatado.length - 1}`]);
  });
});
