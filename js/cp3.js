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
const inputEmail = document.querySelector("#email");
inputEmail.addEventListener("focus", ()=>{
    inputEmail.setAttribute("style","outline-color: #ff0000;");
})

inputEmail.addEventListener("keyup", ()=>{

    const lblEmail = document.querySelector("label[for='email']");
    if(inputEmail.value.length < 5){
        inputEmail.setAttribute("style","outline-color: #ff0000;");
        lblEmail.setAttribute("style","color: #ff0000;");
    }else{
        inputEmail.setAttribute("style","outline-color: #00ff00;");
        lblEmail.setAttribute("style","color: #00ff00;");
    }

});

inputEmail.addEventListener('blur', ()=>{
    if (inputEmail.value === '' || inputEmail.value.length < 5) {
       mostrarErro('O campo deve conter pelo menos 5 caracteres.');
        } else {
           removerErro();
        }
    });

    function mostrarErro(mensagem) {
       erroEmail = document.createElement('p');
           erroEmail.style.color = 'red';
           erroEmail.textContent = mensagem;

       document.body.appendChild(erroEmail);
    }
       
    function removerErro() {
       if (erroEmail) {
      erroEmail.remove();
       erroEmail = null;
   }}

   const formulario = document.querySelector("index.html");

   formulario.addEventListener("submit", function(event) {
       const campoEmail = document.getElementById("email");
       const email = email.value;
     
       if (!email.includes("@")) {
         event.preventDefault(); // Impede o envio do formulário
       }
     });


const inputSenha = document.querySelector("#senha");
inputSenha.addEventListener("focus", ()=>{



    const inputSenha = document.querySelector("#senha");
    inputSenha.addEventListener("focus", ()=>{

    inputSenha.setAttribute("style","outline-color: #ff0000;");
})})

inputSenha.addEventListener("keyup", ()=>{

    const lblSenha = document.querySelector("label[for='senha']");
    if((inputSenha.value.length < 6) || (inputSenha.value.length > 8) || ( inputSenha.value.length = 0)){
        inputSenha.setAttribute("style","outline-color: #ff0000;");
        lblSenha.setAttribute("style","color: #ff0000;");
    }else{
        inputSenha.setAttribute("style","outline-color: #00ff00;");
        lblSenha.setAttribute("style","color: #00ff00;");
    }
    //inputSenha.setAttribute("style","outline-color: #ff0000;");
});

const inputConfirmacaoDeSenha = document.querySelector("#confirmaçãoDeSenha");
inputConfirmacaoDeSenha.addEventListener("focus", ()=>{
    inputConfirmacaoDeSenha.setAttribute("style","outline-color: #ff0000;");
})

inputConfirmacaoDeSenha.addEventListener("keyup", ()=>{

    const lblConfirmacaoDeSenha = document.querySelector("label[for='confirmaçãoDeSenha']");
    if(inputConfirmacaoDeSenha.value.length < 5){
        inputConfirmacaoDeSenha.setAttribute("style","outline-color: #ff0000;");
        lblConfirmacaoDeSenha.setAttribute("style","color: #ff0000;");
    }else{
        inputConfirmacaoDeSenha.setAttribute("style","outline-color: #00ff00;");
        lblConfirmacaoDeSenha.setAttribute("style","color: #00ff00;");
    }
    //inputSenha.setAttribute("style","outline-color: #ff0000;");
});