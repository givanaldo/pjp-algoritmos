function exibir() {
	let nome = document.querySelector('#nome').value;
	let email = document.querySelector('#email').value;
	let div = document.getElementById("resultado")
	div.innerHTML = `Nome: ${nome}<br>E-mail: ${email}`
}