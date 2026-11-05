const dropBoutonDeroulant = document.querySelector('.bouton-deroulant');
const droponglets = document.querySelector('.onglets');
dropBoutonDeroulant.addEventListener('click', function() {
  droponglets.classList.toggle("show");
});

setInterval(function() {
  const t = document.getElementById("clignotant");
  t.style.visibility = (t.style.visibility === "hidden") ? "visible" : "hidden";
}, 500);

setInterval(function() {
  const t = document.getElementById("clignotant2");
  t.style.visibility = (t.style.visibility === "hidden") ? "visible" : "hidden";
}, 500);

setInterval(function() {
  const t = document.getElementById("clignotant3");
  t.style.visibility = (t.style.visibility === "hidden") ? "visible" : "hidden";
}, 500);

setInterval(function() {
  const t = document.getElementById("clignotant4");
  t.style.visibility = (t.style.visibility === "hidden") ? "visible" : "hidden";
}, 500);

setInterval(function() {
  const t = document.getElementById("clignotant5");
  t.style.visibility = (t.style.visibility === "hidden") ? "visible" : "hidden";
}, 500);