function exibir() {
	const confirma = confirm("Inserir a pessoa?")
	if (confirma) {
		let nome = document.getElementById("nome").value
		let email = document.getElementById("email").value
		let uf = document.getElementById("uf").value
		let div = document.getElementById("resultado")
		if (nome != "" && email != "" && uf != "") {
			div.innerHTML = div.innerHTML +
				`<li><b>Nome:</b> ${nome} (${email}) || <b>UF:</b> ${uf}</li>`
			document.getElementById("nome").value = ""
			document.getElementById("email").value = ""
			document.getElementById("uf").value = ""
		}
	} else {
		alert("Pessoa não foi inserida!")
	}

}