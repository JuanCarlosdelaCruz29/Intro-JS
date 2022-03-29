// EJERCICIO 01
var numero = 10;
if (numero % 2 == 0){
    console.log ( + numero + "es numero par");
}
else {
    console.log ( + numero + "es numero impar");
}



// EJERCICIO 02
var numero = Number (prompt("Dame un numero")) ;
if (numero % 2 ==0){
    alert ( + numero + "es par");
}
else {
    alert ( + numero + "es impar")
}





// EJERCICIO 03
var valor = Number (prompt("Ingrese un numero"));
if(valor === 1000){
    console.log("Felicidades, ganaste un premio");
}
else {
    console.log("Lo siento, sigue participando");
}


// EJERCICIO 4
var datouno = Number (prompt("Ingrese dato 1"))
var datodos = Number (prompt("ingrese dato 2"))

if (datouno < datodos){
    console.log("El numero menor es" + datouno);
}
else if (datouno == datodos){
    console.log("no valido");
}
else {
    console.log("El numero menor es" + datodos);
}



//EJERCICIO 5

var x = Number (prompt("ingrese dato x"))  
var y = Number (prompt("ingrese dato y"))
var z = Number (prompt("Ingrese dato z"))


if (x > y && x > z){
    console.log( x + "es mayor que" + y + "y" + z );
}
else if(y > x && y > z){
    console.log( y + "es mayor que" + x + "y" + z );
}
else if(z > x && z > y){
    console.log( z + "es mayor que" + x + "y" + y );
}


else if (x == y && x > z){
    console.log( x + "y" + y + "son iguales y mayores que" + z );
}
else if (y == z && y > x){
    console.log( y + "y" + z + "son iguales y mayores que" + x );
}
else if (z == x && z > y){
    console.log( z + "y" + x + "son iguales y mayores que" + y );
}

//Este codigo es inhabiliatado por el codigo de la linea 59-67

// else if (x == y && x < z){
//     console.log( x + "y" + y + "son iguales y menores que" + z );
// }
// else if (y == z && y < x){
//     console.log( y + "y" + z + "son iguales y menores que" + x );
// }
// else if (z == x && z < y){
//     console.log( z + "y" + x + "son iguales y menores que" + y );
// }

else if (x == y == z){
    console.log( x + "," + y + "y" + z + "son iguales");
}

else{
    alert ("avisenme si hay mas combinaciones");
}