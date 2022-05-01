let btnCriar = document.getElementById('criar-carta');
let cartaUser = document.getElementById('carta-texto');
let areaCarta = document.getElementById('carta-gerada');
let grpEstilo = ['newspaper', 'magazine1', 'magazine2'];
let grpTamanho = ['medium', 'big', 'reallybig'];
let grpRotacao = ['rotateleft', 'rotateright'];
let grpInclinacao = ['skewleft', 'skewright'];
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
  if (texto.trim().length === 0) {
    areaCarta.innerHTML = 'Por favor, digite o conteúdo da carta.';
  } else {
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
        novaCarta.classList.add(grpTamanho[Math.floor(Math.random()* 3)]);
        novaCarta.classList.add(grpEstilo[Math.floor(Math.random()* 3)]);
        novaCarta.classList.add(grpRotacao[Math.floor(Math.random()* 2)]);
        novaCarta.classList.add(grpInclinacao[Math.floor(Math.random()* 2)]);
        novaCarta.innerHTML = arrayPalavra[key];
        areaCarta.appendChild(novaCarta);
      }
    }
}