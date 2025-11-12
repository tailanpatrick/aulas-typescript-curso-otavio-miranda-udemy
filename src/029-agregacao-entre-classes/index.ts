export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProdutos(...produtos: Produto[]) {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): string {
    return this.produtos.reduce((acc, produto) => acc + produto.preco, 0).toFixed(2);
  }
}

export class Produto {
  constructor(
    private _nome: string,
    private _preco: number,
  ) {}

  get nome(): string {
    return this._nome;
  }

  get preco(): number {
    return this._preco;
  }
}

const carrinho = new CarrinhoDeCompras();
const sabonete = new Produto('Sabonete', 2.5);
const arroz = new Produto('Arroz', 25.5);
const acucar = new Produto('Açucar', 14.5);

carrinho.inserirProdutos(sabonete, arroz, acucar);

console.log(carrinho.quantidadeProdutos());
console.log(carrinho.valorTotal());
