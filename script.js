/*

  Inseriamo in pagina l’immagine della lampadina spenta che trovate 
  in allegato e accanto un bottone con la scritta “Accendi”.
  Al click del bottone, la lampadina dovrà accendersi (dovremo quindi 
  utilizzare l’immagine della lampadina accesa, sempre in allegato)

*/

const lampSwitchButton = document.getElementById('lamp-switch');

lampSwitchButton.addEventListener('click', function() {
  console.log('funziona')
});