//Cria uma classe para criar o buraco negro
class Blackhole{
    //passa por parametro aonde ele vai ficar na tela, e a sua massa
    constructor(x,y,m){
        this.pos = createVector(x, y);
        this.mass = m;
        //calcula o raio do buraco negro
        this.rs = (2 * G * this.mass) / (c*c);
        //verifica o tamanho
        console.log(this.rs);
    }


    //Calcula atração do buraco negro em relação aos fotons que vem em direção
    atrair(foton){
        //Calcula a força de atração do buraco negro ao criar um vetor com a posição do buraco negro
        //e a posição do foton
        const forca = p5.Vector.sub(this.pos,foton.pos);
        //calcula o raio de acordo com a magnitude da força
        const r = forca.mag();
        //FG Força gravitacional
        const fg = G * this.mass / (r*r);
        forca.setMag(fg);
        foton.velocidade.add(forca);
        //De acordo com a velocidade da luz ele vai desincrementando
        foton.velocidade.limit(c);
    }

    show(){
        //completa o buraco negro
        fill(0);
        //Para não ter a linha em volta
        noStroke();
        //cria um circulo com a posição e tamanho do buraco negro
        circle(this.pos.x,this.pos.y,this.rs);

        //para ser vazio dentro
        noFill();
        stroke(100,100);
        //grossura da linha
        strokeWeight(64);
        //Cria um circula em volta do buraco negro usando 3 vezes maior seu raio
        circle(this.pos.x,this.pos.y,this.rs*3+32);
        
        stroke(255,155,0);
        strokeWeight(32);
        circle(this.pos.x,this.pos.y,this.rs*1.5+16);
    }

}