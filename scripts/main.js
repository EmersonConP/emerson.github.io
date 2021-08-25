let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function mudarImagem() {
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'imagens/capilar-elixir.png') {
      minhaImagem.setAttribute ('src','imagens/elixir-blend-supreme.png');
    } else {
      minhaImagem.setAttribute ('src','imagens/capilar-elixir.png');
    }
}

let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

function defineNomeUsuario() {
  let meuNome = prompt('Por favor, digite seu nome.');
  if(!meuNome||meuNome===null){
    defineNomeUsuario();
  }else{
  localStorage.setItem('nome', meuNome);
  meuCabecalho.textContent = 'Mozilla é legal, ' + meuNome;

  }
  
}

if(!localStorage.getItem('nome')) {
  defineNomeUsuario();
} else {
  let nomeGuardado = localStorage.getItem('nome');
  meuCabecalho.textContent = 'Mozilla é legal, ' + nomeGuardado;
}

meuBotao.onclick = function() { defineNomeUsuario();
}


