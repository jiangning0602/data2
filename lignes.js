// Avant d'analyser une base de données en csv ou excel vous devez convertir 
// votre fichier en JSON ---->   https://csvjson.com/csv2json

// ########################################################################################
// 1 : Déclaration des variables. Objects dans lesquels nous allons 
// stocker et mettre à jour différentes valeurs.

let pays;  // variable qui stockera toutes les données de notre document JSON

let police1;   // variable qui stockera la première police
let police2;   // variable qui stockera la deuxième police


let code ;
let temps;

let angle3 = 0;
//let num ;

let x ;   // on s'en servira pour déplacer les éléments de textes sur l'axe X
let y ;   // on s'en servira pour déplacer les éléments de textes sur l'axe Y


// ########################################################################################
// 2. Chargement des médias externes (images - typographies - sons)
function preload() {

   police1 = loadFont('medias/GT-America-Standard-Thin-Trial.otf');   // on charge la première police et on la stocke dans la variable police 1
   police2 = loadFont('medias/GT-America-Standard-Medium-Trial.otf');
   
 
}

// ########################################################################################
// 3. Initialisation du script. On paramètre le format de notre document 
// et on initialise les élèments necessaires à la suite du programme.
function setup() {
   createCanvas(innerWidth, innerHeight);   // gabarit du canevas
   background(0);  // couleur du fond au chargement
   pays = loadJSON("medias/daily-time-spent-on-the-internet-by-young-people.json");  // on récupère les données du fichier JSON
   angleMode(DEGREES);

   colorMode(HSB);
 
}

// ########################################################################################
// ########################################################################################
// 4. Boucle principale du programme. Elle sert à animer le canvas en mettant
// à jour nos fonctions 60 fois par seconde.
function draw() {


    //pays_nom("Netherlands");


}

// ########################################################################################
// 5. Fonction créée pour l'affiche de données
// la fonction que j'ai nommée social_annee s'exécute à chaque fois que l'on selectionne
// une année dans le menu déroulant HTML. A la selection, la fonction récupère l'année
// choisie par l'utilisateur
function pays_nom(nom) {

   

   background(0);  // fond noir 
   x = 20;         // premiere coordonnée en X de notre liste 
   y = 60 ;        // premiere coordonnée en Y de notre liste 

 
 
   for (var i = 0 ; i <= 23 ; i ++){

      // pour chaque ligne consultée, on ragarde avec une condition si l'année 
      // renseignée dans la colonne Year du document correspond à l'année choisie 
      // par l'utilisateur.  i = i + 1
      if (pays[i].Entity == nom) {
         fill(255);
         // on affiche le nom du réseau social
         textFont(police1);  // selection de la police1 comme titre      
          

         code = pays[i].Code;

         
         fill(255);
         textFont(police1); 
         temps = Math.round(pays[i].Time*100)/100;

       
   

      
       
       let angle = map(pays[i].Time, 0 , 6.033333333, 91, 271); // on détermine la taille de la ligne en fonction du nombre d'utilisateurs récupéré
        
       
   
      for (var a = 91 ; a < angle ; a = a + 2) {
     
               dessiner(a, angle);
               


        }
      
      
   
  
   }
   if (pays[i].Entity == nom) {
      angle3 = map(pays[i].Time, 0 , 6.033333333, 0, 180); 
      console.log(angle3);  
  

   
   

  
   

   

  // fill(200,255,255);
     //  arc(950, 150, 80, 80, 0, pays[i].Time/6.033333333*360); //Pourcentage du total
 
     


      }


}

}



function dessiner (a1, angle1) {

   setTimeout(function() { 
      push();

      // position de l'infographie
      translate(width /2 ,height/1.3);
      rotate (a1);  
      //fill(  a  , 100, 100);
      //fill(a , 0 , 0);
      //let b = map(angle1, 91 , 271, 150, 100 );
      fill( 100, 100 , 100);
      //noStroke();


      rect(-5, -5 , 10, height/1.5);
   
      pop();

    //  console.log(a1 +" " + angle1);

      if (a1+2 > int(angle1-1)) {
         afficher_texte();
      }

  }, 5 * (a1 - 91)); 



  
   
}

 

function afficher_texte() {

   fill(255);
   textSize(height/2.5); // taille de la police  文字  
   text(code, width /12, height/3.4); // on affiche le nom du réseau social 國家

   textSize(height/1.9); // taille de la police  文字
   text(temps, width /2.8, height/1.3); // on affiche le nom du time
 
   push();
   noStroke(); 
   fill(angle3*2,255,255);
   arc(width /1.1, height/7, height/6.6, height/6.6, 180, 2*180+2*angle3-180); 
   //arc(950, 150, 200, 200, 0,pays[i].Time/6.033333333*360); 
   pop();
}



function arc () {
   

 }



// create()