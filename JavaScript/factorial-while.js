//- factorial-while.js -> 
//Este archivo debe calcular el factorial de 10 utilizando un bucle while

var factorial = 1,
i = 1;

while (i<10) {
    factorial *= i;
    i++;
}
console.log(factorial)