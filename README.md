# js-biglietto-treno-form

L'esercizio prevede di scrivere un programma in JavaScript che chieda all'utente il numero di chilometri da percorre e l'età del passeggero.
Sulla base di queste informazioni si dovrà calcolare il prezzo del biglietto di viaggio, tenendo conto delle seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km).
- va applicato uno sconto del 20% per i minorenni.
- va applicato uno sconto del 40% per gli over 65.

Come output del prezzo finale verrà visualizzato un numero con massimo due decimali, per indicare centesimi sul prezzo.


## Svolgimento

1) Tramite prompt chiedo all'utente il numero di km che deve percorrere (ottengo variabile stringa che trasformo in numero e stampo in console).
2) Tramite prompt chiedo all'utente la sua età (ottengo variabile stringa che trasformo in numero e stampo in console).
3) Ho una variabile prezzoKm pari a 0,21.
4) Ottengo il prezzoTotale: km * prezzoKm.
5) Applico la scontistica con le condizioni:
    - se l'età < 18
        prezzoScontato = prezzoTotale * 0,8 (sconto del 20%);
    - altrimenti se età >= 65 
        prezzoScontato = prezzoTotale * 0,6 (sconto del 40%);
    - altrimenti otteniamo prezzoTotale;
6) Convertire il numero ottenuto in una variabile numerica con due cifre decimali.