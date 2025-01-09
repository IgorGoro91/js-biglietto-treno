// preparazione 
// eta e chilolometri 
let parolaEta = prompt("quanti anni hai")
let parolaKm = prompt("quanti chilometri percorri")



console.log(parolaEta, parolaKm)


let euro = 0.21
let costoTot ;
 
if( parolaKm > 0) {
    costoTot = parolaKm * euro;
    console.log ( `${costoTot} costo dell biglieto`)
}

if(parolaEta < 18){
    costoScontato = costoTot * 0.8;
    console.log( `${costoScontato} costo scontato anni 18`)
}

if(parolaEta > 65){
    costoScontato = costoTot * 0.6;
    console.log( `${costoScontato} costo scontato anni 65`)
}




