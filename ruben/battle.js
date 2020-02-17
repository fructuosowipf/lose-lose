/* Für weiterführende Infos findet man die ganze Dokumentation von p5js unter: https://p5js.org/reference/ */


//Variablen für Bilder

let battle1;
let battle2;
let battle3;
let battle4;
let battle5;
let battle6;
let battle7;
let battle8;


//Bilder vorladen
function preload() {
    battle1 = loadImage('imgs/battle/battle1.png');
    battle2 = loadImage('imgs/battle/battle2.png');
    battle3 = loadImage('imgs/battle/battle3.png');
    battle4 = loadImage('imgs/battle/battle4.png');
    battle5 = loadImage('imgs/battle/battle5.png');
    battle6 = loadImage('imgs/battle/battle6.png');
    battle7 = loadImage('imgs/battle/battle7.png');
    battle8 = loadImage('imgs/battle/battle8.png');

  /* Jedes weitere Bild muss hier unten eingefügt werden, hierzu Zeile oberhalb kopieren 
  und von obigen Variablen bedienen, bspw. für nächste Zeile: bild3 = loadImage('imgs/bild3.png'); -> Bild entsprechend unter /ruben/imgs/ im github hochladen !!!
  AUSSERDEM: Für neues Bild ganz unten neue Einträge für die Rotation und für das Erzeugen des Bildes erstellen.
  -> Siehe ab Zeile 100 */
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255); /* Hintergrundfarbe ändern https://p5js.org/reference/#/p5/background */
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
      rotate(random(0, 180)); /* Rotation des Bildes, Angabe des Rotationswinkels in der Klammer */
      image(battle1, 0, 0, windowWidth, windowHeight);

      break;



   
  }



  frameRate(random(0.1, 7)); /*Erzeugt nach dem Laden eines Objekts für das nächste Objekt eine neue Geschwindigkeit, dadurch wird eine unregelmässige Geschwindigkeit erzeugt. */


}

function mousePressed() {
  //Alles was hier drin steht passiert beim Klick mit der Maus
  background(255);
  frameRate(120);
}