const idioma = document.querySelector('#btn-idioma')
const inicio = document.querySelector('#inicio')
const sobre = document.querySelector('#sobre')
const txtIdioma = document.querySelector('#txt-idioma')
const educacao = document.querySelector('#subtitle-educacao')
const inspirando = document.querySelector('#inspirando')
const ler = document.querySelector('#btn-ler')

let troca = 0

idioma.addEventListener('click', () => {
    if (troca < 1) {
        console.log("Funcionando");
        inicio.innerHTML = 'Home'
        sobre.innerHTML = 'About us'
        txtIdioma.innerHTML = 'Change language'
        educacao.innerHTML = 'Environmental Education'
        inspirando.innerHTML = 'Inspiring conscious consumption in the new generation'
        ler.innerHTML = 'Read more'
        troca++
    } else {
        console.log("Funcionando");
        inicio.innerHTML = 'Inicio'
        sobre.innerHTML = 'Sobre'
        txtIdioma.innerHTML = 'Troca de idioma'
        educacao.innerHTML = 'Educação Ambiental'
        inspirando.innerHTML = 'Inspirando o consumo consciente a nova geração'
        ler.innerHTML = 'Ler mais'
        troca = 0
    }
})