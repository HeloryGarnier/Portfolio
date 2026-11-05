const dropBoutonDeroulant = document.querySelector('.bouton-deroulant');
const droponglets = document.querySelector('.onglets');
dropBoutonDeroulant.addEventListener('click', function() {
  droponglets.classList.toggle("show");
});