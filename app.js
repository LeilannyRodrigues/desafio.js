let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function clicarBotao() {
    console.log('O botão foi clicado')
}

function amoJS() {
    alert('Eu amo JavaScript')
}

let cidade;
function promptJS() {
    let cidade = prompt('Escolha um nome de uma cidade do Brasil');
    alert(`Estive em ${cidade} e lembrei de você!`);
}


function somarJS() {
    let valor1 = prompt('Digite um número');
    let valor2 = prompt('Digite outro número');
    let resultado = parseInt(valor1) + parseInt(valor2);
    alert(`O resultado é ${resultado}`);
}

