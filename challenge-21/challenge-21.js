(function(window,document) {
    'use strict';
    /*
    O desafio de hoje será um pequeno projeto: um cronômetro!
    As regras para criação do cronômetro são as seguintes:
    1. Crie um arquivo index.html e adicione esse script a ele;
    2. Crie um campo `input` do tipo `text`, e inicie-o com um valor 0 (zero).
    Ele será o nosso cronômetro;
    3. Crie 3 botões para as ações do cronômetro: Start, Stop e Reset;
    4. Ao clicar em Start, o valor do campo deve ser incrementado de 1 em 1, a
    cada segundo;
    5. Ao clicar em Stop, o cronômetro deve parar de contar;
    6. Ao clicar em Reset, o cronômetro deve zerar e parar de contar.

    Utilize o atributo data-js para nomear o campo e os botões. Você pode
    usar o nome que achar melhor, desde que ele seja semântico, ou seja, o nome
    dado ao elemento HTML deve definir o que o elemento é ou o que ele faz.
    */
    let $cronos = document.querySelector('[data-js="cronos"]');
    let timer;
    
    const $btnStart = document.querySelector('[data-js="btn-start"]');
    
    $btnStart.addEventListener('click', function() {
        timer = setInterval(() => {
            $cronos.value++;
        }, 1000);
    });

    const $btnStop = document.querySelector('[data-js="btn-stop"]');
    
    $btnStop.addEventListener('click', () => {
        clearInterval(timer);
    })

    const $btnReset = document.querySelector('[data-js="btn-reset"]');
    
    $btnReset.addEventListener('click', () => {
        $cronos.value = 0;
        clearInterval(timer);
    });


})(window,document);
