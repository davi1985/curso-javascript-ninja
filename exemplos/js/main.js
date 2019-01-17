(function(win, doc) {
    'use strict';

    // function myFunction(number) {
    //     return number * 2;
    // }
    // console.log( myFunction(4) );

    // if( win === window )
    //     console.log('OK');

    // alert()
    // prompt()
    // var name = prompt('Qual o seu nome??');
    // if(name)
    //     console.log('Olá ', name);
    // else
    //     console.log('Não respondeu :(');

    // confirm()
    // var del = confirm('Deseja realmente excluir??');
    // if(del)
    //     console.log('Excluido com sucesso', del);
    // else
    //     console.log('Ação cancelada', del);

    // selecionando elementos do DOM
    // console.log(doc.getElementById('my-link'));
    // console.log(doc.getElementsByClassName('my-link'));
    // console.log(doc.getElementsByTagName('a'));
    // console.log(doc.getElementsByTagName('p'));

    // console.log(doc.getElementsByName('username'));
    // var $inputs = doc.getElementsByTagName('input');
    // console.log($inputs.length); 
    //document.querySelector
    //document.querySelectAll
    // $inputs = doc.querySelectorAll('input');
    // console.log($inputs);


    //.value
    // var $inputUsername = doc.querySelector('#username');
    // var $inputPassword = doc.querySelector('#username');
    // var $button = doc.querySelector('#button');

    // $button.addEventListener('click', function(event) {
    //     event.preventDefault();
    //     console.log('Click no botão');
    // }, false);

    // $inputUsername.addEventListener('click', function(event) {
    //     alert('Clicou');
    // },false);

    //sync vs async

    // console.log('inicio');
    // document.addEventListener('click', function() {
    //     console.log('clicou no documento');
    // })
    // console.log('fim');
    
    //setTimeout()

    // console.log('inicio');
    // setTimeout(function() {
    //     console.log('executou setTimeout');
    // }, 1000);
    // console.log('fim');   

    //setInterval()

    // console.log('inicio');
    // setInterval(function() {
    //     console.log('executou setInterval');
    // }, 1000);
    // console.log('fim'); 


    //função recursiva

    // var counter = 0;
    // function timer() {
    //     console.log('timer', counter++);
    //     if(counter > 10)
    //         return;
    //     setTimeout(timer, 1000);
    // }
    // timer();

    var counter = 0;
    var $button = document.querySelector('[data-js="button"]');
    var temporizador;
    //parando o setTimeout
    // function timer() {
    //     console.log('timer', counter++);
    //     if(counter > 20)
    //         return;
    //     temporizador = setTimeout(timer, 500);
    // }

    // $button.addEventListener('click', function() {
    //     clearTimeout(temporizador);
    // },false);
    // timer();

    //parando o setInterval()
    function timer() {
        console.log('timer', counter++);
    }
    temporizador = setInterval(timer, 500);

    $button.addEventListener('click', function() {
        clearInterval(temporizador);
    },false);
        
})(window, document);