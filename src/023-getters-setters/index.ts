export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private _idade: number,
    protected _cpf: string,
  ) {}

  get idade(): number {
    return this._idade;
  }

  get cpf(): string {
    return this._cpf;
  }

  get nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}
