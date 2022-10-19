//função anônima
//function expression
//function anonymous
/*
const sum = function(){

}

sum()
*/

//parâmetros da função/parameters

/*const sum = function(number1, number2){ // number1, number2 === parameters
    console.log(number1 + number2)
}

sum(2, 3) //arguments
sum(100, 200)
sum(20.10, 25.15)*/

const sum = function(number1, number2){ // number1, number2 === parameters
   let total = number1 + number2
   return total // uma função sempre que encontra uma linha return, ela para a execução dela e retorna o que vem logo a frente, no caso a variável total
}

let number1 = 20
let number2 = 25

console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a soma dos dois números é ${sum(number1, number2)}`)
