function calcular() {
  // Obter os valores dos campos de entrada
  var salario = document.getElementById("salario").value;
  var percentualAumento = document.getElementById("percentualAumento").value;
  var diasFerias = document.getElementById("diasFerias").value;
  var mesesTrabalho = document.getElementById("mesesTrabalho").value;


  // Calcular o resultado
  var resultado;
  switch (document.getElementById("opcao").value) {
    case "1": // Novo salário
      resultado = salario * (1 + percentualAumento / 100);
      break;
    case "2": // Férias
      resultado = salario * diasFerias / 30 + (1/3 * salario);
      break;
    case "3": // Décimo terceiro
      resultado = salario * mesesTrabalho / 12;
      break;
    default:
      resultado = "Favor, inserir os dados corretamente";
  }

  // Exibir o resultado no campo de texto
  document.getElementById("valorResultado").innerHTML = resultado;
}

document.getElementById("calcular").addEventListener("click", calcular);

