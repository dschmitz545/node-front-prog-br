const webtoken = require('jsonwebtoken');
const secret = "qualquerCoisAaleatoriaComoToken";


function createToken() {

    const user = {
        id: "21",
        name: "joao",
        username: "joao@joao.com.br",
        password: "123456"
    };


    const token = webtoken.sign({
        id: user.id,
        name: user.name,
        username: user.username
    }, secret, {
        expiresIn: 45
    });
    console.log(token);
}


//pegar o resultado gerado e comparar agora, por exemplo no jwt.io

function testaToken(testetoken) {

    try {
        const validad = webtoken.verify(testetoken, secret)
        console.log(validad);

    } catch (error) {
        console.log(error)
    }
}

//createToken()
testaToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIxIiwibmFtZSI6ImpvYW8iLCJ1c2VybmFtZSI6ImpvYW9Aam9hby5jb20uYnIiLCJpYXQiOjE2NTQwNTY5OTUsImV4cCI6MTY1NDA1NzA0MH0.TLGpee-HyUyKSGkSxF0bZOdlfUPnSyDtBlF30tYxm6w")

//const testetoken = token;
//const testetoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIxIiwibmFtZSI6ImpvYW8iLCJ1c2VybmFtZSI6ImpvYW9Aam9hby5jb20uYnIiLCJpYXQiOjE2NTQwNTY1MTcsImV4cCI6MTY1NDA1NjUyN30.gRAcXhAivwJ6oSIM0X8T6yxA-Vfavh2AFiYIOiLdRzM"
