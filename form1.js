const form = document.querySelector('#meuForm');

form.addEventListener('submit', exibir);
    
function exibir(event) {
	  event.preventDefault(); // evita recarregar a página

	  let nome = document.querySelector('#nome').value;
	  let email = document.querySelector('#email').value;

	  //alert(`Nome: ${nome}\nE-mail: ${email}`);
	  document.getElementById("resultado").innerHTML = 
	  		`Nome: ${nome}<br>E-mail: ${email}`
}