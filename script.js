// Esto agrega a la pantalla de la calculadora el valor del botón de la calculadora que presionemos
function agregar(valor) {
  document.getElementById("pantalla").value += valor;
}

// Esto borra todo el contenido que se encuentre en la pantalla de la calculadora
function borrar() {
  document.getElementById("pantalla").value = "";
}

// Esto realiza el calculo matematico que se encuentre en la pantalla de la calculadora usando eval()
function calcular() {
  let valorPantalla = document.getElementById("pantalla").value;
  let resultado = eval(valorPantalla);
  document.getElementById("pantalla").value = resultado;
}
// eval() es una función de JavaScript que ejecuta y evalúa una cadena de texto como si fuera código de JavaScript.
