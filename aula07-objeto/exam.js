export class Exame {
    constructor(pesos, gabarito) {
        this.pesos = pesos;
        this.gabarito = gabarito
        this.exames = [] // exames dos estudantes
    }

    add(exame) {
        let nota = 0

        Object.keys(exame.respostas).forEach(questao => {
            if (exame.respostas[questao] === this.gabarito[questao]) {
                nota += this.pesos[questao]
            }
        })
        exame.nota = nota
        this.exames.push(exame)
    }

    avg() {
        let soma = 0

        this.exames.forEach(exame => {
            soma += exame.nota
        })

        return soma / this.exames.length
    }
    min(){
        let min = 999
        this.exames.forEach(exame=>{
            if (exame.nota < min){
                min = exame.nota
            }
        })
        return min
    }

    max(){
        let max = 0
        this.exames.forEach(exame=>{
            if (exame.nota > max){
                max = exame.nota
            }
        })
        return max
    }

    lt(limite) {
        const notas = this.exames.map(exame => {
            return exame.nota
        })

        return notas.filter(nota => nota < limite)
    }

    gt(limite) {
        const notas = this.exames.map(exame => {
            return exame.nota
        })
        return notas.filter(nota => nota > limite)
    }
}
