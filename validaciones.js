function validar_nombre_usuario(string){
    //implementación

    let val_nombreEL =document.getElementById("in_nombre_usuario")
    let in_nombre_usuario = val_nombreEL.value;
    let patron = /^[A-Z\s]+$/gi;  /* expresión regular /s para espacioos  */
    // /^[A-Z0-9]+$/      +-- hace que se repita ^-- asersiones \

    let cumple = patron.test(in_nombre_usuario); /*test devuelve true o false si cumple la conficion*/

    if (cumple){
        if(in_nombre_usuario.length < 6 || in_nombre_usuario.length >30){
            alert("Digite su nombre nuevamente")
            return false;
        }
        else{
            return true;
        }
    }
    else{
        return false;
    }
    

}

function validar_contrasena(string){
    //implementación
    let val_contrasenaEL =document.getElementById("in_contrasena")
    let in_contrasena = val_contrasenaEL.value;
    let patron = /^[A-Z0-9\s]+$/gi;

    let cumple = patron.test(in_contrasena);

    if (cumple){
        if(in_contrasena.length < 6){
            alert("Digite su contraseña nuevamente")
            return false;
        }
        else{
            return true;
        }
    }
    else{
        return false;
    }    

    
}

function confirmar_contrasena(stringA, StringB){
    //implementación validar stringA FUNCION VALIDAR, string B llamarla 
}

function btnvalidar_informacion(stringA, StringB, stringC){
    //implementación
    validar_nombre_usuario();
    validar_contrasena();
    confirmar_contrasena();


}
