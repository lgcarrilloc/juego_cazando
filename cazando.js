// Canvas y contexto
let canvas;
let ctx;
// Variables 
let gatoX = 0;
let gatoY = 0;
let comidaX = 0;
let comidaY = 0;
// Constantes
const ANCHO_GATO = 50;
const ALTO_GATO = 50;
const ANCHO_COMIDA = 30;
const ALTO_COMIDA = 30;
const VELOCIDAD = 15;
// Función rectangulos
function graficarRectangulo(x, y, ancho, alto, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, ancho, alto);
}
// Dibujar gato
function graficarGato() {
  graficarRectangulo(gatoX, gatoY, ANCHO_GATO, ALTO_GATO, "#000000");
}
// Dibujar comida
function graficarComida() {
  graficarRectangulo(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA, "#00ff00" );
}
// funcion limpiar canvas
function limpiarCanva() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
// Movimientos del gato
function moverIzquierda() {
  gatoX = gatoX - 10;
  limpiarCanva();
  graficarGato();
  graficarComida();
}
function moverDerecha() {
  gatoX = gatoX + 10;
  limpiarCanva();
  graficarGato();
  graficarComida();
}
function moverArriba() {
  gatoY = gatoY - 10;
  limpiarCanva();
  graficarGato();
  graficarComida();
}
function moverAbajo() {
  gatoY = gatoY + 10;
  limpiarCanva();
  graficarGato();
  graficarComida();
}
// Iniciar juego 
function iniciarJuego() {
  canvas = document.getElementById("areaJuego");
  ctx = canvas.getContext("2d");

  // Gato centrado
  gatoX = (canvas.width / 2) - (ANCHO_GATO / 2);
  gatoY = (canvas.height / 2) - (ALTO_GATO / 2);
  // Comida esquina inferior derecha
  comidaX = canvas.width - ANCHO_COMIDA;
  comidaY = canvas.height - ALTO_COMIDA;
  graficarGato();
  graficarComida();
}
// Eventos de botones
document.getElementById("btnIzquierda").onclick = moverIzquierda;
document.getElementById("btnDerecha").onclick = moverDerecha;
document.getElementById("btnArriba").onclick = moverArriba;
document.getElementById("btnAbajo").onclick = moverAbajo;