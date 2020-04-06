const nome = "Marcos";
const sexo = "M";
const idade = 48;
const contribuicao = 53;

const aposentadoria = idade + contribuicao;
const mulherApta = sexo === "F" && aposentadoria >= 85;
const homemApto = sexo === "M" && aposentadoria >= 95;

if(mulherApta || homemApto)
    console.log(`${nome} você pode se aposentar!`);
    else
    console.log(`${nome} você não pode se aposentar!`);
