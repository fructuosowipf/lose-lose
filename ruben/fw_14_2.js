/* Für weiterführende Infos findet man die ganze Dokumentation von p5js unter: https://p5js.org/reference/ */


//Variablen für Bilder

let curly_b_1;
let curly_b_2;
let curly_b_3;
let curly_b_4;
let curly_b_5;
let curly_w_1;
let curly_w_2;
let curly_w_3;
let curly_w_4;
let curly_w_5;


//Bilder vorladen
function preload() {
  curly_b_1 = loadImage('imgs/curly_b_1.png');
  curly_b_2 = loadImage('imgs/curly_b_2.png');
  curly_b_3 = loadImage('imgs/curly_b_3.png');
  curly_b_4 = loadImage('imgs/curly_b_4.png');
  curly_b_5 = loadImage('imgs/curly_b_5.png');
  curly_w_1 = loadImage('imgs/curly_w_1.png');
  curly_w_2 = loadImage('imgs/curly_w_2.png');
  curly_w_3 = loadImage('imgs/curly_w_3.png');
  curly_w_4 = loadImage('imgs/curly_w_4.png');
  curly_w_5 = loadImage('imgs/curly_w_5.png');
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

  let zufall = Math.floor(Math.random() * 10) + 1 /* Dies so belassen, wählt zufällig das nächste Element */

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
      image(curly_b_1, random(0, windowWidth), random(0, windowHeight), random(90, 400), random(90, 400));

      break;



    case 2:
      //Objekt Bild erzeugen:
      rotate(random(5, 300)); /* Rotation des Bildes, Angabe des Rotationswinkels in der Klammer */
      image(curly_b_2, random(0, windowWidth), random(0, windowHeight), random(90, 400), random(90, 400));

      break;



    case 3:
      //Objekt Bild erzeugen:
      rotate(random(5, 300)); /* Rotation des Bildes, Angabe des Rotationswinkels in der Klammer */
      image(curly_b_3, random(0, windowWidth), random(0, windowHeight), random(90, 400), random(90, 400));

      break;



    case 4:
      //Objekt Bild erzeugen:
      rotate(random(5, 300)); /* Rotation des Bildes, Angabe des Rotationswinkels in der Klammer */
      image(curly_b_4, random(0, windowWidth), random(0, windowHeight), random(90, 400), random(90, 400));

      break;



    case 5:
      //Objekt Bild erzeugen:
      rotate(random(5, 300)); /* Rotation des Bildes, Angabe des Rotationswinkels in der Klammer */
      image(curly_b_5, random(0, windowWidth), random(0, windowHeight), random(90, 400), random(90, 400));

      break;



    case 6:
      //Objekt Bild erzeugen:
      rotate(random(5, 300)); /* Rotation des Bildes, Angabe des Rotationswinkels in der Klammer */
      image(curly_w_1, random(0, windowWidth), random(0, windowHeight), random(90, 400), random(90, 400));

      break;



    case 7:
      //Objekt Bild erzeugen:
      rotate(random(5, 300)); /* Rotation des Bildes, Angabe des Rotationswinkels in der Klammer */
      image(curly_w_2, random(0, windowWidth), random(0, windowHeight), random(90, 400), random(90, 400));

      break;


    case 8:
      //Objekt Bild erzeugen:
      rotate(random(5, 300)); /* Rotation des Bildes, Angabe des Rotationswinkels in der Klammer */
      image(curly_w_3, random(0, windowWidth), random(0, windowHeight), random(90, 400), random(90, 400));

      break;



    case 9:
      //Objekt Bild erzeugen:
      rotate(random(5, 300)); /* Rotation des Bildes, Angabe des Rotationswinkels in der Klammer */
      image(curly_w_4, random(0, windowWidth), random(0, windowHeight), random(90, 400), random(90, 400));

      break;



    case 10:
      //Objekt Bild erzeugen:
      rotate(random(5, 300)); /* Rotation des Bildes, Angabe des Rotationswinkels in der Klammer */
      image(curly_w_5, random(0, windowWidth), random(0, windowHeight), random(90, 400), random(90, 400));

      break;

  }



  frameRate(random(0.1, 7)); /*Erzeugt nach dem Laden eines Objekts für das nächste Objekt eine neue Geschwindigkeit, dadurch wird eine unregelmässige Geschwindigkeit erzeugt. */


}

function mousePressed() {
  //Alles was hier drin steht passiert beim Klick mit der Maus
  background(255);
  frameRate(120);
}