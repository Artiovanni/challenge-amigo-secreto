let listaDeAmigos = [];

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

function limparInput(){
    document.querySelector('input').value = '';
};

function exibirNomes(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < listaDeAmigos.length; i++){
        lista.innerHTML += `<li>${listaDeAmigos[i]}</li>`;
    }
};

