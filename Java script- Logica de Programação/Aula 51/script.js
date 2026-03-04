// Atribuição via desestruturação (Objetos):

/* const profile = {
  nome: 'Marcos',
  idade: 18,
  cargo: 'Estagiario Backend'
};

const {nome, idade, cargo} = profile;
console.log(nome, idade, cargo); */


function mostrarPerfil(id, nome, linguagem) {
  console.log(`Id: ${id}; Nome: ${nome}; Linguagem: ${linguagem}.`);
};

const respostaAPI = {
  status: 200,
  data: {
    perfil1: {
      id: 1,
      nome: "Marcos Vinicius",
      linguagem: "Node.js"
    },
    perfil2: {
      id: 2,
      nome: "Julio",
      linguagem: "Python"
    }
  },
};

const perfil = 2; 
const {id, nome, linguagem} = respostaAPI.data[`perfil${perfil}`];

if (perfil === nome) {
  mostrarPerfil(id, nome, linguagem);
} else {
  console.log('Id não reconhecido.')
};
