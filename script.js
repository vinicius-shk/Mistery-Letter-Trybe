let btnCriar = document.getElementById('criar-carta');
let cartaUser = document.getElementById('carta-texto');
let areaCarta = document.getElementById('carta-gerada');
btnCriar.addEventListener('click', geraCarta);
function geraCarta() {
  let inputUser = cartaUser.value;
  let novaCarta = document.createElement('span');
  novaCarta.innerHTML = inputUser;
  areaCarta.appendChild(novaCarta);
}