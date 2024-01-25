let numeroSecreto = generarNumeroSecreto();
let intentos = 0;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        console.log('Acertaste el número!');
    } 
    return;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}

asignarTextoElemento('h1','Juego del número secreto!');
asignarTextoElemento('p',`Indica un número del 1 al 10`);


/*
Crear una función que muestre "¡Hola, mundo!" en la consola.
function mensaje(){
    console.log("¡Hola, mundo!");
    return;
}
mensaje();
*/

/*
Crear una función que reciba un nombre como parámetro y muestre
"¡Hola, [nombre]!" en la consola.
function mensajeConNombre(nombre){
    console.log(`¡Hola, ${nombre}!`);
    return;
}
mensajeConNombre("Bryan Martin Quispe Lavalle");
*/

/*
Crear una función que reciba un número como parámetro y devuelva
el doble de ese número.
function doblarNumero(numero){
    console.log(`El doble del valor ingresado es ${numero*2}`);
    return;
}
doblarNumero(10);
*/

/*
Crear una función que reciba tres números como parámetros
y devuelva su promedio.
function calcularPromedio(num1, num2, num3){
    let suma = (num1 + num2 + num3)/3;
    console.log(`${suma}`);
    return;
}
calcularPromedio(14,16,18);
*/



/*
Crear una función que reciba dos números como parámetros
y devuelva el mayor de ellos.
function mayorDeDos(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
console.log(mayorDeDos(6, 9));
*/

/*
Crear una función que reciba un número como parámetro
y devuelva el resultado de multiplicar ese número por sí mismo.
function cuadrado(num) {
    return num * num;
}
console.log(cuadrado(5));
*/
