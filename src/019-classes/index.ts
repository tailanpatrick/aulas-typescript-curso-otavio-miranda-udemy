export class Empresa {
  readonly nome: string; // quando omite o public ele consideira como publico
  private readonly colaboradores: Colaborador[] = [];
  protected readonly CNPJ: string;

  constructor(nome: string, CNPJ: string) {
    this.nome = nome;
    this.CNPJ = CNPJ;
  }

  adicionaColaborador(colaborador: Colaborador) {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores() {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('TP Informática', '11.111.111/0001-11');

const colaborador1 = new Colaborador('Taian', 'Patrick');
const colaborador2 = new Colaborador('Thainara', 'Patrícia');

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);

console.log(empresa1);

empresa1.mostrarColaboradores();
