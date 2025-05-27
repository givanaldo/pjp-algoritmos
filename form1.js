const form = document.querySelector('#meuForm');

form.addEventListener('submit', function(event) {
	  event.preventDefault(); // evita recarregar a página

	  let nome = document.querySelector('#nome').value;
	  let email = document.querySelector('#email').value;

		// A partir daqui, você pode usar esses valores
	  alert(`Nome: ${nome}\nE-mail: ${email}`);
});