// declaração de objeto, é praticamente igual ao array.
// trocando os [] por {}
// objeto sempre vai ter uma chave e um valor

// quando um objeto tem uma variavel, a gente chama de propriedade
// quando um objeto tem uma função, a gente chama de método

var aluno = { 
    nome: "Igor", 
    notaMatematica: 7.5, 
    situacao: "Aprovado",
    notaCiencia: [7.8, 4.5, 6.7]

};

console.table(aluno.situacao);
console.table(aluno["notaMatematica"]);
console.table(aluno.notaCiencia);
console.table(aluno.notaCiencia[2]);
console.table(aluno["notaCiencia"][1]);

// adicionando novas propriedades ao objeto, mesmo depois desse objeto já ter sido criado
// 1- forma
aluno.matricula = 3467883;
console.table(aluno);

// 2-forma
aluno["sobrenome"] = "Antunes";
console.table(aluno);

///////////// Outra forma de criar um objeto

var livro = new Object()

livro.nome = "O Senhor dos Anéis";
livro.autor = "J. R. R. Tolkien"
livro.ano = 1954
livro.editora = "Allen & Unwin"

console.log(livro);

//=============================== Métodos em objetos =============================\\

var estudante = {
    nome: "Diego",
    notas: [8, 4.5],
    media: calcMedia,
}

var estudante1 = {
    nome: "Vini",
    notas: [3, 7],
    media: calcMedia,
}

// essa função na verdade é um método do objeto estudante
function calcMedia(){
    return (this.notas[0] + this.notas[1]) / 2
}


console.table(estudante.nome);

// com o uso do this dentro da função(método) calcMedia, não preciso mais chamar dessa forma
// console.log(estudante.media(estudante.notas[0], estudante.notas[1]));
console.table(estudante.media());

console.table(estudante1.nome);
// console.log(estudante1.media(estudante1.notas[0], estudante1.notas[1]));
console.table(estudante1.media());
