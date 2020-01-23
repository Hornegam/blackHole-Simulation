//Velocidade da luz
const c = 30;
//Peso da gravidade
const G = 1;
//Delta T
const dt = 0.1;
//Massa
//const m = 6500
//const rs = 2*G;
var espacoIMG ;
let buracoNegro,inicio,fim;
const particulas = [];
var windowWidth = 1622;
var windowHeight = 1152;

function setup(){
    

    createCanvas(windowWidth,windowHeight);
    background(0);
    ellipseMode(RADIUS);

    //x,y onde o buraco negro se posiciona e o terceiro parametro é a massa do buraco negro
    buracoNegro = new Blackhole((windowWidth-900),(windowHeight-200),6500);

    //calcula o tamanho da tela em comparação com o buraco negro
    inicio = height/2;
    fim = height/2 - buracoNegro.rs*2.86;
    //laço para fazer as particulas andarem
    //Y = aonde os fotons começa na tela
    for(let y = 0; y < inicio;  y+=20){
        particulas.push(new foton(width-20,y));
    }
}
function preload(){
    espacoIMG=loadImage('nasa.webp');
}
function draw(){
   // espacoIMG=loadImage('espaco.jpg');
    

    buracoNegro.show();

    stroke(0);
    strokeWeight(1)
    line(0,inicio,width,inicio);
    line(0,fim,width,fim);

    for(let p of particulas){
        buracoNegro.atrair(p);
        p.update();
        p.show();
    }
}