/* Für weiterführende Infos findet man die ganze Dokumentation von p5js unter: https://p5js.org/reference/ */


//Variablen für Bilder

let hintergrund;
let bild1;
let bild2;
let bild3;
let bild4;
let bild5;
let bild6;
let bild7;
let bild8;



//Bilder vorladen
function preload() {
  hintergrund = loadImage('imgs/hintergrund4.JPG')
  bild1 = loadImage('imgs/bild1.png');
  bild2 = loadImage('imgs/bild2.png');
  bild3 = loadImage('imgs/bild3.png');
  bild4 = loadImage('imgs/bild4.png');
  bild5 = loadImage('imgs/bild5.png');
  bild6 = loadImage('imgs/bild6.png');
  bild7 = loadImage('imgs/bild7.png');
  bild8 = loadImage('imgs/bild8.png');
  /* Jedes weitere Bild muss hier unten eingefügt werden, hierzu Zeile oberhalb kopieren 
  und von obigen Variablen bedienen, bspw. für nächste Zeile: bild3 = loadImage('imgs/bild3.png'); -> Bild entsprechend unter /ruben/imgs/ im github hochladen !!!
  AUSSERDEM: Für neues Bild ganz unten neue Einträge für die Rotation und für das Erzeugen des Bildes erstellen.
  -> Siehe ab Zeile 100 */
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(hintergrund); /* Hintergrundfarbe ändern https://p5js.org/reference/#/p5/background */
  frameRate(0.5) /* Anzahl Frames pro Sekunde in Klammer schreiben */;
}

function draw() {

  let zufall = Math.floor(Math.random() * 8) + 1 /* Dies so belassen, wählt zufällig das nächste Element */

  /* Info zur random() Funktion, welche hier mehrmals zum Einsatz kommt, damit die Werte zufällig erzeugt werden:
  Es wird zufällig ein ganzzahliger Wert zwischen dem ersten Wert vor und dem zweiten Wert nach dem Komma erzeugt. 
  Mehr Infos: https://p5js.org/reference/#/p5/random 
  
  windowWidth = Breite des Browserfensters beim Laden der Webseite
  windowHeight = Höhe des Browserfenster beim Laden der Webseite
  
  */

  switch (zufall) {

    case 1:
    //Objekt Bild erzeugen:
    rotate(random(5,300)); /* Rotation des Bildes, Angabe des Rotationswinkels in der Klammer */
    image(bild1, random(0,windowWidth), random(0,windowHeight),random(30,600),random(100,800));
    break;
    case 2:
    //Objekt Bild erzeugen:
    rotate(random(5,300)); /* Rotation des Bildes, Angabe des Rotationswinkels in der Klammer */
    image(bild2, random(0,windowWidth), random(0,windowHeight),random(30,600),random(100,800));
    break;
    case 3:
    //Objekt Bild erzeugen:
    rotate(random(5,300)); /* Rotation des Bildes, Angabe des Rotationswinkels in der Klammer */
    image(bild3, random(0,windowWidth), random(0,windowHeight),random(30,600),random(100,800));
    break;
    case 4:
    //Objekt Bild erzeugen:
    rotate(random(5,300)); /* Rotation des Bildes, Angabe des Rotationswinkels in der Klammer */
    image(bild4, random(0,windowWidth), random(0,windowHeight),random(30,600),random(100,800));
    break;
    case 5:
    //Objekt Bild erzeugen:
    rotate(random(5,300)); /* Rotation des Bildes, Angabe des Rotationswinkels in der Klammer */
    image(bild5, random(0,windowWidth), random(0,windowHeight),random(30,600),random(100,800));
    break;
    case 6:
    //Objekt Bild erzeugen:
    rotate(random(5,300)); /* Rotation des Bildes, Angabe des Rotationswinkels in der Klammer */
    image(bild6, random(0,windowWidth), random(0,windowHeight),random(30,600),random(100,800));
    break;
    case 7:
    //Objekt Bild erzeugen:
    rotate(random(5,300)); /* Rotation des Bildes, Angabe des Rotationswinkels in der Klammer */
    image(bild7, random(0,windowWidth), random(0,windowHeight),random(30,600),random(100,800));
    break;
    case 8:
    //Objekt Bild erzeugen:
    rotate(random(5,300)); /* Rotation des Bildes, Angabe des Rotationswinkels in der Klammer */
    image(bild8, random(0,windowWidth), random(0,windowHeight),random(30,600),random(100,800));
    break;
    
  }


frameRate(random(0.1,7)); /*Erzeugt nach dem Laden eines Objekts für das nächste Objekt eine neue Geschwindigkeit, dadurch wird eine unregelmässige Geschwindigkeit erzeugt. */ 


}

function mousePressed(){
  //Alles was hier drin steht passiert beim Klick mit der Maus
  //background(0);
  //frameRate(30);
}