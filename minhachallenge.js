let listaDeAmigos = [];

function adicionarAmigo(){
    let amigo = document.querySelector('input').value;
    amigo = amigo.trim();
    if (amigo === '' || amigo == null){
        alert('Por favor, insira um nome.');
    } else {
        listaDeAmigos.push(amigo);
        console.log(listaDeAmigos);
        limparInput();
    };
};

function limparInput(){
    document.querySelector('input').value = '';
};
