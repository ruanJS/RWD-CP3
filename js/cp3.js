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
    if(inputSegundoNome.value.length === '' || inputSegundoNome.value.length< 3){
        inputSegundoNome.setAttribute("style","outline-color: #ff0000;");
        segundoNome.setAttribute("style","color: #ff0000;");
    }else{
        inputSegundoNome.setAttribute("style","outline-color: #00ff00;");
        segundoNome.setAttribute("style","color: #00ff00;");
    }

});
inputSegundoNome.addEventListener('blur', ()=>{
    if (inputSegundoNome.value === '' || inputSegundoNome.value.length < 5) {
      mostrarErro('O campo deve conter pelo menos 5 caracteres, e não pode estar vazio');
    } else {
      removerErro();
    }
  });
  function mostrarErro(mensagem) {
    
    erroNome = document.createElement('p');
    erroNome.style.color = 'red';
    erroNome.textContent = mensagem;
    document.body.appendChild(erroNome);
  }
  function removerErro() {
    if (erroNome) {
      erroNome.remove();
      erroNome = null;
    }
  }