verificarTriangulo = (ladoA,ladoB, ladoC)=>{
    if (ladoA === ladoB && ladoB == ladoC){
        return 'equilateral'
    }
    else if (ladoA === ladoB || ladoB === ladoC || ladoC === ladoA){
        return 'isosceles'
    }
    else{
        return'scalene'
    }
}

console.log(verificarTriangulo(3,3,3))



