// variabile per il Punteggio
var points = 0;
// un array x i num vasuali (bombe)
var numberBomb = [];
// un array x num generati dall'utente
var numbersUser = [];
// una variabile x num tentativi
var numberPrompt;
// variabile x numeri generati, cambia a seconda della difficoltà scelta dall'utente
var numMinCheck;
var numMaxCheck;
// messaggio standard
var message = 'hai vinto';
var tentativiDifficoltà = 0;

do {
  var difficoltà = parseInt(prompt('scegli grado di difficoltà da 0 a 2'));
  tentativiDifficoltà++;
}
while (checkRangeNumber(0, 2, difficoltà) == false && tentativiDifficoltà < 3);

if (difficoltà == 0) {
  numberPrompt = 84;
  numMinCheck = 1;
  numMaxCheck = 100;
} else if (difficoltà == 1) {
  numberPrompt = 34;
  numMinCheck = 1;
  numMaxCheck = 50;

} else if (difficoltà == 2) {
  numberPrompt = 64;
  numMinCheck = 1;
  numMaxCheck = 80;
}
console.log('livello difficoltà:' + ' ' + difficoltà);
console.log('numeri da inserire per vincere:' + ' ' + numberPrompt);
console.log('numero minimo:' + ' ' + numMinCheck);
console.log('numero massimo:' + ' ' + numMaxCheck);

// funzione che genera num casuali
function getRandomNumber(numMin, numMax) {
  numMin = Math.ceil(numMin);
  numMax = Math.floor(numMax);
  return Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
}

var numeroRandom = getRandomNumber(1, 100);

// funzione che cerca in un array
function isInArray(array, element) {
  var i = 0;
  var result = false;
  while (i < array.length && result == false) {
    if (array[i] == element) {
      result = true;
    }
    i++;
  }
  return result;
}

// funzione che controlla che un numero sia in un certo range (per assicurarci che utente inserisca davvero num tra 1 e 100)
function checkRangeNumber(min, max, number) {
  var result = false;
  if (number >= min && number <= max) {
    result = true;
  }
  return result;
}



// genero 16 numeri casuali da 1 a 100 e li salvo
// generiamo un numero finchè il num non è già presente nell array numberBomb
while (numberBomb.length < 16) {

  var numberRandom = getRandomNumber(1, 100);
  var find = isInArray(numberBomb, numberRandom); //trovo true o false
  // pusho solo se il num non è presente
  if (find == false) {
    numberBomb.push(numberRandom);
  }
}
console.log(numberBomb.sort());


// chiedo all'utente di inserire un numero n volte, n dipende dalla difficoltà scelta
var findBomb = false;
while (numbersUser.length < numberPrompt && findBomb == false) {
  var userNumber = parseInt(prompt('inserisci un numero da ' + numMinCheck + ' a ' + numMaxCheck));
  // vammi a chiedere il num finchè non è corretto
  while (checkRangeNumber(numMinCheck, numMaxCheck, userNumber) == false) {
    // l'utente deve inserire un num dal minimo al massimo (esempio: difficoltà 0, da 1 a 100)
    var userNumber = parseInt(prompt('Devi inserire un numero compreso tra ' + numMinCheck + ' e ' + numMaxCheck));
    if (userNumber < numMinCheck || userNumber > numMaxCheck) {
      console.log(checkRangeNumber(numMinCheck, numMaxCheck, userNumber) + ' ' + userNumber + ' ' + 'non è un numero valido');
    }

    // questo numero non deve essere già stato inserito
  }
  // controllo che sia presente nell array
  if (isInArray(numbersUser, userNumber) == false) {
    numbersUser.push(userNumber);

    // se num presente nell'array delle bombe, utente perde
    if (isInArray(numberBomb, userNumber) == true) {
      message = 'hai perso';
      findBomb = true;
    } else {
      points++;
    }
  }
}
console.log(numbersUser);
// comunico punteggio finale
console.log(message + ' ' + 'Il tuo punteggio è:' + ' ' + points);
