//“>” y “<”
//{}
function ejercicio11(){
       
    //let n1 = parseInt(prompt("ingrese un numero: "))
    let n1 = parseInt(prompt("Numero 1: "))
    let n2 = parseInt(prompt("Numero 2; "))
    let n3 = parseInt(prompt("Numero 3; "))
    var t,mayor;

    if (n1>n2){
        t=n1;
    }else{
        t=n2;
        }
    if (t>n3){
        mayor = t;
        }else{
        mayor= n3;
        }
        document.write("El mayor es: "+mayor);
    }