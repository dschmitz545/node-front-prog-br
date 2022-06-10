// funçao, forma mais básica
function imprimeFrutas(){
    let fruta1 = "pera";
    let fruta2 = "uva";
    let fruta3 = "melão";
    console.log(fruta1 + " " + fruta2 + " " + fruta3);
}

imprimeFrutas();

// passando valores por parametros
function somaNumeros(n1, n2){
    let numero1 = n1;
    let numero2 = n2;
    let soma = numero1 + numero2;
    console.log(soma);
}

somaNumeros(4,8);

// retornando o resultado da função
function media1(j1, j2){
    let med1 = j1;
    let med2 = j2;
    let media = (med1 + med2) / 2
    return media;
}

let resulMedia = media1(8,3);
console.log(resulMedia);

// uma função pode ser uma variavel
function saudacao(){
    return "Olá Mundo";
};

let s = saudacao    // aqui não estou chamando e executando a função, estou atribuindo ela a s
let t = saudacao()  // aqui eu chamo e executo a função

console.log(s)             // imprimindo a função
console.log(s())           // imprime a execução e retorno da função
console.log(saudacao())    // imprime a execução e retorno da função

// ================================================================================================== \\
// ==========================================Função anonima========================================== \\
var media2 = function (m1, m2){
    return (m1 + m2) / 2;
};

console.log(media2(4,8));

// ========================================Função seta===================================== \\
// ================================Apenas nas versões mais novas do javascript============= \\

var media3 = (k1, k2) =>{
    return (k1 + k2) / 2;
}

console.log(media3(10,5))