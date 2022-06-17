function novoinnerHTML(para1) {
    return (
        para1.innerHTML = "<h2>Novo Texto inserido com innerHTML</h2>"
    )
}

function novoInnerText(para2) {
    return (
        para2.innerText = "<h4>Novo Texto inserido com innerText</h4>"
    )

}

function novoTextContet(para3) {
    return (
        para3.textContent = "<h4>Novo Texto inserido com textContent</h4>"
    )

}

function inserirAtt(att1) {
    {
        att1.setAttribute = ("MeuAtt", "Atributo-ins-via-botao")
        console.log(att1)
    }
}

