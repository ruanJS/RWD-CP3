const inputNome = document.querySelector("#primeiroNome");
inputNome.addEventListener("focus", ()=>{
    inputNome.setAttribute("style","outline-color: #ff0000;");
})

inputNome.addEventListener("keyup", ()=>{

    const lblNome = document.querySelector("label[for='primeiroNome']");
    if(inputNome.value.length < 5){
        inputNome.setAttribute("style","outline-color: #ff0000;");
        lblNome.setAttribute("style","color: #ff0000;");
    }else{
        inputNome.setAttribute("style","outline-color: #00ff00;");
        lblNome.setAttribute("style","color: #00ff00;");
    }
    //inputEmail.setAttribute("style","outline-color: #ff0000;");
});

const inputSenha = document.querySelector("#senha");
inputSenha.addEventListener("focus", ()=>{
    inputSenha.setAttribute("style","outline-color: #ff0000;");
})

