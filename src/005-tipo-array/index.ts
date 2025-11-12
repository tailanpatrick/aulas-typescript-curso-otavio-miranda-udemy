// Array<T> - T[]
function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

function concatenaString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

function toUpperCase(...args: string[]): string[] {
  return args.map((value, _) => value.toUpperCase());
}

const result = multiplicaArgs(1, 2, 3);
const concatenacao = concatenaString('Oi', ' Tailan');
const uppercase = toUpperCase('hello', 'world');

console.log(result);
console.log(concatenacao);
console.log(uppercase);
