/* Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati. */
var bombNumbers = [];
var bomb;

while (bombNumbers.length < 16) {
    var bomb = getRandomNumber(1, 100);

    if (!isInArray(bomb, bombNumbers)) {
    }
    bombNumbers.push(bomb);
}
console.log(bombNumbers);


/* In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100. */
var userNumber;
var userChoices = [];
var maxChoises = 84;

/* inizializzo fuori dal ciclo while la variabile gameOver false */
var gameOver = false;

while (userChoices.length < 84 && gameOver == false) {

    var userNumber
    do {
        userNumber = parseInt(prompt("Inserisci un numero compreso tra 1 e 100"));
    } while (isNaN(userNumber) || userNumber <1 || userNumber > 100);
    
    /* gameOver diventerà true quando il numero inserito dall'utente, quindi userNumber, è presente tra i numeri dell'array delle bombe, quindi bombNumbers */
    if (isInArray(userNumber, bombNumbers)) {
        gameOver = true;
    } else if (!isInArray(userNumber, userChoices)) {
        userChoices.push(userNumber);
    }
    
}
alert("Game Over\n il to punteggio è:" + userChoices.length);
console.log(userChoices);


/* L'utente non può inserire più volte lo stesso numero. */


/* Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero. */


/* La partita termina quando il giocatore inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti. */


/* Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito. */

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
/* inizializzo la variabile a false, nella funzione come argomenti elemento da cercare e array dove cercarlo, ciclo for per cercare dentro tutto l'array, se lo trovo e true altrimenti mi restituisce return false */
function isInArray (element, array) {
    for (var i = 0; i < array.length; i++) {
        if (element == array[i]) {
            return true;
        }

    }
    return false;
}