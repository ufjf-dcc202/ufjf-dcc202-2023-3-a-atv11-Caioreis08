// main.js
import { adicionarNaLista, getLista, limparLista } from "./lista.js";

// Passo 1 - Ache os elementos importantes
const pEntrada = document.querySelector('#entrada');
const olSaida = document.querySelector('#saida');
const btnAdicionar = document.querySelector('#adicionar');
const btnLimpar = document.querySelector('#limpar');

btnLimpar.addEventListener('click', limparElementosDaLista);
btnAdicionar.addEventListener('click', criarElementoNalista);

atualizarItensDeLista();

function criarElementoNalista() {
    const texto = pEntrada.textContent;
    adicionarNaLista(texto);
    atualizarItensDeLista();
    pEntrada.textContent="";
    pEntrada.focus();
}

function limparElementosDaLista(){
    limparLista();
    atualizarItensDeLista();
}

function atualizarItensDeLista (params) {
    olSaida.innerHTML = "";
    const lista = getLista();
    for (let i = 0; i < lista.lengt; i++) {
        const item = lista[i];
        const li = document.createElement('li');
        li.textContent = item;
        olSaida.appendChild(li);
    }
}