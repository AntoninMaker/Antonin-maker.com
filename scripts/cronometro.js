"use strict"

var hora = 0;
var minutos = 0;
var segundos = 0;
var tempo = 1000;
var cron;

function start() {
  
  cron = setInterval(timer, tempo);
  
}

function pause() {
  
}

function stop() {
  
}

function timer() {
  
  document.getElementById('counter').innerText = 'teste';
  
}
