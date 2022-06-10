// forma menos usada de declarar um array
var frutas = new Array("Banana", "Maça", "Laranja", "Uva");

//foma mais usual de declarar um array
var livros = ["Harry Potter", "Senhor do Anéis", "Silmarilion"];

// acessando elementos do array
console.log(frutas); // todos
console.log(frutas[0]); //pelo indice
console.log(frutas[2]);

console.log(frutas.length); //imprime tamanho do array

// imprime elementos do array usando o for
for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
};

// outra forma com o for, imprimindo o indice de cada elemento
for (let t in frutas){
    console.log(t)
};
// outra forma usando o for, mas imprimindo o conteudo do array
for (let w of frutas ){
    console.log(w)
};