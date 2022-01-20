
let flag = NaN; //parametro necessario per evitare di continuare ad eseguire lo scriptjs quando viene inserito un dato non concesso




// Chiedo di inserire i km da percorrere
let km = prompt("Quanti km di viaggio?"); 

    // controllo se i km inseriti sono validi
        km = parseInt(km);
        if(isNaN(km)){
            // console.log(`I km inseriti non sono validi`);
            alert(`I km inseriti non sono validi`);
            flag = null;
        }else{
            console.log(`È stato impostato un viaggio di ${km} km`);
        }
    // 

    document.getElementById("km").innerHTML= km + " km";






// Controllo se i km inseriti sono validi e nel caso continuo chiedendo l'età 

let eta = NaN;

if (isNaN(flag)){

    // Chiedo di inserire l'età
    eta = prompt("Quale è la tua età?"); 

        // controllo se l'età inserita è valida
            eta = parseInt(eta);
            if (isNaN(eta)){
                // console.log("Età inserita non valida");
                alert("Età inserita non valida");
                flag = null;
            }else{ //età inserita valida
                
                if(eta < 10){
                    // console.log("Non accettiamo passeggieri con età minore di 10 anni");
                    alert("Non accettiamo passeggieri con età minore di 10 anni")
                    flag = null;
                } else if (eta > 100){
                    // console.log("Non accettiamo passeggieri con età maggiore di 100 anni");
                    alert("Non accettiamo passeggieri con età maggiore di 100 anni")
                    flag = null;
                }else{
                    console.log(`È stata inserita l'età: ${eta} annni`);
                }
            }

        // 

        document.getElementById("eta").innerHTML = eta + " anni";
}







// Se anche l'età inserita è accettata, quindi flag != null continuo ad eseguire il codice per calcolare il prezzo
if (isNaN(flag)){

    // Definisco prezzo al km
    const PREZZO = 0.21;

    // Calcolo prezzo biglietto
    let prezzoBiglietto = km * PREZZO;
    prezzoBiglietto = prezzoBiglietto.toFixed(2);
    let prezzoFinale = `Il prezzo del biglietto per percorrere ${km} km è di ${prezzoBiglietto} €.`;
    document.getElementById("prezzoBiglietto").innerHTML = prezzoFinale;
    console.log(`Calcolato prezzo biglietto, costo di ${prezzoBiglietto} €`);
    
    // Sconto?
    if(eta < 18){
        prezzoBiglietto = prezzoBiglietto - ((prezzoBiglietto) * 20) / 100;
        prezzoBiglietto = prezzoBiglietto.toFixed(2);
        prezzoFinale = ` Solo per oggi, poichè sei minorenne applichiamo uno sconto del 20%. Quindi per te il prezzo scontato per percorrere ${km} km è di ` +  prezzoBiglietto + " €.";
        document.getElementById("prezzoBigliettoScontato").innerHTML = prezzoFinale;
        console.log(`Il passeggero è minorenne, applico sconto 20%, totale scontato: ${prezzoBiglietto}`);
    
    } else if(eta > 65){
        prezzoBiglietto = prezzoBiglietto - ((prezzoBiglietto) * 40) / 100;
        prezzoBiglietto = prezzoBiglietto.toFixed(2);
        prezzoFinale = ` Solo per oggi, poichè hai un età maggiore di 65 anni applichiamo uno sconto del 40%.Quindi per te il prezzo scontato per percorrere ${km} km è di ` +  prezzoBiglietto + " €.";
        document.getElementById("prezzoBigliettoScontato").innerHTML = prezzoFinale;
        console.log(`Il passeggero ha più di 65 anni, applico sconto 40%, totale scontato: ${prezzoBiglietto}`);
    }
  
}



   