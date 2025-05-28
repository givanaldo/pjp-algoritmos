function cadastrar() {
  const nome = document.getElementById('nome').value;
  const nascimento = document.getElementById('nascimento').value;
  const uf = document.getElementById('uf').value;

  const [year, month, day] = nascimento.split('-');
  const nascimentoBr = `${day}/${month}/${year}`;

  const checkboxes = document.querySelectorAll('input[name="preferencias"]:checked');
  const preferencias = Array.from(checkboxes).map(cb => cb.value);

  const html = `
      <h3>Dados Recebidos</h3>
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>Data de Nascimento:</strong> ${nascimentoBr}</p>
      <p><strong>UF:</strong> ${uf}</p>
      <p><strong>Preferências:</strong> ${preferencias.length ? preferencias.join(', ') : 'Nenhuma selecionada'}</p>
    `;

  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML += html;
}