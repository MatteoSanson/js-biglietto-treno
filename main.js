'use strict';

// 1) Tramite prompt chiedo all'utente il numero di km che deve percorrere (ottengo variabile stringa che trasformo in numero e stampo in console).
const chilometri = prompt("Inserisci il numero di chilometri totali del tuo viaggio");
const chilometriNumero = Number(chilometri.replace(',','.'));
console.log ("Chilometri totali di viaggio: ", chilometriNumero);
// 2) Tramite prompt chiedo all'utente la sua età (ottengo variabile stringa che trasformo in numero e stampo in console).
const eta = prompt("Inserisci la tua età");
const etaNumero = Number(eta);
console.log ("La tua età: ", etaNumero);

// variabili sconti 
const scontoMin = 20;
const scontoOver = 40;


// condizione per capire se ho ottenuto dall'utente un numero o no
if (!isNaN(chilometriNumero) && !isNaN(etaNumero) ){
    // 3) Ho una variabile prezzoKm pari a 0,21.
    const prezzoKm = 0.21;
    // 4) Ottengo il prezzoTotale: km * prezzoKm.
    let prezzoBiglietto = chilometriNumero * prezzoKm;

    /*
    5) Applico la scontistica con le condizioni:
        - se l'età < 18
            scontoBiglietto = prezzoBiglietto/100 * 20 */
    if(etaNumero < 18){
        console.log ("Hai uno sconto under 18 anni");
        const scontoBiglietto = ((prezzoBiglietto / 100) * scontoMin);
        prezzoBiglietto -= scontoBiglietto;
        
    }else if (etaNumero >= 65){
        /* - altrimenti se età >= 65 
            scontoBiglietto = prezzoBiglietto/100 * 40 */
        console.log ("Hai uno sconto over 65 anni");
        const scontoBiglietto = ((prezzoBiglietto / 100) * scontoOver);
        prezzoBiglietto -= scontoBiglietto;
    }else {
        console.log ("Non hai sconti età");
    }
    /* - altrimenti otteniamo prezzoTotale;*/


// 6) Convertire il numero ottenuto in una variabile numerica con due cifre decimali.
    console.log ("Il prezzo del biglietto è ", prezzoBiglietto.toFixed(2)+" €")

} else {
    console.log ("Errore");
}

