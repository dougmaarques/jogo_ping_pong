function setup() {
  createCanvas(700, 400);
}



function draw () {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xraquete,yraquete);
  movimentaMinhaRaquete();
  verificaColisaoRaquete(xraquete,yraquete);
  mostraRaquete(xraqueteOponente, yraqueteOponente);
  verificaColisaoRaquete(xraqueteOponente,yraqueteOponente);
  movimentaRaqueteOponente();
  incluiPlacar();
  marcaPonto();   
}


let xbolinha = 300;
let ybolinha = 200;
let diametro = 13;
let raio = diametro / 2;
let velocidadexBolinha = 7;
let velocidadeyBolinha = 7;


function mostraBolinha (){
  circle(xbolinha, ybolinha, diametro)
}

function movimentaBolinha(){
  xbolinha += velocidadexBolinha;
  ybolinha += velocidadeyBolinha;
}

function verificaColisaoBorda(){
    if (xbolinha + raio > width || xbolinha - raio < 0 ) {
    velocidadexBolinha *= -1;
  }
  
  if(ybolinha + raio  > height || ybolinha - raio  <0 ) {
    velocidadeyBolinha *= -1
  }
  
}

//variaveis raquete
let xraquete = 5;
let yraquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;
//variaveis oponente
let xraqueteOponente = 685;
let yraqueteOponente = 150;
let velocidadeyOponente;


function mostraRaquete (x,y){
  rect(x,y,raqueteComprimento,raqueteAltura);
}

function movimentaMinhaRaquete(){
  if (keyIsDown (UP_ARROW)){
    yraquete -= 10;
  }
    if (keyIsDown (DOWN_ARROW)){
    yraquete += 10;
  }
}

//placar pontos
let meusPontos = 0;
let pontosOponente = 0;

let colidiu = false;



function verificaColisaoRaquete(x,y){
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xbolinha, ybolinha, raio);
  
 if(colidiu){
   velocidadexBolinha *= -1;
 }
}

function movimentaRaqueteOponente(){
  velocidadeyOponente = ybolinha - yraqueteOponente - raqueteComprimento / 2 - 100;
  yraqueteOponente += velocidadeyOponente 
}

function incluiPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255,140,0));
  rect(150,10,40,20);
  fill(255);
  text(meusPontos,170,26);
  fill(color(255,140,0));
  rect(450,10,40,20);
  fill(255);
  text(pontosOponente, 470,26);

}

function marcaPonto(){
  if( xbolinha > 695){
    meusPontos += 1;
  }
  if( xbolinha < 10){
    pontosOponente += 1;
}
}

