/* Für weiterführende Infos findet man die ganze Dokumentation von p5js unter: https://p5js.org/reference/ */


//Variablen für Bilder

let another;


//Bilder vorladen
function preload() {
  another = loadImage('imgs/another_stroke.png');
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
      image(another, random(0, windowWidth), random(0, windowHeight), random(400, 1400), random(200, 1000));

      break;

    

    case 2:
      //Objekt Kreis erzeugen:
      fill(random(0, 255), random(0, 255), random(150, 255)); /* Farbe der Fläche. Werte: (ROT, GRUEN, BLAU) von 0-255, mehr: https://p5js.org/reference/#/p5/fill */
      noStroke(); /* Damit Objekt keine Rahmenlinie erhält, anonsten einfach auskommentieren oder entfernen und mit stroke() Rahmen definieren */
      square(random(0, windowWidth), random(0, windowHeight), random(10, 350), 600, 750);
      /* Erzeugt Kreis, Werte: (X-Koordinate, Y-Koordinate, Durchmesser Kreis) */
      break;

    case 3:
      //Objekt Viereck erzeugen:
      fill(random(150, 255), random(0, 255), random(0, 255)); /* Farbe der Fläche. Werte: (ROT, GRUEN, BLAU) von 0-255, mehr: https://p5js.org/reference/#/p5/fill */
      noStroke(); /* Damit Objekt keine Rahmenlinie erhält, anonsten einfach auskommentieren oder entfernen und mit stroke() Rahmen definieren */
      rect(random(0, windowWidth), random(0, windowHeight), random(100, 700), random(30, 1050)); /* Erzeugt Viereck, Werte: (X-Koordinate, Y-Koordinate, Breite, Höhe) */
      break;

    case 4:
      //Objekt Bogen erzeugen:
      fill(random(0, 255), random(180, 255), random(0, 255)); /* Farbe der Fläche. Werte: (ROT, GRUEN, BLAU) von 0-255, mehr: https://p5js.org/reference/#/p5/fill */
      noStroke();/* Damit Objekt keine Rahmenlinie erhält, anonsten einfach auskommentieren oder entfernen und mit stroke() Rahmen definieren */
      arc(random(0, windowWidth), random(0, windowHeight), random(70, 750), random(77, 610), random(0.1, 3.2), random(0.1, 3.2));
      /* Erzeugt Bogen (Teilkreise), Werte: (X-Koordinate, Y-Koordinate, Breite, Höhe, Startwinkel, Abschlusswinkel) */
      break;

      case 5:
      //Objekt Bild erzeugen:
      rotate(random(5, 300)); /* Rotation des Bildes, Angabe des Rotationswinkels in der Klammer */
      image(another, random(0, windowWidth), random(0, windowHeight), random(500, 2000), random(500, 1600));

      break;


    case 6:
      //Objekt Bild erzeugen:
      rotate(random(5, 300)); /* Rotation des Bildes, Angabe des Rotationswinkels in der Klammer */
      image(another, random(0, windowWidth), random(0, windowHeight), random(400, 1400), random(200, 1000));

      break;
  }


frameRate(random(0.1,7)); /*Erzeugt nach dem Laden eines Objekts für das nächste Objekt eine neue Geschwindigkeit, dadurch wird eine unregelmässige Geschwindigkeit erzeugt. */ 


}

function mousePressed() {
  //Alles was hier drin steht passiert beim Klick mit der Maus
  background(0);
  frameRate(120);
}
