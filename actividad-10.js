/**
 * Find the difference in age between the oldest and youngest family members, 
 * and return their respective ages and the age difference.
 * 
 */

 const Family = [
    {
      name: 'John',
      age: 13
    },
    {
      name: 'Mark',
      age: 56,
    },
    {
      name: 'Rachel',
      age: 45,
    },
    {
      name: 'Nate',
      age: 67,
    },
    {
      name: 'Jeniffer',
      age: 65,
    }
  ];
  //-----Mayores------
  let mayores = Family.filter(number => number.age > 30)
  console.log(mayores)
  //-----Menores---------
  let menores = Family.filter(number => number.age < 30);
  console.log(menores)




/**
 * If the given input is an array of numbers, return the sum of all the positives ones. 
 * If the array is empty or there aren't any positive numbers, return 0.
 */

 let numbers = [ 1, -4, 12, 0, -3, 29, -150];

 let numPositivos = numbers.filter(element => element > 0)
console.log(numPositivos)

let suma = 0
for(let i=0; i<numPositivos.length; i++){
  suma += numPositivos[i];
}
console.log(suma)




 /**
 * Escriba una función de JavaScript que tomará una serie de números almacenados
 * y encontrará el segundonúmeros más bajos y segundos más altos, respectivamente
 * del siguiente arreglo:  const arr = [3,4,6,1,5,2,9,10,23,12]
 */


 
  const arr = [3,4,6,1,5,2,9,10,23,12];

  
     var numOrdenados = arr.sort(function(a,b){return a-b});
     var segundo = numOrdenados[1];
     var penultimo = numOrdenados[numOrdenados.length - 2]

    console.log("el 2do numero bajo es "+segundo+ " y el 2do numero mas alto es "+penultimo)
  


  




