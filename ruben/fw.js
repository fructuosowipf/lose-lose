/* Google Image Search API */
// API-Key for this project: AIzaSyARcy2xM3pIK39g_O8nyhAo_htSDP8Le54

let googleImgUrl = "https://www.googleapis.com/customsearch/v1?key=AIzaSyARcy2xM3pIK39g_O8nyhAo_htSDP8Le54&cx=001038306842663858513:0oetd1hoj58&searchType=image&fileType=jpg,png&q=fructuosowipf";
let bild;

$.ajax({

  url: googleImgUrl,
  dataType: 'jsonp',
  success: function(data) {
    googleImg = data.items;

    // loop for getting images:
    for (var i = 0; i < googleImg.length; i++) {
      googleImgItem = googleImg[i]
      bild = [];
      bild.push({num: i, url: googleImgItem.link});
/*       var article = articles[i];
      $nytElem.append('<li class="article">' +
      '<a target="_blank" href="' + article.web_url + '">' + article.headline.main + 
      '</a>'+
      '<p>' + article.snippet + '</p>' + 
      '</li>'); */
  };

  }

});





/* Für weiterführende Infos findet man die ganze Dokumentation von p5js unter: https://p5js.org/reference/ */


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
  und von obigen Variablen bedienen, bspw. für nächste Zeile: bild3 = loadImage('imgs/bild3.png'); -> Bild entsprechend unter /ruben/imgs/ im github hochladen !!!
  AUSSERDEM: Für neues Bild ganz unten neue Einträge für die Rotation und für das Erzeugen des Bildes erstellen.
  -> Siehe ab Zeile 100 */
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
  Mehr Infos: https://p5js.org/reference/#/p5/random 
  
  windowWidth = Breite des Browserfensters beim Laden der Webseite
  windowHeight = Höhe des Browserfenster beim Laden der Webseite
  
  */

  switch (zufall) {

  case 1:
  // Objekt Linie erzeugen:
  stroke(random(0, 255),random(0,255),random(0,255)); /* Farbe der Linie. Werte: (ROT, GRUEN, BLAU) von 0-255, mehr: https://p5js.org/reference/#/p5/stroke */
  strokeWeight(random(3,9)); /* Dicke der Linie (https://p5js.org/reference/#/p5/strokeweight) */
  noFill(); /* Damit keine Füllung für Objekt Linie erzeugt wird, anonsten einfach auskommentieren oder entfernen */
  line(random(0,windowWidth),random(0,windowWidth),random(0,windowHeight),random(0,windowHeight)); 
  /* Erzeugt Linie, Werte: (X-Koordinate Verbidungspunkt 1, Y-Koordinate Verbidungspunkt 1, X-Koordinate Verbidungspunkt 2, Y-Koordinate Verbidungspunkt 2) */
  break;

  case 2:
  //Objekt Kreis erzeugen:
  fill(random(0, 255),random(0,255),random(0,255)); /* Farbe der Fläche. Werte: (ROT, GRUEN, BLAU) von 0-255, mehr: https://p5js.org/reference/#/p5/fill */
  noStroke(); /* Damit Objekt keine Rahmenlinie erhält, anonsten einfach auskommentieren oder entfernen und mit stroke() Rahmen definieren */
  square(random(0,windowWidth),random(0,windowHeight),random(1,70), 300, 250); 
  /* Erzeugt Kreis, Werte: (X-Koordinate, Y-Koordinate, Durchmesser Kreis) */
  break;

  case 3:
  //Objekt Viereck erzeugen:
  fill(random(0, 255),random(0,255),random(0,255)); /* Farbe der Fläche. Werte: (ROT, GRUEN, BLAU) von 0-255, mehr: https://p5js.org/reference/#/p5/fill */
  noStroke(); /* Damit Objekt keine Rahmenlinie erhält, anonsten einfach auskommentieren oder entfernen und mit stroke() Rahmen definieren */
  rect(random(0,windowWidth),random(0,windowHeight),random(10,80),random(1,250)); /* Erzeugt Viereck, Werte: (X-Koordinate, Y-Koordinate, Breite, Höhe) */
  break;

  case 4:
  //Objekt Bogen erzeugen:
  fill(random(0, 255),random(0,255),random(0,255)); /* Farbe der Fläche. Werte: (ROT, GRUEN, BLAU) von 0-255, mehr: https://p5js.org/reference/#/p5/fill */
  noStroke();/* Damit Objekt keine Rahmenlinie erhält, anonsten einfach auskommentieren oder entfernen und mit stroke() Rahmen definieren */
  arc(random(0,windowWidth),random(0,windowHeight),random(7,188),random(21,210),random(0.1,3.2),random(0.1,3.2)); 
  /* Erzeugt Bogen (Teilkreise), Werte: (X-Koordinate, Y-Koordinate, Breite, Höhe, Startwinkel, Abschlusswinkel) */
  break;

  case 5:
  //Objekt Bezierkurve erzeugen:
  noFill();
  stroke(random(0, 255),random(0,255),random(0,255)); /* Farbe der Linie. Werte: (ROT, GRUEN, BLAU) von 0-255, mehr: https://p5js.org/reference/#/p5/stroke */
  strokeWeight(random(9,22)); /* Dicke der Linie (https://p5js.org/reference/#/p5/strokeweight) */
  bezier(random(0,windowWidth), random(0,windowHeight), random(0,windowWidth), random(0,windowWidth), random(0,windowWidth), random(0,windowHeight), random(0,windowWidth), random(0,windowHeight)); 
  /* Erzeugt Bezierkurve, Werte: (X-Koordinate Verbidungspunkt 1, Y-Koordinate Verbidungspunkt 1, X-Koordinate Verbidungspunkt 2, Y-Koordinate Verbidungspunkt 2, X-Koordinate Verbidungspunkt 3, Y-Koordinate Verbidungspunkt 3, X-Koordinate Verbidungspunkt 4, Y-Koordinate Verbidungspunkt 4) */
  break;

  case 6:
  //Objekt Bild erzeugen:
  rotate(random(5,300)); /* Rotation des Bildes, Angabe des Rotationswinkels in der Klammer */
  image(bild1, random(0,windowWidth), random(0,windowHeight),random(30,600),random(100,800));
  /* Erzeugt Bezierkurve, Werte: (Pfad zum Bild > wird über Variable "bildX" reingeladen wie oben beim Vorladen definiert, X-Koordinate, Y-Koordinate, Breite, Höhe) */
  rotate(random(5,300)); /* Rotation des Bildes, Angabe des Rotationswinkels in der Klammer */
  image(bild2, random(0,windowWidth), random(0,windowHeight),random(10,500),random(34,650));
  /* Erzeugt Bezierkurve, Werte: (Pfad zum Bild > wird über Variable "bildX" reingeladen wie oben beim Vorladen definiert, X-Koordinate, Y-Koordinate, Breite, Höhe) */

  break;
  }


frameRate(random(0.1,7)); /*Erzeugt nach dem Laden eines Objekts für das nächste Objekt eine neue Geschwindigkeit, dadurch wird eine unregelmässige Geschwindigkeit erzeugt. */ 


}

function mousePressed(){
  //Alles was hier drin steht passiert beim Klick mit der Maus
 background(0);
 frameRate(30);
}