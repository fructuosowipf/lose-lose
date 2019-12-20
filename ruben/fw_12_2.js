/* Für weiterführende Infos findet man die ganze Dokumentation von p5js unter: https://p5js.org/reference/ */


//Variablen für Bilder

let brick;
let east;
let west;
let yes;
let no;
let maybe;
let zickzack;


//Bilder vorladen
function preload() {
  brick = loadImage('imgs/brick.png');
  east = loadImage('imgs/east.png');
  west = loadImage('imgs/west.png');
  yes = loadImage('imgs/yes.png');
  no = loadImage('imgs/no.png');
  maybe = loadImage('imgs/maybe.png');
  zickzack = loadImage('imgs/zickzack.png');
  /* Jedes weitere Bild muss hier unten eingefügt werden, hierzu Zeile oberhalb kopieren 
  und von obigen Variablen bedienen, bspw. für nächste Zeile: bild3 = loadImage('imgs/bild3.png'); -> Bild entsprechend unter /ruben/imgs/ im github hochladen !!!
  AUSSERDEM: Für neues Bild ganz unten neue Einträge für die Rotation und für das Erzeugen des Bildes erstellen.
  -> Siehe ab Zeile 100 */
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255); /* Hintergrundfarbe ändern https://p5js.org/reference/#/p5/background */
  frameRate(0.5) /* Anzahl Frames pro Sekunde in Klammer schreiben */;
}

function draw() {

  let zufall = Math.floor(Math.random() * 7) + 1 /* Dies so belassen, wählt zufällig das nächste Element */

  /* Info zur random() Funktion, welche hier mehrmals zum Einsatz kommt, damit die Werte zufällig erzeugt werden:
  Es wird zufällig ein ganzzahliger Wert zwischen dem ersten Wert vor und dem zweiten Wert nach dem Komma erzeugt. 
  Mehr Infos: https://p5js.org/reference/#/p5/random 
  
  windowWidth = Breite des Browserfensters beim Laden der Webseite
  windowHeight = Höhe des Browserfenster beim Laden der Webseite
  
  */

  switch (zufall) {

  case 1:
 
    rotate(random(5,300)); 
    image(east, random(0,windowWidth), random(0,windowHeight),random(100,800),random(30,400));
   

  break;

  case 2:

    rotate(0); 
    image(brick, random(0,windowWidth), random(0,windowHeight),128,128);
    rotate(0); 
    image(brick, random(0,windowWidth), random(0,windowHeight),128,128);

  break;

  case 3:
 
    rotate(random(5,300)); 
    image(west, random(0,windowWidth), random(0,windowHeight),random(100,800),random(30,400));

  break;

  case 4:

    rotate(random(5,300)); 
    image(yes, random(0,windowWidth), random(0,windowHeight),random(50,700),random(10,300));

  break;

  case 5:
 
    rotate(random(5,300)); 
    image(no, random(0,windowWidth), random(0,windowHeight),random(50,700),random(10,300));

  break;

  case 6:
  
  rotate(0); 
  image(brick, random(0,windowWidth), random(0,windowHeight),128,128);
  rotate(0); 
  image(brick, random(0,windowWidth), random(0,windowHeight),128,128);


  break;


  case 7:
 
    rotate(random(5,300)); 
    image(maybe, random(0,windowWidth), random(0,windowHeight),random(150,1000),random(100,500));

  break;

  }


frameRate(random(0.1,15)); /*Erzeugt nach dem Laden eines Objekts für das nächste Objekt eine neue Geschwindigkeit, dadurch wird eine unregelmässige Geschwindigkeit erzeugt. */ 


}

function mousePressed(){
  //Alles was hier drin steht passiert beim Klick mit der Maus
 background(255);
 frameRate(30);
}