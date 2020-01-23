class foton{
    constructor(x,y){
        this.pos = createVector(x,y);
        //?????? a velocidade da luz de forma negativa
        this.velocidade = createVector(-c,0)
        //guardar aonde o ponto passou para fazer uma linha
        this.history = [];
    }

    update(){
        this.history.push(this.pos.copy());
        //Copia a velocidade e multiplica por 0.1
        const deltaV = this.velocidade.copy();
        deltaV.mult(dt);
        this.pos.add(deltaV);
        //Tamanho da linha
        if(this.history.length > 1500){
            this.history.splice(0,1);
        }
    }


    show(){
        strokeWeight(4);
        stroke(255,0,0);
        point(this.pos.x, this.pos.y);


        
        strokeWeight(2);
        noFill();
        beginShape();
        for(let v of this.history ){
            vertex(v.x,v.y);
        }
        endShape();
    }
}