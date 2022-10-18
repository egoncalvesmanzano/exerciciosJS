// como declarar arrays

const animals = [
    'lion',
    'cat',
    'dog',
 ]

 //acessar valores dentro da array

/*
Note que na array a contagem começa em 0:

    Array(3) [ "lion", "cat", "dog" ]
​
    0: "lion"
    1: "cat"
    2: "dog"​

*/

 console.log(animals[2])

 /*
  console.log(animals[2])
    resultado: dog
*/

 /*
Para saber quantidade dos elementos do array use o .lenght:

  console.log(animals.length)
    resultado: 3
*/

//posso colocar objetos dentro de uma array:

const animalsTwo = [
    'bird',
    'rat',
    {
        name: "John",
        age: "32"
    }
 ]

 console.log(animalsTwo[2])

 //posso chamar uma propriedade de um objeto que está dentro de um array colocando "".nomedapropriedade" depois dos colchetes "[ ]":
 //Esta não é uma prática usual.

const animalsThree = [
    'bird',
    'rat',
    {
        name: "John",
        age: "32"
    }
 ]

 console.log(animalsThree[2].name)

