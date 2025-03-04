/*

  Inseriamo in pagina l’immagine della lampadina spenta che trovate 
  in allegato e accanto un bottone con la scritta “Accendi”.
  Al click del bottone, la lampadina dovrà accendersi (dovremo quindi 
  utilizzare l’immagine della lampadina accesa, sempre in allegato)

*/

const lampSwitchButton = document.getElementById('lamp-switch');
const lampImg = document.getElementById('lamp-img');

let switchState = 0; // 0 = off, 1 = on

lampSwitchButton.addEventListener('click', function() {
  if (switchState < 1) {
    lampImg.src = 'img/yellow_lamp.png';

    lampSwitchButton.innerHTML = 'Spegni'

    return switchState++;
  };

  lampImg.src = 'img/white_lamp.png';

  lampSwitchButton.innerHTML = 'Accendi'

  return switchState--;

});