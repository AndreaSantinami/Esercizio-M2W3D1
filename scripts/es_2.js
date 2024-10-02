let num1 = 50

function boundary(a){
    console.log("--- ESERCIZIO 2 ---")
    if(a>=20 && a <=100 || a === 400){
        console.log("Il numero è : " + a)
        console.log("Il numero è compreso tra 20 e 100 incluso o esattamente 400")
        return true
    }else{
        console.log("Il numero è : " + a)
        console.log("Il numero non è compreso tra 20 o 100 o non esattamente 400")
        return false
    }
}

console.log(boundary(num1)) 