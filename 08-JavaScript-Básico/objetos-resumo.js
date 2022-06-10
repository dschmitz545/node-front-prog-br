// primeira maneira de criar um objeto
var a = {nome: "Diego", sobrenome: "Schmitz"};

console.table(a);


//segunda maneira de criar um objeto
// atravez de uma função
function obj(n, s){
    return {nome: n, sobrenome: s};
};

var b = obj("Diego", "Schmitz");
console.table(b);


// terceira maneira
// usando função, mas sem retorno
// usando o this
function obj2(n, s){
    this.nome = n,
    this.sobrenome = s;
};

var c = new obj2("Vini", "Schmitz");
console.table(c);