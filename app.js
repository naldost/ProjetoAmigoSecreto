//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []; // Array para armazenar os nomes dos amigos

// Função para adicionar amigos à lista
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo === '') {
        alert('Por favor, digite um nome.');
        return;
    }

    if (amigos.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado.');
        return;
    }

    amigos.push(nomeAmigo); // Adiciona o nome ao array
    atualizarListaAmigos(); // Atualiza a lista no DOM
    inputAmigo.value = ''; // Limpa o campo de entrada
}

// Função para atualizar a lista de amigos no DOM
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista atual

    amigos.forEach(amigo => {
        const itemLista = document.createElement('li');
        itemLista.textContent = amigo;
        listaAmigos.appendChild(itemLista);
    });
}

// Função para sortear os amigos secretos
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos dois amigos para sortear.');
        return;
    }

    const listaEmbaralhada = embaralharArray([...amigos]); // Cria uma cópia embaralhada
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpa o resultado anterior

    for (let i = 0; i < listaEmbaralhada.length; i++) {
        const amigoAtual = listaEmbaralhada[i];
        const amigoSorteado = listaEmbaralhada[(i + 1) % listaEmbaralhada.length]; // Pega o próximo ou o primeiro

        const itemResultado = document.createElement('li');
        itemResultado.textContent = `${amigoAtual} ➔ ${amigoSorteado}`;
        resultado.appendChild(itemResultado);
    }
}

// Função para embaralhar um array (algoritmo Fisher-Yates)
function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}