const array1 = [1,2,4,5,6,7,8,9,10]
const array2 = [5,9,13,10]


//criar uma nova array com os valores dos outro 2 arrays
console.log([...array1, ...array2])

console.log('-------------------------')

console.log([array1,array2])

console.log('-------------------------')

const [a,b,c,d, ...novoArray] = array1
console.log(b)
console.log(novoArray)

console.log('-------------------------')

console.log(array1.join(' ,')) //transforma o array em string

console.log('-------------------------')

