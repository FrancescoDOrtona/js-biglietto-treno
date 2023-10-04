// # Prezzo biglietto del treno

// - Chiedere all'utente i km che vuole percorrere
//     - Dichiarare la variabile ed il prompt
const km = parseFloat(prompt('Inserisci i Km Totali da percorrere'))
console.log(km)

// - Chiedere all'utente l'età
//     - Dichiarare la variabile ed il prompt
const age = parseInt(prompt('Inserisci l\'età del passeggero'))
console.log(age)

// - Calcolare il prezzo base del biglietto in base ai km da percorrere (0.21€ a km)
//     - Dichiarare la variabile del prezzo per km e del prezzo base
//     - Calcolare il prezzo base del biglietto
const priceForKm = 0.21
let ticketPrice
const ticketBasePrice = parseFloat(km * priceForKm) 
console.log(ticketBasePrice)

// - Calcolare il prezzo con lo sconto in base all'età
//     - Dichiarare le variabili per i prezzi scontati
//     - Calcolare lo sconto del 20% per i minorenni
//     - Calcolare lo sconto del 40% per gli over 65
const discountUnder18 = ticketBasePrice * 0.2
const discountOver65 = ticketBasePrice * 0.4
console.log(discountUnder18, discountOver65)

// - Stabilire il prezzo nel caso in cui ci sia uno sconto
//         - SE l'utente è minorenne prezzo base - 20%
if (age<18){
    ticketPrice = ticketBasePrice - discountUnder18
}

//         - ALTRIMENTI SE l'utente è over 65 prezzo base -40%   
    else if(age >= 65){
    ticketPrice = ticketBasePrice - discountOver65
}
console.log(ticketPrice)

// - Stampare il prezzo nel dom con 2 cifre dopo la virgola
//     - Inserire nell'HTML un tag in cui stampare il prezzo con id = 'ticket__price'
//     - Recuperare con js l'elemento del dom con id = 'ticket__price'
const priceDomElement = document.getElementById('ticket__price')

//     - Modificare l'innerHTML del tag con il valore della variabile prezzo biglietto
priceDomElement.innerHTML = ticketPrice 