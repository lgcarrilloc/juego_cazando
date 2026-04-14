// Canvas y contexto
let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");
// Variables (inicializadas en 0)
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
// Función genérica
function graficarRectangulo(x, y, ancho, alto, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, ancho, alto);
}
// Dibujar gato
function graficarGato() {
  graficarRectangulo(
    gatoX,
    gatoY,
    ANCHO_GATO,
    ALTO_GATO,
    "#000000"
  );
}
// Dibujar comida
function graficarComida() {
  graficarRectangulo(
    comidaX,
    comidaY,
    ANCHO_COMIDA,
    ALTO_COMIDA,
    "#00ff00"
  );
}
// Iniciar juego 
function iniciarJuego() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Gato centrado
  gatoX = (canvas.width / 2) - (ANCHO_GATO / 2);
  gatoY = (canvas.height / 2) - (ALTO_GATO / 2);
  // Comida esquina inferior derecha
  comidaX = canvas.width - ANCHO_COMIDA;
  comidaY = canvas.height - ALTO_COMIDA;
  graficarGato();
  graficarComida();
}
// Movimiento del gato
function mover(direccion) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (direccion === "arriba") gatoY -= VELOCIDAD;
  if (direccion === "abajo") gatoY += VELOCIDAD;
  if (direccion === "izquierda") gatoX -= VELOCIDAD;
  if (direccion === "derecha") gatoX += VELOCIDAD;
  graficarGato();
  graficarComida();
}
// Eventos de botones
document.getElementById("btnArriba").onclick = () => mover("arriba");
document.getElementById("btnAbajo").onclick = () => mover("abajo");
document.getElementById("btnIzquierda").onclick = () => mover("izquierda");
document.getElementById("btnDerecha").onclick = () => mover("derecha");