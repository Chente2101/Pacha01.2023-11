//“>” y “<”
//{}
//13. Hacer un algoritmo en JavaScript que lea una letra y diga si es una vocal.
function Validar(){
    letras = document.getElementById("letra").value;
    //alert("La letra que digitaste es: "+letras);  
    if(letras==''){
        alerta("Por favor digita una letra a validar no puede estar el campo vació");
    }
    else
        if(letras==''){
            alert("Por favor digita una letra a validar no puede estar el campo vació")
        }
        else{
            if (!isNaN(letras)){
                alert("Necesitamos que digites una letra tu nos proporcionaste un numero");
            }
            else{
                switch(letras){
                    case 'a':
                    case 'e':
                    case 'i':
                    case 'o':
                    case 'u':
                    
                    alert("La letra que digitaste es: "+letras+" es una vocal");
                    break; 
                    default:
                        alert("la letra que digitaste es"+letras+ "es una consonante");
                }
            }
        }
}

