const personagens = document.querySelectorAll('.personagem');
//personagem selecionado
personagens.forEach((personagem) => {
  personagem.addEventListener('mouseenter', () => {
    const personagemSelecionado = document.querySelector('.selecionado');
    if (personagemSelecionado) {
      personagemSelecionado.classList.remove('selecionado');
    }

    
  });
});
