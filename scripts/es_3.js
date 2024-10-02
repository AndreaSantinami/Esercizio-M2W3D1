let stringa="Ciao"

function reverseString(a){
    console.log("--- ESERCIZIO 3 ---")
    let str = a.split("").reverse().join("")
    return str
}

console.log(reverseString(stringa)) 