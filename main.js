/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/


const prezzoBigleto = 0.21

let km = prompt( " Quanti Km percorri") 
let eta =  prompt("Quanti anni hai") 

let sconto18 = 0.8
let sconto65 = 0.6

let prezzoTotale;

console.log( `${km} =I tuoi Km:`,
     `${eta} =la tua eta:`,
     `${km * prezzoBigleto} = il prezzo bigletto` )


     if( eta < 18) {
        prezzoTotale = (prezzoBigleto * km) * sconto18
        
     } else if(eta > 65){
        prezzoTotale = (prezzoBigleto * km) * sconto65
        
     } else{
        prezzoTotale = (prezzoBigleto * km)
     }

     console.log(`il tuo sconto ${prezzoTotale.toFixed(2)} euro`)