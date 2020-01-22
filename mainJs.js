//Velocidade da luz
const c = 30;
//Peso da gravidade
const G = 2;
//Delta T
const dt = 0.1;
//Massa
//const m = 6500
//const rs = 2*G;
let buracoNegro,inicio,fim;
const particulas = [];
function setup(){
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    createCanvas(windowWidth,windowHeight);
    ellipseMode(RADIUS);

    //x,y onde o buraco negro se posiciona e o terceiro parametro é a massa do buraco negro
    buracoNegro = new Blackhole((windowWidth-1300),(windowHeight-400),6500);

    //calcula o tamanho da tela em comparação com o buraco negro
    inicio = height/2;
    fim = height/2 - buracoNegro.rs*2.86;
    //laço para fazer as particulas andarem
    //Y = aonde os fotons começa na tela
    for(let y = 0; y < inicio;  y+=20){
        particulas.push(new foton(width-20,y));
    }
}

function draw(){
    background(255);
    buracoNegro.show();

    stroke(0);
    strokeWeight(1)
    line(0,inicio,width,inicio);
    //line(0,fim,width,fim);

    for(let p of particulas){
        buracoNegro.atrair(p);
        p.update();
        p.show();
    }
}