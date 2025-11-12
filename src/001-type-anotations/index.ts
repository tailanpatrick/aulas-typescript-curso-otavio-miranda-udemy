let nome: string = 'Tailan'; // Qualquer tipo de strings: '', "", ``
let idade: number = 28; // 10, 1.57, -5.55
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol
let big: bigint = 10n; // bigint

// Arrays

let arrayOfNumbers: Array<number> = [1, 2, 3, 4];
let arrayOfLetters: Array<string> = ['a', 'b'];

// ou
let arrayOfNumbers2: number[] = [1, 2, 3, 4];
let arrayOfLetters2: string[] = ['a', 'b'];

// Objetos
let pessoa: { nome: string; idade: number; adulto?: boolean } = {
  idade: 28,
  nome: 'Tailan',
};

// Funções

function soma(x: number, y: number): number {
  return x + y;
}
