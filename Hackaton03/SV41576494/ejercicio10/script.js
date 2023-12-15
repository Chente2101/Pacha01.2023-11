//Hacer un algoritmo en JavaScript que diga si un número es par o impar.
// Operadores “>” y “<”
//Hacer un algoritmo en JavaScript que lea tres números y diga cuál es el mayor.
function ejercicio10(){
    
        let num = parseInt(prompt("ingrese un numero: "))
        if (num % 2 == 0 )
        {
            document.write("El numero ingresado " + num + " es Par")
        }      
        else
        {
            document.write("El numero ingresado " + num + " es Impar")
        }   
}