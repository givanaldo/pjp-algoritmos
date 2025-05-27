let n = Number(prompt("Número: "))
let primo = true
for (let i=2; i<n; i++) {
    if (n % i === 0) {
        primo = false
        break
    }
}
if (primo) {
    alert("O número é primo")
} else {
    alert("O número não é primo")
}