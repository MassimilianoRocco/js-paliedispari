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
    
    if(parola == parolaDaComparare){
        console.log("La parola inserita è palindroma!");
        document.getElementById('pali').innerHTML="La parola inserita \" " + parola + "\" è palindroma!";
    }
    else{
        console.log("La parola inserita non è palindroma!");
        document.getElementById('pali').innerHTML="La parola inserita \" " + parola + "\" non è palindroma!";
    }
}