function informaprimo() {
    let n = document.getElementById("numero").value
    let primo = true
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            primo = false
            break
        }
    }
    if (primo) {
        document.getElementById("resultado").innerHTML = "O número é primo"
    } else {
        document.getElementById("resultado").innerHTML = "O número não é primo"
    }
}

function soma(a, b) {
    alert(`Soma = ${a + b}`)
}