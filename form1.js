function exibir() {
	let nome = document.getElementById("nome").value
	let email = document.getElementById("email").value
	let div = document.getElementById("resultado")
	div.innerHTML = `Nome: ${nome} || E-mail: ${email}`
}