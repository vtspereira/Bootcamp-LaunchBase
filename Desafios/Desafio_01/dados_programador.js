const programador = {
    nome: "Carlos",
    idade: 32
};

const tecnologias = { propriedade:[
    {nome: 'C++', especialidade: 'Desktop'},
    {nome: 'Python', especialidade: 'Data Science'},
    {nome: 'JavaScript', especialidade: 'Web/Mobile'}
]};

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${tecnologias.propriedade[0].nome} com especialidade em ${tecnologias.propriedade[0].especialidade}`);