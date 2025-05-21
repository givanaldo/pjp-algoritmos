let idade = Number(prompt("Sua idade:"))
if (idade <= 12) {
    alert("Faixa etária: Criança")
} else if (idade <= 18) {
    alert("Faixa etária: Adolescente")
} else if (idade <= 59) {
    alert("Faixa etária: Adulto")
} else {
    alert("Faixa etária: Idoso")
}