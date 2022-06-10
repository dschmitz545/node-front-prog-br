// método 1
// instancia de um objeto
function aluno2(nome2, n11, n22){
    this.nome = nome2,
    this.nota1 = n11,
    this.nota2 = n22,

    this.media2 = function (){
        return (this.nota1 + this.nota2) / 2;
    }
}

// aqui eu instâncio esse objeto aluno2
var a = new aluno2("Pedro", 8, 4 );
console.log(a);
console.log(a.media2());


// método 2
// isso não é um objeto, é uma função que retorna um objeto
function criarAluno(nome, n1, n2){
    return {
        aluno: nome,
        nota1: n1,
        nota2: n2,
        media: function(){
            return (this.nota1 + this.nota2) / 2;
        }
    }

}

var turma = [
    criarAluno("Jose", 7, 4),
    criarAluno("Antonio", 5, 9),
    criarAluno("Milena", 10, 7),
]

var aluno = turma[2];

console.log(aluno);
console.log(aluno.media());

// método do array
turma.forEach(function(elemento){
    console.log(elemento);
});

// ou pode ser feito dessa mesma forma

for (var aluno of turma){
    console.log(aluno);
}