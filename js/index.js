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
const usuarioInput = document.getElementById("usuario");
const contrasenaInput = document.getElementById("contrasena");
const btnSesion = document.getElementById("btnSesion");
const calculadoraDiv = document.getElementById("calculadora");
const loginDiv = document.getElementById("login");

//Función para rescatar el Usuario y Contraseña del archivo JSON
let usuarios = [];
async function rescatarData() {
  const respuesta = await fetch("./js/usuarios.json");
  usuarios = await respuesta.json();
}

//Función de Inicio de Sesión
function iniciarSesion() {
  const usuarioRegistrado = usuarios.find((u) => {
    return usuarioInput.value === u.nombre && contrasenaInput.value === u.clave;
  });
  if (usuarioRegistrado) {
    Swal.fire({
      title: `Bienvenido ${usuarioRegistrado.nombre}`,
      text: "Podrás trabajar con la Calculadora Científica!!!",
      icon: "success",
      confirmButtonText: "OK",
    });
    calculadoraDiv.classList.add("visible");
    loginDiv.classList.add("invisible");
  } else {
    Swal.fire({
      title: "Error",
      text: "Usuario o contraseña incorrecta",
      icon: "error",
      confirmButtonText: "OK",
    });
  }
}

//Llamado a función Inicio de Sesión
btnSesion.addEventListener("click", async () => {
  await rescatarData();
  iniciarSesion();
});

//Toastify
btnAutor.addEventListener("click", () => {
  Toastify({
    text: "Gracias Flor y Equipo!",
    duration: 1500,
    gravity: "bottom",
    position: "left",
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

//Instanciar Visor
const visor = new Visor(visorValorAnterior, visorValorActual);

//Declaro array vacio para guardar valores de las operaciones
const arrayGuardarValores = [];

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

//SessionStorage y JSON
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
    }, 300);
  });
};

//Escuchar boton operacionAnterior
opAnterior.addEventListener("click", (e) => {
  resultadoOperaciones().then((respuesta) => {
    let resultadoRescatado = respuesta[`${respuesta.length - 1}`];
    visor.agregarOperando(resultadoRescatado.toString());
  });
});
