// Campo Minato
// Il computer deve generare 16 numeri casuali da 1 a 100.
var numVietati = [];
var arrayUserTries = [];
var maxTries = 84;

while (numVietati.length < 16) {
  var numRandom = getRandomIntInclusive(1, 100);
  if (numVietati.includes(numRandom) == false) {
    numVietati.push(numRandom);
  }
}
console.log(numVietati);

function checkBomb(arrayToCheck, numberToCheck) {
  for (var i = 0; i < arrayToCheck.length; i++) {
    if (numberToCheck == arrayToCheck[i]) {
      return true;
    }
  }
  return false;
}

var counter = 0;
while (arrayUserTries.length < maxTries && checkBomb(numVietati, userTry) == false) {
  var userTry = parseInt(prompt('inserisci un numero da 1 a 100'));
  // controllo che num non sia una bomba(check bomb)
  if (checkBomb(numVietati, userTry) == true) {
    // se è una bomba ho perso, indico il punteggio

    console.log('Hai inserito il num' + ' ' + userTry + ', hai pestato una Bomba. Punteggio ' + counter);
  }


  // controllo che num non sia già stato detto
  else if (userTry == arrayUserTries) {
    userTry = parseInt(prompt('hai già inserito questo numero. inserisci un altro numero'));
    if (userTry == arrayUserTries) {
      userTry = parseInt(prompt('hai già inserito questo numero. inserisci un altro numero'));
    } else if (userTry != arrayUserTries) {
      arrayUserTries.push(userTry);
      counter += +1;
      console.log('punteggio attuale: ' + counter);
    }

  }
  // se num non l'ho già detto pusho tentativo nel array tentativi
  else if (userTry != arrayUserTries) {
    arrayUserTries.push(userTry);
    counter += +1;
    console.log('punteggio attuale: ' + counter);
    // aumento punteggio

    // se num è presente nei tentativi dico di inserirne un altro
  }
  // se ho raggiunto num max tentativi ho vinto
  else if (arrayUserTries.length == maxTries) {
    console.log('Hai vinto! Punteggio ' + counter);

  }

}
// funzione generazione numero random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// In seguito deve chiedere all’utente di inserire per 84 volte un numero da 1 a 100

// se il numero è presente nella lista dei numeri generati, la partita termina,
// altrimenti continua chiedendo all’utente un altro numero.

// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di tentativi consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.



// La partita termina quando il giocatore inserisce un numero “vietato”, ovvero presente nella lista di numeri random, o raggiunge il numero massimo possibile di tentativi consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
