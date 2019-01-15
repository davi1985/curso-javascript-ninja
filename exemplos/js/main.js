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
    var $inputUsername = doc.querySelector('#username');
    var $inputPassword = doc.querySelector('#username');
    var $button = doc.querySelector('#button');

    $button.addEventListener('click', function(event) {
        event.preventDefault();
        console.log('Click no botão');
    }, false);

    $inputUsername.addEventListener('click', function(event) {
        alert('Clicou');
    },false);

})(window, document);