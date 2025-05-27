function submeter() {
  // Dispara uma caixa de confirmação
  let confirma = confirm("Você confirma a ação?");

  if (confirma) {
    // Se o usuário clicar em “OK”, obtém valores dos campos
    let nome  = document.getElementById("nome").value;
    let email = document.getElementById("email").value;

    // Atualiza o DOM para exibir os dados recebidos
    document.getElementById("resultado").innerHTML =
      "<h3>Informações Recebidas</h3>" +
      `<p>Nome: ${nome}</p>` +
      `<p>E-mail: ${email}</p>`;
  }
  else {
    // Se o usuário clicar em “Cancelar”, exibe mensagem de cancelamento
    document.getElementById("resultado").innerHTML = "<h2>Ação cancelada</h2>";
  }
}