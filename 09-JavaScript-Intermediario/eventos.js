function f(){
    console.log("teste")
    console.log(this);
}

function f1(){
    console.log("teste f1")
}

window.onload = function (){
    let h2 = document.getElementsByTagName("h2")[0]
    h2.addEventListener("click", f1);
}