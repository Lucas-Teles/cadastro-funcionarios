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

// Criando a instancia solicitada
const gerente = new Gerente("Daniele", 35, "Gerente", "TI");
const desenvolvedor = new Desenvolvedor("Rhuan", 28, "Desenvolvedor", "JavaScript");

// Criando uma separação pra ficar visivelmente mais legivel
console.log("-".repeat(100));
gerente.seApresentar();
gerente.trabalhar();
gerente.gerenciar();
console.log("-".repeat(100));
console.log("-".repeat(100));
desenvolvedor.seApresentar();
desenvolvedor.trabalhar();
desenvolvedor.programar();
console.log("-".repeat(100));
