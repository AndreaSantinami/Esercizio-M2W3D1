/* function crazySum() {
    let num1 = parseInt(document.getElementById("input1").value)
    let num2 = parseInt(document.getElementById("input2").value)
    if (num1 === num2) {
        let n = (num1 + num2) * 3
        let span = document.getElementById("risultato_esercizio1")
        let aggiunta = "I due numeri sono uguali e il risultato è: " + n
        span.textContent = aggiunta
        console.log("n = " + n)
        console.log("i numeri sono uguli")
        console.log("1 = " + num1)
        console.log("2 = " + num2)
    } else {
        let n = (num1 + num2)
        let span = document.getElementById("risultato_esercizio1")
        let aggiunta = "Il risultato è: " + n
        span.textContent = aggiunta
        console.log("n = " + n)
        console.log("i numeri non sono uguli")
        console.log("1 = " + num1)
        console.log("2 = " + num2)
    }


} */

let n1 = 10
let n2 = 10

function crazySum(a,b){
    console.log("--- ESERCIZIO 1 ---")
    console.log("il primo numero è: " + a)
    console.log("il secondo numero è: " + b)
    if(a===b){
        /* console.log(a +"-"+ b +" : I numeri sono uguali")
        let n = a + b
        let m = n*3
        console.log("La loro somma è : "+ n )
        console.log("Moltiplicato per 3 è : "+ m ) */
        return (a+b)*3
    }else{
        /* console.log(a +"-"+ b +" : I numeri non sono uguali")
        let n = a + b
        console.log("La loro somma è : "+ n ) */
        return a + b 
    }
}



console.log(crazySum(n1,n2))