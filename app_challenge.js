//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
listaDeAmigos = [];
// let amigo = document.querySelector('input').value;
// Função que exibe os amigos na tela
function mostrarAmigos() {
    let lista = document.getElementById('listaAmigos'); // Seleciona a <ul> pelo ID
    lista.innerHTML = ''; // Limpa a lista para evitar duplicações

    // para cada amigo na lista de amigos, cria um <li> com o nome do amigo
    for (let i = 0; i < listaDeAmigos.length; i++) {
        lista.innerHTML += `<li>${listaDeAmigos[i]}</li>`;
        }
    
}

// Função que limpa o input após adicionar um amigo
function limparInput(){
    valor = document.querySelector('input').value = '';
};
function limparUl(){
    lista = document.querySelector('ul');
    lista.innerHTML = '';
}
// Função que adiciona um amigo na lista
function adicionarAmigo(){
    let amigo = document.querySelector('input').value;
    // Removendo os espaços em branco
    amigo = amigo.trim();
    // Verificando se o input está vazio
    if (amigo === ''){
        alert('Por favor, insira um nome.');
        return
    } else {

        listaDeAmigos.push(amigo);
        console.log(listaDeAmigos);
        mostrarAmigos();
        limparInput();

    }
    
};

// Função que sorteia o amigo secreto
function sortearAmigo(){
    if (listaDeAmigos.length < 2){
        alert('Adicione mais amigos para serem sorteados.');
    } else {
    let amigoSorteado = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];
    console.log(amigoSorteado);
    let resultado = document.getElementById('resultado');
    // resultado.innerHTML = '';
    limparUl();
    resultado.innerHTML = `O seu amigo secreto é: ${amigoSorteado}!`;  
    }
}