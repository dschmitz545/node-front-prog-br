const bcrypt = require('bcryptjs');

const passwd = "MinhaSenha";
let crypgera = ""

function geraCrypt() {

    // hash - promisse
    // hassync - promisse já com await
    // salt é um numero aleatorio que é adicionado no algoritmo de criptografia

    //gerando um salt qualque(padrao dessa lib é 10)
    const salt2 = bcrypt.genSaltSync(12);

    crypgera = bcrypt.hashSync(passwd, salt2);

    console.log(crypgera);
}

// comparando
function compareCrypt(passwd, crypgera) {

    const result = bcrypt.compareSync(passwd, crypgera)
    console.log(result);
}

geraCrypt();
compareCrypt(passwd,crypgera);