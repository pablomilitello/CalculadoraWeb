//Declaro la clase Calculadora
class Calculadora {
  sumar(num1, num2) {
    return num1 + num2;
  }
  restar(num1, num2) {
    return num1 - num2;
  }
  multiplicar(num1, num2) {
    return num1 * num2;
  }
  dividir(num1, num2) {
    return num1 / num2;
  }
  raizcuadrada(num1) {
    return Math.sqrt(num1);
  }
  sin(num1) {
    return Math.sin(num1);
  }
  cos(num1) {
    return Math.cos(num1);
  }
  tg(num1) {
    return Math.tan(num1);
  }
  asen(num1) {
    return (Math.asin(num1) * 180) / Math.PI;
  }
  acos(num1) {
    return (Math.acos(num1) * 180) / Math.PI;
  }
  atg(num1) {
    return (Math.atan(num1) * 180) / Math.PI;
  }
  ln(num1) {
    return Math.log(num1);
  }
  log(num1) {
    return Math.log10(num1);
  }
  secuenciaDecreciente(num1) {
    let resultado = 1;
    for (let i = 1; i <= num1; i++) {
      resultado = resultado * i;
    }
    return resultado;
  }
  deg(num1) {
    let grados = Math.trunc(num1 / 60);
    let minutos = Math.trunc((num1 / 60 - grados) / 60);
    let segundos = (num1 / 60 - grados) / 60 - minutos;
    return `${grados}° ${minutos}' ${segundos}''`;
  }
  porcentaje(num1) {
    return num1 / 100;
  }
  exponencial(num1, num2) {
    return Math.pow(num1, num2);
  }
  exponencial10(num1, num2) {
    let resultado;
    let base = 10;
    for (let i = 1; i < num2; i++) {
      base = 10 * base;
    }
    return base * num1;
  }
}
