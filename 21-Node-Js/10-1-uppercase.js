let fs = require('fs');

// console.log(process.argv)

let args = process.argv.slice(2);

let filename = args[0];

fs.readFile(filename, "UTF8", function(error, data){
    if(error){
        throw error
    };

    fs.writeFile(filename + "_Uppercase", data.toUpperCase(), function(error){
        if(error){
            throw error
        };

        console.log("Arquivo gerado com sucesso")
    })
} )