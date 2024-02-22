class Funcionario {
  constructor(nome, idade, cargo) {
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
  }

  seApresentar() {
    console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} e estou assumindo o cargo de ${this.cargo}`);
  }

  trabalhar() {
    console.log(`${this.nome} está trabalhando, não incomode`);
  }
}

class Gerente extends Funcionario {
  constructor(nome, idade, cargo, departamento) {
    super(nome, idade, cargo);
    this.departamento = departamento;
  }

  gerenciar() {
    console.log(`${this.nome} está gerenciando o departamento de ${this.departamento}`);
  }
}

class Desenvolvedor extends Funcionario {
  constructor(nome, idade, cargo, linguagem) {
    super(nome, idade, cargo);
    this.linguagem = linguagem;
  }

  programar() {
    console.log(`${this.nome} está programando em ${this.linguagem}`);
  }
}

// começando a usar DOM
// Selecionando elementos
const form = document.getElementById("cadastro");
const inputNome = document.getElementById("nome-input");
const inputIdade = document.getElementById("idade-input");
const selectCargo = document.getElementById("cargo-select");

// Adicionando um event listener para o evento de submissão do formulário
form.addEventListener("submit", function (event) {
  // Verifica se um cargo foi selecionado
  const cargoSelecionado = selectCargo.value;
  if (cargoSelecionado === "") {
    alert("Por favor, selecione um cargo antes de cadastrar.");
    event.preventDefault(); // Evita a submissão do formulário
  }
});
