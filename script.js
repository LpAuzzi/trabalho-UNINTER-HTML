document.addEventListener('DOMContentLoaded', function() 
{       const botao = document.getElementById('botao');
        const paragrafo = document.querySelector('p');
        const mensagemDiv = document.createElement('div');
      mensagemDiv.style.marginTop = '10px';
  
    botao.addEventListener('click', function() {
        const mensagens = ['Sejam bem vindos a minha primeira página de HTML!',];
        const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
        mensagemDiv.textContent = mensagemAleatoria;
        botao.parentNode.insertBefore(mensagemDiv, botao.nextSibling);});});