let pays;
let old_value = " ";
let police1;
let police2;

let x = 15;
let y = 50;

function preload() {

   police1 = loadFont('medias/OfficeCodeProD-Bold.ttf');
   police2 = loadFont('medias/OfficeCodeProD-Medium.ttf');
 
}

function setup() {
   createCanvas(innerWidth, innerHeight);
   background(0);
   load_json() ;
   fill(255);
   stroke(255);
}

function draw() {

}

function pays_nom(nom) {
   background(0);
   x = 15;
   y = 50 ;

 
   for (var i = 0 ; i < 6 ; i ++){

   if (pays[i].Entity == nom) {
      textFont(police1);
      let taille = map(pays[i].Time,2.916666667 , 6.033333333, 10, 50);
      textSize(taille);
      text(pays[i].Code, x, y);
      textSize(15);
      text(nfc(pays[i].Time, 0), x, y + 20);

      x = x + (width/10);
      y = y + (height/11);


      /*
      x = x + 150;
      y = y + 60;
      */
   }
  


    /*  if ((social[i].Entity != old_value) && (social[i].Year == 2018)) {
      console.log(social[i].Entity);
      }

      old_value = social[i].Entity ;
      */
  }

}

function load_json() {
   pays = loadJSON("medias/daily-time-spent-on-the-internet-by-young-people.json");
}