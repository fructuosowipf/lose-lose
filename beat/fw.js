//Variablen für Bilder

let magnolia;
let churrasco;
let zufall;

//Bilder vorladen
function preload() {
  magnolia = loadImage('imgs/magnolia.png');
  churrasco = loadImage('imgs/churrasco.png');
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  frameRate(0.5);
}


function draw() {

  let zufall = Math.floor(Math.random() * 6) + 1

  switch (zufall) {

    case 1:
  
  //Line
  stroke(random(0, 255),random(0,255),random(0,255));
  strokeWeight(random(3,9));
  noFill();
  line(random(0,windowWidth),random(0,windowWidth),random(0,windowHeight),random(0,windowHeight));
break;

case 2:
  
  //Circle
  fill(random(0, 255),random(0,255),random(0,255));
  noStroke();
  square(random(0,windowWidth),random(0,windowHeight),random(1,70), 300, 250);
  break;
  case 3:
  //Rectangle
  fill(random(0, 255),random(0,255),random(0,255));
  noStroke();
  rect(random(0,windowWidth),random(0,windowHeight),random(10,80),random(1,250));
  break;
  case 4:
  //Arc
  fill(random(0, 255),random(0,255),random(0,255));
  noStroke();
  arc(random(0,windowWidth),random(0,windowHeight),random(7,188),random(21,210),random(0.1,3.2),random(0.1,3.2));
  break;
  case 5:
  //Bezier
  noFill();
  stroke(random(0, 255),random(0,255),random(0,255));
  strokeWeight(random(9,22));
  bezier(random(0,windowWidth), random(0,windowHeight), random(0,windowWidth), random(0,windowWidth), random(0,windowWidth), random(0,windowHeight), random(0,windowWidth), random(0,windowHeight));
  break;
  case 6:
  //Bilder
  rotate(random(5,300));
  image(magnolia, random(0,windowWidth), random(0,windowHeight),random(30,600),random(100,800));
  rotate(random(5,300));
  image(churrasco, random(0,windowWidth), random(0,windowHeight),random(10,500),random(34,650));
break;
  }

console.log(zufall);


frameRate(random(0.1,7));


}

function mousePressed(){
 //Screenshot erstellen:
 //saveFrames('out', 'png', 1, 1);
 background(0);
 frameRate(30);
}