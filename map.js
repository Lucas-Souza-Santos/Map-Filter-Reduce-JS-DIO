/*
    Array.prototype.map()
    Chama o callack para cada elemento e devolve um novo array
    com a mesma quantidade de itens.

    var newArray = arr.map(callback[, thisArg])
*/

const pets =  
[
    {
        type: 'dog',
        name: 'bolinha',
        age: 15,
        weight: 30
    },
    {
        type: 'cat',
        name: 'mingal',
        age: 6,
        weight: 2
    },
    {
        type: 'dog',
        name: 'rex',
        age: 4,
        weight: 5
    },
    {
        type: 'cat',
        name: 'marron',
        age: 2,
        weight: 1
    },
    {
        type: 'fish',
        name: 'gulp',
        age: 1,
        weight: 0.01
    },
    {
        type: 'horse',
        name: 'pé de pano',
        age: 1,
        weight: 0.01
    }
]
// console.log(pets);

const nameAnimals = pets.map((pet) => {
    return pet.name;
})

console.log(nameAnimals);
