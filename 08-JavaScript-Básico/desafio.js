// retornar a seguinte expressão no final:
// Nome do aluno - nota1 - nota2 - media - Aprovado?

var alunos = ["Vini", "Maria", "Diego"];
var nota1 = [7.0, 6.5, 4.5];
var nota2 = [8.0, 8.5, 5.5];

function situacao(media) {
    if (media < 7) {
        return "Reprovado"
    } else {
        return "Aprovado"
    }
}

function media(j1, j2) {
    return (j1 + j2) / 2
}

for (let index in alunos) {

    res1 = nota1[index];
    res2 = nota2[index];
    med = media(nota1[index], nota2[index])

    console.log(
        alunos[index] + ": " +
        res1 + " - " +
        res2 + " - " +
        med + " - " +
        situacao(med)
    );

}