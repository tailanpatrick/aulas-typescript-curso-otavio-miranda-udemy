export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '0';

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa = new Pessoa('Luiz', 'Miranda', 30, '123.456.789-00');
pessoa.cpf = '987.654.321-00';

console.log(pessoa);
const pessoa2 = Pessoa.criaPessoa('Teste', 'Testando');
console.log(pessoa2);
