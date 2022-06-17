var doc1 = document.getElementById("pp1");
console.log(doc1);

var doc3 = document.getElementsByClassName("parag")
console.log(doc3);

function inserirTxtClassName(parag){
    for (let p of parag){
        console.log(p)
    }

}

function inserirTxtTagName(h5){
    for (let q of h5){
        console.log(q)
    }

}