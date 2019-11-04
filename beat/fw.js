//Variablen für Bilder

let bild1;
let bild2;
let bild3;
let bild4;
let bild5;
let bild6;
let bild7;
let bild8;
let bild9;
let bild10;
let bild11;
let bild12;
let bild13;
let bild14;
let bild15;
let bild16;
let bild17;
let bild18;
let bild19;
let bild20;

//Bilder vorladen
function preload() {
  bild1 = loadImage('imgs/bild1.png');
  bild2 = loadImage('imgs/bild2.png');
  /* Jedes weitere Bild muss hier unten eingefügt werden, hierzu Zeile oberhalb kopieren 
  und von obigen Variablen bedienen, bspw. für nächste Zeile: bild3 = loadImage('imgs/bild3.png'); */
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0); /* Hintergrundfarbe ändern https://p5js.org/reference/#/p5/background */
  frameRate(0.5) /* Anzahl Frames pro Sekunde in Klammer schreiben */;
}


function draw() {

  let zufall = Math.floor(Math.random() * 6) + 1 /* Dies so belassen, wählt zufällig das nächste Element */

  /* Info zur random() Funktion, welche hier mehrmals zum Einsatz kommt, damit die Werte zufällig erzeugt werden:
  Es wird zufällig ein ganzzahliger Wert zwischen dem ersten Wert vor und dem zweiten Wert nach dem Komma erzeugt. 
  Mehr Infos: https://p5js.org/reference/#/p5/random */

  switch (zufall) {

    case 1:
  
  // Objekt Linie erzeugen:
  stroke(random(0, 255),random(0,255),random(0,255)); /* Farbe der Linie. Werte: (ROT, GRUEN, BLAU) von 0-255, mehr: https://p5js.org/reference/#/p5/stroke */
  strokeWeight(random(3,9)); /* Dicke der Linie (https://p5js.org/reference/#/p5/strokeweight) */
  noFill(); /* Damit keine Füllung für Objekt Linie erzeugt wird */
  line(random(0,windowWidth),random(0,windowWidth),random(0,windowHeight),random(0,windowHeight)); /* Erzeugt Linie, Werte: (X-Koordinate Verbidungspunkt 1, Y-Koordinate Verbidungspunkt 1, X-Koordinate Verbidungspunkt 2, Y-Koordinate Verbidungspunkt 2) */
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
  image(bild1, random(0,windowWidth), random(0,windowHeight),random(30,600),random(100,800));
  rotate(random(5,300));
  image(bild2, random(0,windowWidth), random(0,windowHeight),random(10,500),random(34,650));
break;
  }


frameRate(random(0.1,7));


}

function mousePressed(){
  //Alles was hier drin steht passiert beim Klick mit der Maus
 background(0);
 frameRate(30);
}