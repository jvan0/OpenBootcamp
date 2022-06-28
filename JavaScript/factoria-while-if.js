//- factorial-break.js -> 
//Este archivo debe calcular el factorial de 10 
//utilizando un bucle while, una bifurcación if y una sentencia break

var factorial = 1,
i = 10;

while (true) {
    factorial *=i;
    i--;
    if(i===1){
        break;
    }
}
console.log(factorial)