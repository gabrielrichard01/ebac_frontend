function validarFormulario() {
    
    var campoA = parseInt(document.getElementById('campo_A').value);
    var campoB = parseInt(document.getElementById('campo_B').value);
  
    var mensagem = document.getElementById('mensagem');

    if (campoB > campoA) {
      
      mensagem.innerHTML ='Sucesso! O formulário foi enviado com perfeição';
        mensagem.classList.remove('mensagem-invalida');
        mensagem.classList.add('mensagem-valida');
    } else {
      
      mensagem.innerHTML = 'Erro! tente novamente, O campo B deve ser maior que campo A.';
      mensagem.classList.remove('mensagem-valida');
        mensagem.classList.add('mensagem-invalida');
    }
    mensagem.style.padding = '5px';
    mensagem.style.textAlign = 'center';
  }
  
  document.getElementById('form_numeros').addEventListener('submit', function(event) {
    event.preventDefault();
    validarFormulario();
  });
  