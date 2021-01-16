# Map, Filter e Reduce 

    Aula ministrada pelo professor  

## Filter
    Array.prototype.filter()
    Cria um novo array com todos os elementos que passaram no teste
    ad função fornecida
    
    var newArray = arr.filter(callback[, thisArg])

## Map
    Array.prototype.map()
    Chama o callack para cada elemento e devolve um novo array
    com a mesma quantidade de itens.

    var newArray = arr.map(callback[, thisArg])
## Reduce
    Array.prototype.reduce()
    Executa uma função para cada elemento retornando um único
    valor de retorno

    var newArray = arr.reduce(callback[, valorInicial])
## Encadeamento
    As três funções podem ser usadas juntas.