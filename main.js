'use strict';

// 1) Tramite prompt chiedo all'utente il numero di km che deve percorrere (ottengo variabile stringa che trasformo in numero e stampo in console).
const chilometri = prompt("Inserisci il numero di chilometri totali del tuo viaggio");
const chilometriNumero = parseFloat(chilometri.replace(',','.'));
console.log ("Chilometri totali di viaggio: ", chilometriNumero);
// 2) Tramite prompt chiedo all'utente la sua età (ottengo variabile stringa che trasformo in numero e stampo in console).
const eta = prompt("Inserisci la tua età");
const etaNumero = parseInt(eta);
console.log ("La tua età: ", etaNumero);
// 3) Ho una variabile prezzoKm pari a 0,21.
const prezzoKm = 0.21;
// 4) Ottengo il prezzoTotale: km * prezzoKm.
const prezzoTotale = chilometriNumero * prezzoKm;
console.log ("Il prezzo totale del tuo viaggio è: ", prezzoTotale.toFixed(2) + " €");

/*
5) Applico la scontistica con le condizioni:
    - se l'età < 18
        prezzoScontato = prezzoTotale * 0,8 (sconto del 20%); */
if(etaNumero < 18){
    const prezzoScontato = prezzoTotale * 0.8;
    console.log ("Il tuo prezzo scontato è: ", prezzoScontato.toFixed(2) + " €");
}else if (etaNumero >= 65){
    /* - altrimenti se età >= 65 
        prezzoScontato = prezzoTotale * 0,6 (sconto del 40%); */
    const prezzoScontato = prezzoTotale * 0.6;
    console.log ("Il tuo prezzo scontato è: ", prezzoScontato.toFixed(2) + " €");
}else {
    console.log ("Non hai sconti");
}
    /* - altrimenti otteniamo prezzoTotale;*/


// 6) Convertire il numero ottenuto in una variabile numerica con due cifre decimali.
// alla variabile ottenuta aggiungo .toFixed(2);
