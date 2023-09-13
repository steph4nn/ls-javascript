// function Soma(op1,op2){
//     return op1 + op2
// }

function Soma(...params){
    let resultado =0
    // for(let i =0; i < params.length;i++){
    //     resultado += params[i]
    //     console.log(params[i])
    // }
    for(const elemI of params){
        resultado +=elemI

    }
    return resultado
}

// console.log(Soma(1,3,5,6,7,8))
let f = 10
f = function(op2,op3){
    return op2+op3
}


f = (op2,op3)=>{
    return op2+op3
}

f = (op2,op3)=> op2+op3


console.log(f(5,6))