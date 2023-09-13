const array = [5]
array[0] = 10 //alterar valor no indice
console.log(array)
array.push(5) //add no metodo pilha
console.log(array)
array.push(23)//add no metodo pilha
console.log(array)

//delete array[1] // nao usar
// console.log(array)

array.shift()
console.log(array)

array.unshift(150)
console.log(array)


array[0] =10
console.log(array)

array.splice(1,0,'ola')
console.log(array)

array.splice(2,2)
console.log(array)
// const objArray = new Array(5)
// console.log(objArray.length)