
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = []// almacena los numeros que han salido sorteado
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto //innerHTML nos permite poner un titulo al selector capturado
    return
}
function intentoDeUsuario(){
  
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute('disabled');
    }
    else{
        numeroDeUsuario > numeroSecreto ? asignarTextoElemento('p','No acertaste!!!, el numero secreto es menor!!') :
         asignarTextoElemento('p','No acertaste!!!, el numero secreto es mayor!!');
        intentos++;
        limpiarCaja();
    }
}
function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario');
   return valorCaja.value = " ";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //si el numero generado esta incluido en la lista
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
     // si ya sorteamos todos lo numeros.
     if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles')
     }else{
         if(listaNumerosSorteados.includes(numeroGenerado)){
             return generarNumeroSecreto();// usamos de nuevo la funcion para generar el numero, concepto de funcion recursiva!
         }else{
             listaNumerosSorteados.push(numeroGenerado)
             return numeroGenerado;
         }

     }
    
}

function condicionesIniciales(){
    asignarTextoElemento("h1","Adivina un Numero");
    asignarTextoElemento("p",`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    
}    

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();

    // indicar mensaje de intervalo de numeros
    condicionesIniciales();

    //deshabilitar boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}    


condicionesIniciales()


