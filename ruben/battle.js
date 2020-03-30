
/* Für weiterführende Infos findet man die ganze Dokumentation von p5js unter: https://p5js.org/reference/ */

$.getJSON("https://api.ipify.org/?format=json", function (json) {
  unique = json.ip.split('.').join("-");
});

$('#mylightbox').hide();
$.featherlight('#mylightbox');

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
  logo = loadImage('imgs/logo.png');

  /* Jedes weitere Bild muss hier unten eingefügt werden, hierzu Zeile oberhalb kopieren 
  und von obigen Variablen bedienen, bspw. für nächste Zeile: bild3 = loadImage('imgs/bild3.png'); -> Bild entsprechend unter /ruben/imgs/ im github hochladen !!!
  AUSSERDEM: Für neues Bild ganz unten neue Einträge für die Rotation und für das Erzeugen des Bildes erstellen.
  -> Siehe ab Zeile 100 */
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0); /* Hintergrundfarbe ändern https://p5js.org/reference/#/p5/background */
  frameRate(0.5) /* Anzahl Frames pro Sekunde in Klammer schreiben */;

  /* h1 = createElement('h1', 'fructuoso/wipf');
  h1. position(400,100); */
}

function draw() {

  // rotate(0);
  image(logo, windowWidth-(windowWidth/100), windowHeight-(windowHeight/100), 382, 56);

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
    case 2:
      //Objekt Bild erzeugen:
      rotate(random(0, 180)); /* Rotation des Bildes, Angabe des Rotationswinkels in der Klammer */
      image(battle2, 0, 0, windowWidth, windowHeight);

      break;
    case 3:
      //Objekt Bild erzeugen:
      rotate(random(0, 180)); /* Rotation des Bildes, Angabe des Rotationswinkels in der Klammer */
      image(battle3, 0, 0, windowWidth, windowHeight);

      break;
    case 4:
      //Objekt Bild erzeugen:
      rotate(random(0, 180)); /* Rotation des Bildes, Angabe des Rotationswinkels in der Klammer */
      image(battle4, 0, 0, windowWidth, windowHeight);

      break;
    case 5:
      //Objekt Bild erzeugen:
      rotate(random(0, 180)); /* Rotation des Bildes, Angabe des Rotationswinkels in der Klammer */
      image(battle5, 0, 0, windowWidth, windowHeight);

      break;
    case 6:
      //Objekt Bild erzeugen:
      rotate(random(0, 180)); /* Rotation des Bildes, Angabe des Rotationswinkels in der Klammer */
      image(battle6, 0, 0, windowWidth, windowHeight);

      break;
    case 7:
      //Objekt Bild erzeugen:
      rotate(random(0, 180)); /* Rotation des Bildes, Angabe des Rotationswinkels in der Klammer */
      image(battle7, 0, 0, windowWidth, windowHeight);

      break;
    case 8:
      //Objekt Bild erzeugen:
      rotate(random(0, 180)); /* Rotation des Bildes, Angabe des Rotationswinkels in der Klammer */
      image(battle8, 0, 0, windowWidth, windowHeight);

      break;




  }



  frameRate(random(0.1, 1)); /*Erzeugt nach dem Laden eines Objekts für das nächste Objekt eine neue Geschwindigkeit, dadurch wird eine unregelmässige Geschwindigkeit erzeugt. */

  /*   $(window).resize(function () {
      createCanvas(windowWidth, windowHeight);
      background(0);
      redraw();
    });
  
    $(window).on('orientationchange', function () {
      createCanvas(windowWidth, windowHeight);
      background(0);
      redraw();
    }) */

}

function keyPressed() {

  //Alles was hier drin steht passiert beim Klick mit der Maus

  if (keyCode === ENTER) {

    let jetzt = new Date();
    let tag = jetzt.getDate();
    let monat = jetzt.getMonth() + 1;
    let jahr = jetzt.getFullYear();
    let stunden = jetzt.getHours();
    let minuten = jetzt.getMinutes();
    let sekunden = jetzt.getSeconds();




    let stempel = '_' + jahr + '_' + monat + '_' + tag + '_' + stunden + '_' + minuten + '_' + sekunden;

    save('fructuosowipf_loose_loose_loose_' + unique + stempel + '.jpg');

    return false;

  } else {

  }




}