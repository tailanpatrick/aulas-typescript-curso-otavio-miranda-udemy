const objetoA: {
  chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoA.chaveA = 'Outro valor';

objetoA.chaveC = 'Nova chave';

objetoA.chaveD = 'Chave adicional';

console.log(objetoA);
