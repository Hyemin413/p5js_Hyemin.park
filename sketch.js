function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();

}
let rot=0;
function draw () {
 
  background(10);
  translate(width/2, height/2);
  rectMode(CENTER)
  
  for (let i=0; i<30; i++) {
    rotate(radians((mouseX-width/2)*0.01+rot));
    fill(i*20, 300-i*3, i*100, 15);
    
    
    stroke(0,0,230,13) 
           strokeWeight(2);
    let d = 380 - i*5;
    beginShape();
    for (let j=0; j<=100; j++) {
      let d2 = d + (10-i)*sin(radians(j*12));
      let x = d2*cos(radians(j*1));
      let y = d2*sin(radians(j*1));
      vertex(x,y);
    }
    endShape();
  }
   rot=rot+0.05;
}


  

