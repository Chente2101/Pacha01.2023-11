//Hacer un algoritmo en JavaScript que diga si un número es par o impar.
// Operadores “>” y “<”
//12. Hacer un algoritmo en JavaScript que lea dos números y diga cuál es el mayor.
function ejercicio12(){
       
    //let n1 = parseInt(prompt("ingrese un numero: "))
    let n1 = parseInt(prompt("Numero 1: "))
    let n2 = parseInt(prompt("Numero 2; "))
    //let n3 = parseInt(prompt("Numero 3; "))
    var t,mayor;

    if (n1>n2){
        t=n1;
        mayor = t;
    }else{
        t=n2;
        mayor= n2;
        }
    /*if (t>n3){
        mayor = t;
        }else{
        mayor= n3;
        }
    */
        document.write("El mayor es: "+mayor);
    }