// ENUM NUMÉRICO
enum Cores {
  VERMELHO, // 0
  AZUL, // 1
  AMARELO, // 2
}

// UNINDO ENUM COM O DE CIMA
enum Cores {
  VERDE = 3,
  LARANJA,
}

function escolhaACor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaACor(Cores.AMARELO);
