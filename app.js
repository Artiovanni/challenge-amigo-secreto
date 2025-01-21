let listaDeAmigos = [];

// Permite adicionar nomes de amigos em uma lista e exibi-los na tela
function formatarNome(nome){
    // remove espaços em branco no início e no final da string
    nome = nome.trim();
    // divide a string em palavras e modifica a primeira letra de cada palavra para maiúscula e o restante para minúscula
    nome = nome.split(" ").map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase());
    // junta as palavras em uma única string
    nome_formatado = nome.join(" ");
    return nome_formatado;
};
// adiciona um amigo à lista e exibe na tela
function adicionarAmigo(){
    let amigo = document.querySelector('input').value;
    // formata o nome do amigo
    amigo = formatarNome(amigo);

    if (amigo === '' || amigo == null){
        alert('Por favor, insira um nome.');
    } else if (listaDeAmigos.includes(amigo)){
        alert('Este nome já foi adicionado.');
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
        resultado.innerHTML = `O amigo secreto sorteado é: ${amigoSorteado}`;
    }
}
