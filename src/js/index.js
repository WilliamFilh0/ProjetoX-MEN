const personagens = document.querySelectorAll('.personagem');
//personagem selecionado
personagens.forEach((personagem) => {
  personagem.addEventListener('mouseenter', () => {
    const personagemSelecionado = document.querySelector('.selecionado');
    if (personagemSelecionado) {
      personagemSelecionado.classList.remove('selecionado');
    }

    personagem.classList.add('selecionado');

    //seleciona o personagem grande
    const personagemGrande = document.querySelector('.personagem-selecionado');

    //pegar o elemento do personagem grande
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');

    //alterar a imagem do personagem grande
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src =  `./src/images/card-${idPersonagem}.jpg`

    //Alterar o nome do personagem grande
    const nomePersonagem = document.getElementById('nome-personagem')
    


  });
});
