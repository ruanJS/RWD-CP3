const inputNome = document.querySelector("#primeiroNome");
inputNome.addEventListener("focus", ()=>{
    inputNome.setAttribute("style","outline-color: #ff0000;");
})

inputNome.addEventListener("keyup", ()=>{

    const lblNome = document.querySelector("label[for='primeiroNome']");
    if(inputNome.value.length < 3){
        inputNome.setAttribute("style","outline-color: #ff0000;");
        lblNome.setAttribute("style","color: #ff0000;");
    }else{
        inputNome.setAttribute("style","outline-color: #00ff00;");
        lblNome.setAttribute("style","color: #00ff00;");
    }

});

const inputSegundoNome = document.querySelector("#segundoNome");
inputNome.addEventListener("focus", ()=>{
    inputNome.setAttribute("style","outline-color: #ff0000;");
})

inputSegundoNome.addEventListener("keyup", ()=>{

    const segundoNome = document.querySelector("label[for='segundoNome']");
    if(inputSegundoNome.value.length < 3){
        inputSegundoNome.setAttribute("style","outline-color: #ff0000;");
        segundoNome.setAttribute("style","color: #ff0000;");
    }else{
        inputSegundoNome.setAttribute("style","outline-color: #00ff00;");
        segundoNome.setAttribute("style","color: #00ff00;");
    }

});