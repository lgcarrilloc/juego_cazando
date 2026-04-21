// Canvas y contexto
let canvas;
let ctx;
let puntaje= 0;
let tiempo=15;
let intervaloTiempo;
// Imagen del gato
let imgGato = new Image();
imgGato.src = "gato.png";
// Imagen del raton
let imgRaton = new Image();
imgRaton.src = "raton.png";
// Variables 
let gatoX = 0;
let gatoY = 0;
let comidaX = 0;
let comidaY = 0;
// Constantes
const ANCHO_GATO = 60;
const ALTO_GATO = 60;
const ANCHO_COMIDA = 40;
const ALTO_COMIDA = 40;
const VELOCIDAD = 15;
// Función rectangulos
function graficarRectangulo(x, y, ancho, alto, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, ancho, alto);
}
// Dibujar gato
function graficarGato() {
  ctx.drawImage(imgGato, gatoX, gatoY, ANCHO_GATO, ALTO_GATO);
}

imgGato.onload = function () {
  imgRaton.onload = function () {
    graficarGato();
    graficarComida();
  }
}

// Dibujar comida
function graficarComida() {
  ctx.drawImage(imgRaton, comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA);
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
  detectarColision();
}
function moverDerecha() {
  gatoX = gatoX + 10;
  limpiarCanva();
  graficarGato();
  graficarComida();
  detectarColision();
}
function moverArriba() {
  gatoY = gatoY - 10;
  limpiarCanva();
  graficarGato();
  graficarComida();
  detectarColision();
}
function moverAbajo() {
  gatoY = gatoY + 10;
  limpiarCanva();
  graficarGato();
  graficarComida();
  detectarColision();
}
// Iniciar juego 
function iniciarJuego() {
  canvas = document.getElementById("areaJuego");
  ctx = canvas.getContext("2d");
  // iniciar tiempo en pantalla
  mostrarEnSpan("tiempo", tiempo);
  // Gato centrado
  gatoX = (canvas.width / 2) - (ANCHO_GATO / 2);
  gatoY = (canvas.height / 2) - (ALTO_GATO / 2);
  // Comida esquina inferior derecha
  comidaX = canvas.width - ANCHO_COMIDA;
  comidaY = canvas.height - ALTO_COMIDA;
  graficarGato();
  graficarComida();
  moverComidaAleatoria();
  // Eventos de botones
    document.getElementById("btnIzquierda").onclick = moverIzquierda;
    document.getElementById("btnDerecha").onclick = moverDerecha;
    document.getElementById("btnArriba").onclick = moverArriba;
    document.getElementById("btnAbajo").onclick = moverAbajo;
    document.getElementById("btnReiniciar").onclick = reiniciarJuego;
  //conteo regresivo cada segundo 
intervaloTiempo=setInterval(restarTiempo, 1000);
}
//funcion detectar colisión
function detectarColision(){
    if(gatoX < comidaX + ANCHO_COMIDA && gatoX + ANCHO_GATO > comidaX &&
        gatoY < comidaY + ALTO_COMIDA && gatoY + ALTO_GATO > comidaY
    ) {
        moverComidaAleatoria();
        aumentarPuntaje();
        aumentarTiempo();
        limpiarCanva();
        graficarGato();
        graficarComida();
    }
}
function moverComidaAleatoria(){
    comidaX = generarAleatorio(0, canvas.width - ANCHO_COMIDA);
    comidaY = generarAleatorio(0, canvas.height - ALTO_COMIDA);
}
function aumentarPuntaje(){
    puntaje++;
    mostrarEnSpan("puntos", puntaje);
    if(puntaje >= 6){
        clearInterval(intervaloTiempo);
        alert("¡Ganaste!");
    }
}
function restarTiempo(){
    tiempo--;
    mostrarEnSpan("tiempo", tiempo);
    if(tiempo <= 0){
        clearInterval(intervaloTiempo);
        alert("GAme Over");
    }
}
function reiniciarJuego(){
    clearInterval(intervaloTiempo);
    //reiniciar variables
    tiempo = 15;
    puntaje = 0;
    mostrarEnSpan("tiempo", tiempo);
    mostrarEnSpan("puntos", puntaje);
    gatoX = (canvas.width - ANCHO_GATO / 2);
    gatoY = (canvas.height - ALTO_GATO / 2);
    moverComidaAleatoria();
    limpiarCanva();
    graficarGato();
    graficarComida();
}

function aumentarTiempo(){
  tiempo = tiempo +1;
  mostrarEnSpan("tiempo",tiempo);
}