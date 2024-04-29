// FUNZIONE PALINDROMA

function palindroma(parola){
    
    const reverseWord = [];
    for (let i= parola.length -1; i >= 0 ; i--) {
        reverseWord.push(parola[i]); 
        }
        console.log(reverseWord);

    let parolaDaComparare = "";
    for(let i = 0; i<reverseWord.length; i++ ) {
        parolaDaComparare += reverseWord[i];
    }
    
    if(parola.toLowerCase() == parolaDaComparare.toLowerCase()){
        document.getElementById('pali').innerHTML="La parola inserita \" " + parola + "\" è palindroma!";
    }
    else{
        document.getElementById('pali').innerHTML="La parola inserita \" " + parola + "\" non è palindroma!";
    }
}


// FUNZIONE ESTRAZIONE NUMERO RANDOMICO TRA 1 E 5

function randomNumber(){
    let random = Math.floor(Math.random() * 5) + 1;
    console.log("Sono nel randomNumber e il numero random è " + random);
    return random;
}


// FUNZIONE PARI/DISPARI

function pariDispari(numero, scelta){

    if(numero % 2 ==0 && scelta == "pari"){
        document.getElementById('pardisp').innerHTML="Il risultato è " + numero + " ed è pari! L'utente ha vinto!";
    }
    else if(numero % 2 ==0 && scelta !="pari"){
        document.getElementById('pardisp').innerHTML="Il risultato è " + numero + " ed è pari! L'utente ha perso!";
    }
   
    else if(numero % 2 != 0 && scelta != "pari"){
        document.getElementById('pardisp').innerHTML="Il risultato è " + numero + " ed è dispari! L'utente ha vinto!";
    }
    else if(numero % 2 != 0 && scelta == "pari"){
        document.getElementById('pardisp').innerHTML="Il risultato è " + numero + " ed è dispari! L'utente ha perso!";
    }
}