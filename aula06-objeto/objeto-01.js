const Pessoa = {
    nome: "Lauro",
    sobrenome: "Stephan",
    ehEstudante: true,
    idade: 21,
    obterNomeCompleto: function() {
        return this.nome +" "+this.sobrenome
        
    }
}

console.log(Pessoa.nome)
console.log(Pessoa.sobrenome)
Pessoa.nome = "LauroLind"
console.log(Pessoa.obterNomeCompleto())

if (Pessoa.ehEstudante) Pessoa.curso = "S.I."

console.log(Pessoa)

//acessando comp

console.log(Pessoa.nome)
//or
console.log(Pessoa["nome"])

const pessoa2 = {...Pessoa}
pessoa2.nome = "sebastiao" 
console.log(pessoa2.nome)


const pessoa3 = {... Pessoa, curso:"eng. de soft"}
console.log(pessoa3.curso)

//nome composto

const obj = {
    'nome completo': 'sebastiao tiao'
}
console.log(obj['nome completo'])