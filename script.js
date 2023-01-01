
function mostrar_senha(){
    var senha = document.getElementById("input_senha");

    if (senha.type == "password") {
        senha.type ="text";
    }else {
        senha.type = "password";
    }
}