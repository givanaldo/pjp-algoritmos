let senha
let tentativas = 0
while (senha != "1234") {
    senha = prompt("Senha: ")
    if (senha == "1234") {
        alert("Acesso liberado!")
    } else {
        tentativas++
        alert(`Senha incorreta! Você tem ${3-tentativas} tentativas`)
    }
    if (tentativas === 3) {
        alert("Três tentativas. Conta bloqueada!")
        break
    }
}
