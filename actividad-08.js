//Ejercicio 01 Juan Carlos

const palabra = (uno,dos)=>{

if(uno == "hola"){
    return "true"
}
else if(dos == "mundo"){
    return "true"
}
else if (uno == "hola" && dos == "mundo"){
    return "true"
}
else {
    return "false"
}
}
var prueba = palabra("adios","peru")
console.log(prueba)

//Ejercicio 01 hecha en clase

function buscarPalabra (oracion,palabra){
    if (oracion.includes(palabra)){
        return true
    }else{
        return false
    }
}
buscarPalabra("mundo jndnjajs ajsnja jasjsa ndina hola", "mundo")



//Ejercicio 02 

let numeros = [1,2,3,4,10,11]
function suma(arreglo){
    let suma = 0
    for(var i = 0; i < arreglo.length; i++){
        suma += arreglo[i]; 
    }
    return suma
}
console.log(suma(numeros))


//ejercicio 03

function palindrome(frase){
    for(var i=0; i < frase.length/2; i++){
        if(frase[i] == frase[frase.length-(i+1)]){
        }
        else{
            return "no es un palindromo"
        }
    }
    return "es un palindromo"
}
var palabra = prompt("inserta la palabra")
console.log(palindrome(palabra))


// Ejercicio 4

let numero = prompt("ingreso un numero");
let grados  = prompt("ingrese la unidad medida (C o F)");

    if (grados == "F"){
         console.log (((numero-32)/9)*5) 
    }
    else if (grados == "C"){
        console.log(((numero/5)*9)+32)

    }
    else {
        console.log("solo pueo convertir de celcius a fahrnheit y viceversa")
    }



