let btnCriar = document.getElementById('criar-carta');
let cartaUser = document.getElementById('carta-texto');
let areaCarta = document.getElementById('carta-gerada');
btnCriar.addEventListener('click', geraCarta);
function geraCarta() {
  let filhos = areaCarta.childNodes;
  if (filhos.length !== 0) {
  for (let key = filhos.length; key > 0; key -= 1) {
    areaCarta.removeChild(areaCarta.firstChild);
    }
  }
  let texto = cartaUser.value;
  let palavra = '';
  let arrayPalavra = [];
  for (let key = 0; key < texto.length; key += 1) {
    if (texto[key] !== ' ') {
      palavra += texto[key];
      console.log(palavra);
    } else {
      arrayPalavra.push(palavra);
      palavra = '';
    }
  }
  arrayPalavra.push(palavra);
  for (let key in arrayPalavra) {
    let novaCarta = document.createElement('span');
    novaCarta.innerHTML = arrayPalavra[key];
    areaCarta.appendChild(novaCarta);
  }
}