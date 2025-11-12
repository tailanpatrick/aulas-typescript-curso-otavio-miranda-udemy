type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };

type Pessoa = TemNome & TemSobrenome & TemIdade; // AND, obrigatoriamente todos os tipos devem ser satisfeitos/ preenchidos

type AB = 'A' | 'B';
type AC = 'A' | 'C';

type Intersecao = AB & AC; // A

const pessoa: Pessoa = {
  idade: 30,
  nome: 'Tailan',
  sobrenome: 'Rodrigues',
};

console.log(pessoa);

export { pessoa };
