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

  // var counter = 0;
  // var $button = document.querySelector('[data-js="button"]');
  // var temporizador;
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
  // function timer() {
  //     console.log('timer', counter++);
  // }
  // temporizador = setInterval(timer, 500);
  //
  // $button.addEventListener('click', function() {
  //     clearInterval(temporizador);
  // },false);


  //propriedade e metodos de funcoes
  //.call()
  // function myFunction(a,b,c,d) {
  //     console.log(this.lastname, a, b, c, d);
  // }
  // var obj = {
  //     lastname: 'Braga'
  // }
  // var obj2 = {
  //     lastname: 'Silva'
  // }

  // var arr = [1, 2, 3, 4]
  // myFunction.call(obj2, 'a','b','c','d');
  // // console.log(myFunction.length);
  // // console.log(myFunction.name);
  // // console.log(myFunction.toString);

  // //apply()
  // myFunction.apply(obj2, arr);

  //prototype
  // function MyFunction(name, lastName) {
  //   this.name = name;
  //   this.lastName = lastName;
  // }
  // MyFunction.prototype.fullName = function() {
  //   return this.name +' '+ this.lastName;
  // }

  // MyFunction.prototype.age = 33;

  // var davi = new MyFunction('Davi', 'Silva');

  // console.log(davi.fullName());
  // console.log(davi.age);

  // MyFunction.prototype.age = 30;
  // console.log(davi.age);

  //Array-like
  // function myFunction() {
  //   var arr = [1,2,3,4];
  //   arr.forEach(function(item, index) {
  //     console.log(this[index]);
  //   }, arguments);
  //   // Array.prototype.forEach.call(function(args){
  //   //   console.log(args);
  //   // })
  // }
  // function myFunction() {
  //   Array.prototype.forEach.call(arguments, function(item, index) {
  //     console.log(item);
  //   });
  // }
  // myFunction(1,2,3,4,5,6,7,8);

  //debug
  // palavra reservada para fazer debug -> debugger;

  // function sum() {

  //   return Array.prototype.reduce.call(arguments, function(accumulated, item) {
  //     return accumulated + item;
  //   });
  // }

  // console.log(sum(1,21,32,4));

  // console.time('Calculando tempo do for');
  // for(let i = 0; i < 10000; i++) {
  //   console.log('calculando...');
  // }
  // console.timeEnd('Calculando tempo do for');

  var arr = [
    { item: 'Arroz', price: 'R$ 10'},
    { item: 'Feijão', price: 'R$ 20'},
    { item: 'Macarrao', price: 'R$ 12'},
    { item: 'Carne', price: 'R$ 30'},
    [a,b,c,d],
  ];

  console.table(arr);


})(window, document);
