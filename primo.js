function informaprimo() {
    let n = document.getElementById("numero").value
    let primo = true
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            primo = false
            break
        }
    }
    let div = document.getElementById("resultado")
    if (primo) {
        div.innerHTML = "O número é primo"
    } else {
        div.innerHTML = "O número não é primo"
    }
}

function soma(a, b) {
    alert(`Soma = ${a + b}`)
}