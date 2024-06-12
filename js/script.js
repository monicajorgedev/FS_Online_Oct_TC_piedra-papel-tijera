const buttons = document.querySelectorAll("button")
const piedra = document.getElementById("piedra")
const papel = document.getElementById("papel")
const tijera = document.getElementById("tijera")
const contadorUsuario = document.getElementById("contador-usuario")
const contadorOrdenador = document.getElementById("contador-ordenador")
const empate = document.getElementById("empate")


let contadorUser = 0;
let contadorPc = 0;
let textoEmpate = '';

function getRandom (){
    let numero = Math.floor(Math.random()*3);
    let eleccion = ""
    if(numero == 0){
        eleccion = "piedra"
    } else if (numero == 1){
        eleccion = "papel"
    } else {
        eleccion = "tijera"
    } return eleccion
}


piedra.addEventListener("click", function(){
    const jugadaUsuario = "piedra"
    const jugadaMaquina = getRandom()
    if(jugadaMaquina === "tijera"){
     contadorUser++
     contadorUsuario.innerText = "Tus puntos: " + contadorUser
   } else if(jugadaMaquina === "papel"){
    contadorPc++
    contadorOrdenador.innerText = "Puntos de la máquina: " + contadorPc;
   } else {
    textoEmpate = alert("Resultado empate, vuelve a tirar")
   } return 
})


papel.addEventListener("click", function(){
    const jugadaUsuario = "papel"
    const jugadaMaquina = getRandom()
    if(jugadaMaquina === "tijera"){
        contadorPc++
        contadorOrdenador.innerText = "Puntos de la máquina: " + contadorPc;
   } else if(jugadaMaquina === "piedra"){
    contadorUser++
     contadorUsuario.innerText = "Tus puntos: " + contadorUser
   } else {
    textoEmpate = alert("Resultado empate, vuelve a tirar")
   } return
})

tijera.addEventListener("click", function(){
    const jugadaUsuario = "tijera"
    const jugadaMaquina = getRandom()
    if(jugadaMaquina === "piedra"){
        contadorPc++
        contadorOrdenador.innerText = "Puntos de la máquina: " + contadorPc;
   } else if(jugadaMaquina === "papel"){
    contadorUser++
     contadorUsuario.innerText = "Tus puntos: " + contadorUser
   } else {
    textoEmpate = alert("Resultado empate, vuelve a tirar")
   } return
})


