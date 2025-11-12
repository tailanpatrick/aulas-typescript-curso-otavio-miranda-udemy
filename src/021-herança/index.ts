export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected _cpf: string,
  ) {}

  set cpf(cpf: string) {
    this._cpf = cpf;
  }

  get cpf(): string {
    return this._cpf;
  }

  get nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
  }

  getNomeCompleto(): string {
    console.log('FAZENDO ALGO ANTES');
    return super.nomeCompleto;
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return this.nome + '_' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Tailan', 'Rodrigues', 28, '000.000.000-00');
const aluno = new Aluno('Tailan', 'Rodrigues', 28, '000.000.000-00', '001');
const cliente = new Cliente('Tailan', 'Rodrigues', 28, '000.000.000-00');

console.log(pessoa.nomeCompleto);
console.log(aluno);
console.log(cliente.getNomeCompleto());
