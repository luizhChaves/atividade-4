function verificarFaixaEtaria(anoNascimento) {
  const anoAtual = new Date().getFullYear(); // Ano atual
  const idade = anoAtual - anoNascimento;

  if (idade < 12) {
    return "Criança";
  } else if (idade < 18) {
    return "Jovem";
  } else if (idade < 65) {
    return "Adulto";
  } else {
    return "Idoso";
  }
}
