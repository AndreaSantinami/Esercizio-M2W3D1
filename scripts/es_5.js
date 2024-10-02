//Math.floor(Math.random() * 11) crea numeri da 0 a 10 

// Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un 
// numero chiamato n e ritorna un array contenente n numeri random contenuti 
// tra 0 e 10.


function giveMeRandom(n){
    console.log("--- ESERCIZIO 5 ---")
    let array=[]
    for(i=0; i<n ; i++ ){
        let random = Math.floor(Math.random() * 11)
        array.push(random)
    }
    return array
}

console.log(giveMeRandom(8))