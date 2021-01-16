/*
    Array.prototype.reduce()
    Executa uma função para cada elemento retornando um único
    valor de retorno

    var newArray = arr.reduce(callback[, valorInicial])

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
        weight: 1
    },
    {
        type: 'horse',
        name: 'pé de pano',
        age: 1,
        weight: 1
    }
]

const totalWeitght = pets.reduce((total, pet) =>{
    return total + pet.weight;
}, 0)

const totalWeitghtAge =  pets.reduce((total, pet) => {
    return {
        totalAge: total.totalAge + pet.age,
        totalWeitght: total.totalWeitght + pet.weight
    }
}, {totalAge: 0, totalWeitght: 0});

console.log(totalWeitghtAge);
