/* let parole = "ciao sono andrea"

function upperFirst(a) {
    console.log("--- ESERCIZIO 4 ---")
    let str = a.split(" ")
    for (let i = 0; i < str.lenght; i++) {
        if (str[i]) {
            str[i] = str[i][0].toUpperCase() + str[i].substring(1)
            console.log(str)
        }
    }
    console.log(str)
    return str.join(" ")
}

console.log(upperFirst(parole)) */


/* function upperFirst(str) {
    console.log("--- ESERCIZIO 4 ---")
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        if (words[i]) {
            words[i] = words[i][0].toUpperCase() + words[i].substring(1);
        }
    }
    return words.join(' ');
}

console.log(upperFirst("questa è una prova"));
 */

function upperFirst(str) {
    console.log("--- ESERCIZIO 4 ---")

    // Dividi la stringa in un array di parole
    let words = str.split(" ");
    
    // Mappa ogni parola rendendo maiuscola la prima lettera e minuscole le altre
    let capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    
    // Unisci l'array di parole di nuovo in una stringa, separata da spazi
    return capitalizedWords.join(" ");
}

// Esempio di utilizzo
console.log(upperFirst("ciao MONDO questo è un TEST"));
// Output: "Ciao Mondo Questo È Un Test"