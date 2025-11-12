interface TipoPessoa {
  nome: string;
  sobrenome: string;
  nomeCompleto(): string;
}

export class Pessoa implements TipoPessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
  ) {}
  nomeCompleto = (): string => `${this.nome} ${this.sobrenome}`;
}

const pessoa = new Pessoa('José', 'Alves');
console.log(pessoa.nomeCompleto());
