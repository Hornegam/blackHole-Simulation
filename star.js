let xx , yy , radius11,radius22,points;
class star{
    constructor(x,y,radius1,radius2,points){
        this.xx=x;
        this.yy=y;
        this.radius11=radius1;
        this.radius22=radius2;
        this.points=points;
        
    }
}

function setup(){
    createCanvas(1622, 1152);
    background(0);
}

function show(){
        push();
        translate(width * 0.2, height * 0.5);
        rotate(frameCount / 200.0);
        stari(this.xx,this.yy,this.radius11,this.radius22,this.points);
        pop();

}

function stari(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius2;
      let sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);