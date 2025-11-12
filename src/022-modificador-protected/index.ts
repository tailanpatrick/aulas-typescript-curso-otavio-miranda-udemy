export class Empresa {
  public readonly nome: string; // quando omite o public ele consideira como publico
  protected readonly colaboradores: Colaborador[] = [];
  private readonly CNPJ: string;

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

  getColaboradores(): Colaborador[] {
    return this.colaboradores;
  }
}

export class Udemy extends Empresa {
  constructor() {
    super('Udemy', '11.111.111/0001-11');
  }

  pop(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;

    return null;
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Udemy();

const colaborador1 = new Colaborador('Taian', 'Patrick');
const colaborador2 = new Colaborador('Thainara', 'Patrícia');

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);

const colaborador = empresa1.pop();

console.log(`Colaborador removido: ${colaborador?.nome}`);

console.log(empresa1);

empresa1.mostrarColaboradores();
