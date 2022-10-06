// Como criar um Object

const person = {
    name: 'John',
    age: 30,
    weight: 88.6,
    isAdmin: true
}

// Como fazer para pegar uma propriedade do objeto e imprimir na tela

console.log(person.name)

//interpolação com uma propriedade do objeto
/*aprendi que colocar \n no texto causa uma quebra de linha.
  No console fica desta forma:
   
    John tem 30 anos e pesa 88.6 kg.
    John é administrador do sistema?
    true

*/

console.log(`${person.name} tem ${person.age} anos e pesa ${person.weight} kg.\nJohn é administrador do sistema?\n${person.isAdmin}`)