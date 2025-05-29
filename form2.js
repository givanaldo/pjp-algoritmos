function exibir() {
	let nome = document.getElementById("nome").value
	let email = document.getElementById("email").value
	let div = document.getElementById("resultado")
	div.innerHTML = div.innerHTML + `Nome: ${nome} || E-mail: ${email}<br>`
	document.getElementById("nome").value = ""
	document.getElementById("email").value = ""
}