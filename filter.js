/*
    Array.prototype.filter()
    Cria um novo array com todos os elementos que passaram no teste
    ad função fornecida
    
    var newArray = arr.filter(callback[, thisArg])
*/

const pets = 
[
    {
        name: 'rex',
        type: 'dog',
        age: 10
    }, 
    {
        name: 'miau',
        type: 'cat',
        age: 2
    },
    {
        name: 'gulp',
        type: 'fish',
        age: 1
    }
]

const newPets = pets.filter((pet) => {
    return pet.age < 5;
})

console.log(pets);
console.log(newPets);

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

var newArr = arr.filter((num) => {
    return num % 2 == 0;
})

console.log(newArr);
