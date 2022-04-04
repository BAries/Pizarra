//Traemos los botones
const btnAzul = document.getElementById("btnAzul");
const btnMorado = document.getElementById("btnMorado");
const btnRojo = document.getElementById("btnRojo");
const btnRosa = document.getElementById("btnRosa");
const btnNaranja = document.getElementById("btnNaranja");
const btnAmarillo = document.getElementById("btnAmarillo");
const btnVerde = document.getElementById("btnVerde");
const btnGris = document.getElementById("btnGris");
const btnNegro = document.getElementById("btnNegro");
const btnBlanco = document.getElementById("btnBlanco");

//Incluimos los respectivos eventListener de los botones
btnAzul.addEventListener("click", cambiarColorAzul);
btnMorado.addEventListener("click", cambiarColorMorado);
btnRojo.addEventListener("click", cambiarColorRojo);
btnRosa.addEventListener("click", cambiarColorRosa);
btnNaranja.addEventListener("click", cambiarColorNaranja);
btnAmarillo.addEventListener("click", cambiarColorAmarillo);
btnVerde.addEventListener("click", cambiarColorVerde);
btnGris.addEventListener("click", cambiarColorGris);
btnNegro.addEventListener("click", cambiarColorNegro);
btnBlanco.addEventListener("click", cambiarColorBlanco);

//EventListener del Mouse (Por alguna razón me joden todo...)
// document.addEventListener("mousedown", iniciaLinea);
// document.addEventListener("mouseup", terminaLinea);
// document.addEventListener("mousemove", dibujandoLinea);
var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};
document.addEventListener("mousedown", iniciaLinea);
document.addEventListener("mouseup", terminaLinea);
document.addEventListener("mousemove", dibujandoLinea);

var pCanvas = document.getElementById("pizarra");
var pizarra = pCanvas.getContext("2d");

//Color con el que vamos a pintar en el pizarron.
var color = "black";

function cambiarColorAzul(){
    color = "blue";
}
function cambiarColorMorado(){
    color = "blueviolet";
}
function cambiarColorRojo(){
    color = "red";
}
function cambiarColorRosa(){
    color = "pink";
}
function cambiarColorNaranja(){
    color = "orange";
}
function cambiarColorAmarillo(){
    color = "yellow";
}
function cambiarColorVerde(){
    color = "green";
}
function cambiarColorGris(){
    color = "grey";
}
function cambiarColorNegro(){
    color = "black";
}
function cambiarColorBlanco(){
    color = "white";
}

var ixm, iym, fxm, fym; 
var mouse;

function dibujarLinea(ix, iy, fx, fy, color, lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 1;
    lienzo.moveTo(ix, iy);
    lienzo.lineTo(fx, fy);
    lienzo.stroke();
    lienzo.closePath();
}

function iniciaLinea(evento){
    mouse = true;
    ixm = evento.clientX;
    iym = evento.clientY;
    console.log(ixm + "," + iym);
}

function terminaLinea(){
    mouse = false;
}

function dibujandoLinea(evento){
    if(mouse == true){
        fxm = evento.clientX;
        fym = evento.clientY;
        console.log(fxm + "," + fym);
        console.log(evento);
        dibujarLinea(ixm, iym, fxm, fym, color, pizarra);
        ixm = fxm;
        iym = fym;
    }
}