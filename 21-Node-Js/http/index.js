const http = require('http');
const port = 4001;

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json;charset=utf8' });
    res.end(JSON.stringify({ codigo: 1, texto: 'Hello World', endereco: 'rua orquidea' }));

}).listen(port, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Servidor rodando na porta", port)
    }
})