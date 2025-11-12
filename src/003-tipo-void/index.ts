function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Tailan',
  sobrenome: 'Rodrigues',

  exibirNome(): void {
    console.log(`${this.nome} ${this.sobrenome}`);
  },
};

semRetorno('Tailan', 'Patrick');
pessoa.exibirNome();
