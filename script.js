let input = document.getElementById("email");
let iconErro = document.getElementById("svg-error");
let msgErro = document.getElementById("erro-message");

function validarEmail(){
    console.log(input.value.search("@"));
    if (input.value.search("@")!= -1 && input.value.search(".") != -1) {
        input.className = "valid";
        iconErro.className = "off";
        msgErro.className = "off";

    }else{
        input.className = "invalid";
        iconErro.className = "on";
        msgErro.className = "on"

    }
       
}