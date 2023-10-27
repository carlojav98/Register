
function mostrarPassword(){
    var cambio = document.getElementById("txtPassword");
    if(cambio.type == "password"){
        cambio.type = "text";
        $('.icon1').removeClass('bi bi-eye-slash').addClass('bi bi-eye');
        }else{
        cambio.type = "password";
        $('.icon1').removeClass('bi bi-eye').addClass('bi bi-eye-slash');
    }
} 

function mostrarPassword_Conf(){
    var cambio = document.getElementById("ctxtPassword");
    if(cambio.type == "password"){
        cambio.type = "ctext";
        $('.icon2').removeClass('bi bi-eye-slash').addClass('bi bi-eye');
    }else{
        cambio.type = "password";
 $('.icon2').removeClass('bi bi-eye').addClass('bi bi-eye-slash');
    }
} 

function comprobarClave(){
    clave1 = document.f1.clave1.value
    clave2 = document.f1.clave2.value

if (clave1 == clave2)
       window.confirm("Bienvenido")
    else
       alert("Las dos claves son distintas")
}

