/* Für weiterführende Infos findet man die ganze Dokumentation von p5js unter: https://p5js.org/reference/ */


//Variablen für Bilder

let fernsehturm


//Bilder vorladen
function preload() {
  fernsehturm = loadImage('imgs/berlin_tit.png');
  fernsehturm2 = loadImage('imgs/berlin_tit_2.png');
  /* Jedes weitere Bild muss hier unten eingefügt werden, hierzu Zeile oberhalb kopieren 
  und von obigen Variablen bedienen, bspw. für nächste Zeile: bild3 = loadImage('imgs/bild3.png'); -> Bild entsprechend unter /beat/imgs/ im github hochladen !!!
  AUSSERDEM: Für neues Bild ganz unten neue Einträge für die Rotation und für das Erzeugen des Bildes erstellen.
  -> Siehe ab Zeile 100 */
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(220, 0, 30); /* Hintergrundfarbe ändern https://p5js.org/reference/#/p5/background */
  frameRate(random(0.5,3)); /* Anzahl Frames pro Sekunde in Klammer schreiben */
}

function draw() {

  /* let zufall = random(1,2);  Dies so belassen, wählt zufällig das nächste Element */

  /* Info zur random() Funktion, welche hier mehrmals zum Einsatz kommt, damit die Werte zufällig erzeugt werden:
  Es wird zufällig ein ganzzahliger Wert zwischen dem ersten Wert vor und dem zweiten Wert nach dem Komma erzeugt. 
  Mehr Infos: https://p5js.org/reference/#/p5/random 
  
  windowWidth = Breite des Browserfensters beim Laden der Webseite
  windowHeight = Höhe des Browserfenster beim Laden der Webseite
  
  */

  
  //Objekt Bezierkurve erzeugen:
  noFill();
  stroke(random(150, 255),random(0,50),random(10,80)); /* Farbe der Linie. Werte: (ROT, GRUEN, BLAU) von 0-255, mehr: https://p5js.org/reference/#/p5/stroke */
  strokeWeight(random(15,55)); /* Dicke der Linie (https://p5js.org/reference/#/p5/strokeweight) */
  bezier(random(0,windowWidth), random(0,windowHeight), random(0,windowWidth), random(0,windowWidth), random(0,windowWidth), random(0,windowHeight), random(0,windowWidth), random(0,windowHeight)); 
  /* Erzeugt Bezierkurve, Werte: (X-Koordinate Verbidungspunkt 1, Y-Koordinate Verbidungspunkt 1, X-Koordinate Verbidungspunkt 2, Y-Koordinate Verbidungspunkt 2, X-Koordinate Verbidungspunkt 3, Y-Koordinate Verbidungspunkt 3, X-Koordinate Verbidungspunkt 4, Y-Koordinate Verbidungspunkt 4) */
 
  //Objekt Bild erzeugen:
  rotate(random(5,300)); /* Rotation des Bildes, Angabe des Rotationswinkels in der Klammer */
  image(fernsehturm, random(0,windowWidth), random(0,windowHeight),random(100,1200),random(400,1800));
  /* Erzeugt Bild, Werte: (Pfad zum Bild > wird über Variable "bildX" reingeladen wie oben beim Vorladen definiert, X-Koordinate, Y-Koordinate, Breite, Höhe) */

    //Objekt Bild erzeugen:
    rotate(random(5,300)); /* Rotation des Bildes, Angabe des Rotationswinkels in der Klammer */
    image(fernsehturm, random(0,windowWidth), random(0,windowHeight),random(30,1200),random(100,2500));
    /* Erzeugt Bild, Werte: (Pfad zum Bild > wird über Variable "bildX" reingeladen wie oben beim Vorladen definiert, X-Koordinate, Y-Koordinate, Breite, Höhe) */

      //Objekt Bild erzeugen:
  rotate(random(5,300)); /* Rotation des Bildes, Angabe des Rotationswinkels in der Klammer */
  image(fernsehturm, random(0,windowWidth), random(0,windowHeight),random(500,1200),random(100,1800));
  /* Erzeugt Bild, Werte: (Pfad zum Bild > wird über Variable "bildX" reingeladen wie oben beim Vorladen definiert, X-Koordinate, Y-Koordinate, Breite, Höhe) */

 //Objekt Bild erzeugen:
 rotate(random(5,300)); /* Rotation des Bildes, Angabe des Rotationswinkels in der Klammer */
 image(fernsehturm2, random(0,windowWidth), random(0,windowHeight),random(100,1200),random(400,1800));
 /* Erzeugt Bild, Werte: (Pfad zum Bild > wird über Variable "bildX" reingeladen wie oben beim Vorladen definiert, X-Koordinate, Y-Koordinate, Breite, Höhe) */

   //Objekt Bild erzeugen:
   rotate(random(5,300)); /* Rotation des Bildes, Angabe des Rotationswinkels in der Klammer */
   image(fernsehturm2, random(0,windowWidth), random(0,windowHeight),random(30,1200),random(100,2500));
   /* Erzeugt Bild, Werte: (Pfad zum Bild > wird über Variable "bildX" reingeladen wie oben beim Vorladen definiert, X-Koordinate, Y-Koordinate, Breite, Höhe) */

     //Objekt Bild erzeugen:
 rotate(random(5,300)); /* Rotation des Bildes, Angabe des Rotationswinkels in der Klammer */
 image(fernsehturm2, random(0,windowWidth), random(0,windowHeight),random(500,1200),random(100,1800));
 /* Erzeugt Bild, Werte: (Pfad zum Bild > wird über Variable "bildX" reingeladen wie oben beim Vorladen definiert, X-Koordinate, Y-Koordinate, Breite, Höhe) */
  


  frameRate(random(0.5,3)); /*Erzeugt nach dem Laden eines Objekts für das nächste Objekt eine neue Geschwindigkeit, dadurch wird eine unregelmässige Geschwindigkeit erzeugt. */ 


}

function mousePressed(){
  //Alles was hier drin steht passiert beim Klick mit der Maus
 background(220, 0, 30);
 frameRate(30);
}
