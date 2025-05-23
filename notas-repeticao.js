const n = Number(prompt("Quantos alunos?"))
for (let i=1; i<=n; i++) {
    let media = Number(prompt(`Média do aluno ${i}:`))
    if (media >= 0 && media < 30) {
        alert("Aluno reprovado.")
    } else if (media >= 30 && media < 60) {
        alert("Aluno em recuperação.")
    } else if (media >= 60 && media <= 100) {
        alert("Aluno aprovado :-)")
    } else {
        alert("Média inválida.")
    }
}