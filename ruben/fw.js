/* Google Image Search API */
// API-Key for this project: AIzaSyARcy2xM3pIK39g_O8nyhAo_htSDP8Le54

// timeout ruben.fructuoso@gmail.com
//let googleImgUrl = "https://www.googleapis.com/customsearch/v1?key=AIzaSyARcy2xM3pIK39g_O8nyhAo_htSDP8Le54&cx=001038306842663858513:0oetd1hoj58&searchType=image&fileType=jpg,png&q=berlin";

//timeout ma.wibilea@gmail.com
let googleImgUrl = "https://www.googleapis.com/customsearch/v1?key=AIzaSyCjUKoorUS4PeeiVhtdxIAg2aSEJW1FHlU&cx=002715237432738536399:ub2vi6vqucv&searchType=image&fileType=jpg,png&q=berlin";


let googleRequestTimeout = setTimeout(function(){
  $('h1').text('Unable to load Wikipedia Articles, please try again later!');
}, 2000);



$.ajax({
  url: googleImgUrl,
  dataType: 'json',
  success: function(data) {

      googleImgs = data.items;

      console.log('before loop done.');

      for(var i = 0; i < googleImgs.length; i++){
          let googleImg = googleImgs[i];
          $('h1').append('<img class="img' + i + '" src="' + googleImg.link + '" alt="googleImg_' + i + '"/>');
      };

      console.log('after loop done.');

      clearTimeout(googleRequestTimeout);

  }
});




/* Für weiterführende Infos findet man die ganze Dokumentation von p5js unter: https://p5js.org/reference/ */

//Bilder vorladen
function preload(googleImgs) {

  
  

  img2 = loadImage(googleImgs[9].link);

  /* for (var i = 0; i < bild.length; i++){
    thisUrl = bild[i].url
    this["img"+i] = loadImage(thisUrl);
    console.log('done one img');
  } */
  console.log('done preload');
  /* bild1 = loadImage('imgs/bild1.png');
  bild2 = loadImage('imgs/bild2.png'); */
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

  let zufall = Math.floor(Math.random() * 9) /* Dies so belassen, wählt zufällig das nächste Element */

  /* Info zur random() Funktion, welche hier mehrmals zum Einsatz kommt, damit die Werte zufällig erzeugt werden:
  Es wird zufällig ein ganzzahliger Wert zwischen dem ersten Wert vor und dem zweiten Wert nach dem Komma erzeugt. 
  Mehr Infos: https://p5js.org/reference/#/p5/random 
  
  windowWidth = Breite des Browserfensters beim Laden der Webseite
  windowHeight = Höhe des Browserfenster beim Laden der Webseite
  
  */


    //Objekt Bild erzeugen:

  rotate(random(5,300)); /* Rotation des Bildes, Angabe des Rotationswinkels in der Klammer */
  image(img2, random(0,windowWidth), random(0,windowHeight),random(30,600),random(100,800));



frameRate(random(0.1,7)); /*Erzeugt nach dem Laden eines Objekts für das nächste Objekt eine neue Geschwindigkeit, dadurch wird eine unregelmässige Geschwindigkeit erzeugt. */ 


}

function mousePressed(){
  //Alles was hier drin steht passiert beim Klick mit der Maus
 background(0);
 frameRate(30);
}