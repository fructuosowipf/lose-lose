/* Für weiterführende Infos findet man die ganze Dokumentation von p5js unter: https://p5js.org/reference/ */


//Variablen für Bilder

let eyeball;
let eyetits;


//Bilder vorladen
function preload() {
  eyeball = loadImage('imgs/eyeball.png');
  eyetits = loadImage('imgs/eyetits.png');
  /* Jedes weitere Bild muss hier unten eingefügt werden, hierzu Zeile oberhalb kopieren 
  und von obigen Variablen bedienen, bspw. für nächste Zeile: bild3 = loadImage('imgs/bild3.png'); -> Bild entsprechend unter /ruben/imgs/ im github hochladen !!!
  AUSSERDEM: Für neues Bild ganz unten neue Einträge für die Rotation und für das Erzeugen des Bildes erstellen.
  -> Siehe ab Zeile 100 */
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0); /* Hintergrundfarbe ändern https://p5js.org/reference/#/p5/background */
  frameRate(0.5) /* Anzahl Frames pro Sekunde in Klammer schreiben */;
}

function draw() {

  let zufall = Math.floor(Math.random() * 6) + 1 /* Dies so belassen, wählt zufällig das nächste Element */

  /* Info zur random() Funktion, welche hier mehrmals zum Einsatz kommt, damit die Werte zufällig erzeugt werden:
  Es wird zufällig ein ganzzahliger Wert zwischen dem ersten Wert vor und dem zweiten Wert nach dem Komma erzeugt. 
  Mehr Infos: https://p5js.org/reference/#/p5/random 
  
  windowWidth = Breite des Browserfensters beim Laden der Webseite
  windowHeight = Höhe des Browserfenster beim Laden der Webseite
  
  */

  switch (zufall) {


    case 1:
      //Objekt Bild erzeugen:
      rotate(random(5, 300)); /* Rotation des Bildes, Angabe des Rotationswinkels in der Klammer */
      image(eyetits, random(0, windowWidth-400), random(0, windowHeight-300), random(400, 1800), random(200, 1200));

      break;

    case 2:
      //Objekt Bild erzeugen:
      rotate(random(5, 300)); /* Rotation des Bildes, Angabe des Rotationswinkels in der Klammer */
      image(eyeball, random(0, windowWidth), random(0, windowHeight), random(400, 900), random(200, 970));
      break;

    case 3:
      //Objekt Viereck erzeugen:
      fill(random(150, 255), random(0, 255), random(0, 255)); /* Farbe der Fläche. Werte: (ROT, GRUEN, BLAU) von 0-255, mehr: https://p5js.org/reference/#/p5/fill */
      noStroke(); /* Damit Objekt keine Rahmenlinie erhält, anonsten einfach auskommentieren oder entfernen und mit stroke() Rahmen definieren */
      rect(random(0, windowWidth), random(0, windowHeight), random(10, 300), random(1, 250)); /* Erzeugt Viereck, Werte: (X-Koordinate, Y-Koordinate, Breite, Höhe) */
      break;

    case 4:
      //Objekt Bezierkurve erzeugen:
      noFill();
      stroke(random(0, 255), random(0, 255), random(0, 255)); /* Farbe der Linie. Werte: (ROT, GRUEN, BLAU) von 0-255, mehr: https://p5js.org/reference/#/p5/stroke */
      strokeWeight(random(9, 22)); /* Dicke der Linie (https://p5js.org/reference/#/p5/strokeweight) */
      bezier(random(0, windowWidth), random(0, windowHeight), random(0, windowWidth), random(0, windowWidth), random(0, windowWidth), random(0, windowHeight), random(0, windowWidth), random(0, windowHeight));
      /* Erzeugt Bezierkurve, Werte: (X-Koordinate Verbidungspunkt 1, Y-Koordinate Verbidungspunkt 1, X-Koordinate Verbidungspunkt 2, Y-Koordinate Verbidungspunkt 2, X-Koordinate Verbidungspunkt 3, Y-Koordinate Verbidungspunkt 3, X-Koordinate Verbidungspunkt 4, Y-Koordinate Verbidungspunkt 4) */
      break;


    case 5:
      //Objekt Bild erzeugen:
      rotate(random(5, 300)); /* Rotation des Bildes, Angabe des Rotationswinkels in der Klammer */
      image(eyeball, random(0, windowWidth), random(0, windowHeight), random(400, 800), random(200, 970));

      break;


    case 6:
      //Objekt Bild erzeugen:
      rotate(random(5, 300)); /* Rotation des Bildes, Angabe des Rotationswinkels in der Klammer */
      image(eyetits, random(0, windowWidth-300), random(0, windowHeight-400), random(400, 1800), random(200, 1200));

      break;
  }


  frameRate(random(0.1, 7)); /*Erzeugt nach dem Laden eines Objekts für das nächste Objekt eine neue Geschwindigkeit, dadurch wird eine unregelmässige Geschwindigkeit erzeugt. */


}

function mousePressed() {
  //Alles was hier drin steht passiert beim Klick mit der Maus
  background(0);
  frameRate(120);
}