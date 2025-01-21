let listaDeAmigos = [];

// Permite adicionar nomes de amigos em uma lista e exibi-los na tela
function adicionarAmigo(){
    let amigo = document.querySelector('input').value;
    amigo = amigo.trim();
    if (amigo === '' || amigo == null){
        alert('Por favor, insira um nome.');
    } else {
        listaDeAmigos.push(amigo);
        console.log(listaDeAmigos);
        exibirNomes();
        limparInput();
    };
};

// limpa o valor do input
function limparInput(){
    document.querySelector('input').value = '';
};

// limpa a lista de amigos
function limparUl(){
    let lista = document.querySelector('ul');
    lista.innerHTML = '';
};

// exibe os nomes dos amigos na tela
function exibirNomes(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < listaDeAmigos.length; i++){
        lista.innerHTML += `<li>${listaDeAmigos[i]}</li>`;
    }
};

// sorteia um amigo secreto
function sortearAmigo(){
    // verifica se há pelo menos 2 amigos na lista
    if (listaDeAmigos.lenght < 2){
        alert('Ainda não é possível sortear, adicione mais amigos para serem sorteados.');
    } else {
        let amigoSorteado = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];
        console.log(amigoSorteado)
        let resultado = document.getElementById('resultado');
        limparUl();
        resultado.innerHTML = `O seu amigo secreto é: ${amigoSorteado}!`;
    }
}
