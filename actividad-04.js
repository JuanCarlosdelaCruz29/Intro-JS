
// Ejercicio 02 Ciclo While

var x = Number (prompt("Ingrese un numero"));
var y = 1;
while (y <= x ) {
    if(y % 5 === 0)
        console.log(y);
        y++;
}

// Ejercicio 03 Do While

var x = Number (prompt("Ingrese un numero"));
var y = 1;
do{
    if (y % 5 == 0)
    console.log(y);
    
    y++;
}
while (y <= x);

// Ejercicio 04 For

var y = 1;
for (var y = 1; y <= 50; y++ ){
    if (y % 2 !== 0){
        console.log( y);
     }
 }