let fs = require('fs');
let ordem = 1

if (ordem === 1) {
    // Write file apaga e substitui pelo que você passar
    fs.writeFile('teste.txt', ' - hello world', function (error) {
        if (error) { throw error };

        console.log("Substituido com sucesso")
    })
}

// Concatena oo conteudo já existente
fs.appendFile('teste.txt', ' - Olá mundo', function (error) {
    if (error) { throw error };

    console.log("Concatenado com sucesso")

})



// Renomeia o arquivo
fs.rename('teste.txt', 'novoarquivo.txt', function (error) {
    if (error) { throw error };

    console.log("Alterado o arquivo com sucesso")

})

// lê o conteudo do arquivo
fs.readFile('teste.txt', 'UTF8', function (error, data) {
    if (error) { throw error };

    console.log(data)

})



// for (let index = 0; index < 100000; index++) {
//     fs.unlink('teste.txt', function(error) {
//         if (error) {
//             throw error
//         };

//         console.log("Arquivo apagado com sucesso")
//     })
//     wait = 10
// }