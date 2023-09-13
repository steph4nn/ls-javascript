
const Empresa = {
    name:'Amazon',
    founded:'1994',
    industry:'E-Commerce, Cloud',
}
const Empresa2 ={
    name:'Facebook',
    founded:'2004',
    industry:'Social',
}
const Empresa3={
    name:'Alphabet Inc.',
    founded:'2015',
    industry:'Search, Cloud, Advertising',
}
companies=[Empresa, Empresa2,Empresa3]

const show =  (array) =>{
    array.forEach((element) => console.log(element.name+'.........'+element.founded))
}

show(companies)