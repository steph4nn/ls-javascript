import  {Exame}  from './exam.js'

const pesos = {
    q1: 2,
    q2: 2,
    q3: 2,
    q4: 2,
    q5: 2
}

const gabarito = {
    q1: 'a',
    q2: 'b',
    q3: 'a',
    q4: 'c',
    q5: 'd'

}

const exame = new Exame(pesos, gabarito)

const reposta1 = {
    estudante: 'Lauro',
    respostas: {
        q1: 'a',
        q2: 'c',
        q3: 'a',
        q4: 'c',
        q5: 'e'
    }
}

exame.add(reposta1)

const reposta2 = {
    estudante: 'Marcelo',
    respostas: {
        q1: 'a',
        q2: 'd',
        q3: 'd',
        q4: 'b',
        q5: 'd'
    }
}

exame.add(reposta2)


console.log(exame.avg());

console.log(exame.lt(6))
console.log(exame.gt(10))
console.log(exame.min())
console.log(exame.max())