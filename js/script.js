
//Opción con el forEach y utilizando el target para acceder al dataset. 

const buttons = document.querySelectorAll("button")
const contadorUsuario = document.getElementById("contador-usuario")
const contadorMaquina = document.getElementById("contador-ordenador")
let contadorU = 0;
let contadorM = 0;

function getRandomInt() {
    let numero = Math.floor(Math.random() * 3);
    let eleccion = "";
    if(numero == 0) {
        eleccion = "piedra"
    } else if (numero == 1) {
        eleccion = "papel"
    } else {
        eleccion = "tijera"
    } return eleccion
  }

buttons.forEach(function(btn){
    btn.addEventListener('click', function(event){
        const jugadaUser = event.target.dataset.jugada
        const jugadaMaquina = getRandomInt();
        if(jugadaUser === "papel" && jugadaMaquina === "tijera" || jugadaUser === "tijera" && jugadaMaquina === "piedra" || jugadaUser === "piedra" && jugadaMaquina === "papel"){
            contadorM++
            contadorMaquina.innerHTML = "Tus puntos: " + contadorM + ""
        } else if(jugadaUser === "papel" && jugadaMaquina === "piedra" || jugadaUser === "tijera" && jugadaMaquina === "papel" || jugadaUser === "piedra" && jugadaMaquina === "tijera" ){
            contadorU++
            contadorUsuario.innerHTML = "Puntos de la máquina: " + contadorU + ""
        } else {
            let textoEmpate = alert("Resultado empate, vuelve a tirar")
        } 
        console.log(jugadaUser);
        console.log(jugadaMaquina)
    })
})








/* Este codigo se hizo durante el team challenge

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
*/

