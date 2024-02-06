const text = [
    "Ajeq Tarbiyya, l'Association des jeunes pour une éducation de qualité, est dédiée à la transformation positive des jeunes générations. Nous croyons fermement que l'éducation est la clé du changement, et nous nous efforçons de combattre les mauvaises éducations et les mauvaises mœurs pour créer une société où la sagesse, la responsabilité et l'innovation prévalent.",
    "Notre engagement va au-delà de l'éducation formelle. Ajeq Tarbiyya apporte son soutien à la communauté à travers des actions bienveillantes telles que les visites aux malades à l'hôpital, les dons de fournitures d'études pour encourager l'apprentissage, et des initiatives alimentaires pendant le mois béni de Ramadan, soulignant ainsi notre attachement aux pratiques musulmanes authentiques.",
    "Ajeq Tarbiyya met particulièrement l'accent sur l'éducation islamique, guidant les jeunes vers la sagesse, la moralité et la responsabilité selon les principes de l'Islam. À travers nos programmes, nous visons à équiper les jeunes d'une éducation qui transcende les salles de classe, cultivant des individus pieux et éthiques.",
    // Ajoutez d'autres textes au besoin
];

let currentIndex = 0;
const scrollingTextElement = document.getElementById('scrollingText');

function updateText() {
    scrollingTextElement.textContent = text[currentIndex];
    currentIndex = (currentIndex + 1) % text.length;
}

// Affiche le premier texte
updateText();

// Change le texte toutes les 6 secondes
setInterval(updateText, 6000);

/* ==================== CAROUSSEL IMAGE HEADER ======================= */
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
/* ==================== FIN ======================= */