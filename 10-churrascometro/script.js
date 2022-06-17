// carne - 400gr por pessoa + de 6 horas - 650
// cerveja - 1200ml por pessoa + 6 horas - 2000ml
// refrigerante/agua - 1000ml por pessoa + 6 horas 1500ml
// crianças valem por 0,5

//var carne = 400;
//var cerveja = 1200;
//var refriAgua = 1000;


let inputAdultos = document.getElementById("adultos")
let inputCrianca = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("Calculando...")

    let qtdAdultos = inputAdultos.value;
    let qtdCriancas = inputCrianca.value;
    let duracaoEvento = inputDuracao.value

    let qtdCarneAdulto = carnePessoa(duracaoEvento) * qtdAdultos;
    let qtdCarneCrianca = (carnePessoa(duracaoEvento) / 2) * qtdCriancas
    let qtdTotalCarne = qtdCarneAdulto + qtdCarneCrianca
    console.log(qtdTotalCarne)

    let qtdCerveja = cervejaPessoa(duracaoEvento) * qtdAdultos;
    console.log(qtdCerveja)

    let qtdRefriAguaAdulto = refriAguaPessoa(duracaoEvento) * qtdAdultos
    let qtdRefriAguaCrianca = (refriAguaPessoa(duracaoEvento) / 2) * qtdCriancas
    let qtdTotalRefriAgua = qtdRefriAguaAdulto + qtdRefriAguaCrianca
    console.log(qtdTotalRefriAgua)

    resultado.innerHTML = `<p>${qtdTotalCarne / 1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdCerveja / 355)} latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalRefriAgua / 2000)} litros de refrigerante e/ou Água</p>`
}

function carnePessoa(duracao){
    if(duracao >= 6){
        return 650
    }else{
        return 400
    }
}

function cervejaPessoa(duracao){
    if(duracao >=6){
        return 2000
    }else{
        return 1200
    }
}

function refriAguaPessoa(duracao){
    if(duracao >=6){
        return 1500
    }else{
        return 1000
    }
}