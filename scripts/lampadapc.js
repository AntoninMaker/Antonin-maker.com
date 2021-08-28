const turnOnOff = document.getElementById ( 'turnOnOff' );

const lamp = document.getElementById ( 'lamp');
function islampBroken () {
  return lamp.src.indexOf ('quebrada') > -1
}

function lampOnOff() {
  if ( turnOnOff.textContent == 'Ligar' ) {
    lampOn();
    turnOnOff.textContent = 'Desligar';
}else{
lampOff();
turnOnOff.textContent = 'Ligar';
}
}
function lampOn() {
  if (!islampBroken () ){
 lamp.src = '../imagens/ligada.jpg';
}
}


function lampOff() {
  if (!islampBroken () ){
  lamp.src = '../imagens/desligada.jpg';
}
}


function lampBroken() {
  lamp.src = '../imagens/quebrada.jpg';
}

turnOnOff.addEventListener ('click', lampOnOff ); 
lamp.addEventListener ('dblclick', lampBroken );
lamp.addEventListener ('mouseover', lampOn );
lamp.addEventListener ('mouseleave', lampOff );