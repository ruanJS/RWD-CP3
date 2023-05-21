const inputNome = document.querySelector("#primeiroNome");
let erroNome;

inputNome.addEventListener("focus", ()=>{
    inputNome.setAttribute("style","outline-color: #ff0000;");
})

inputNome.addEventListener("keyup", ()=>{

    const lblNome = document.querySelector("label[for='primeiroNome']");
    if(inputNome.value.length ==='' || inputNome.value.length < 5){
        inputNome.setAttribute("style","outline-color: #ff0000;");
        lblNome.setAttribute("style","color: #ff0000;");

    }else{
        inputNome.setAttribute("style","outline-color: #00ff00;");
        lblNome.setAttribute("style","color: #00ff00;");
    }
});

inputNome.addEventListener('blur', ()=>{
    if (inputNome.value === '' || inputNome.value.length < 5) {
      mostrarErro('O campo deve conter pelo menos 5 caracteres.');
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
