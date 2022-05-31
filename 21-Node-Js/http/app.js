const http = require('http');
const url = require('url');
const fs = require('fs');
const port = 4002;

function handleFile(req, res, callback) {

    let path = url.parse(req.url).pathname;

    // if (path == "" || path == "/") {
    //     path = "/index.html";
    // }
    let filename = "." + path;

    fs.readFile(filename, (err, data) => {
        if (err) {

            if (callback) {
                if (!callback(req, res)) {

                    res.writeHead(404, { 'Content-Type': 'text/html;charset=utf8' });
                    res.end("<h1>Pagina não encontrada</h1>")
                };
            }

            //console.log(err);

        } else {
            res.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' });
            res.write(data);
            res.end();

        }
    })
}

function handleRequest(req, res) {

    let path = url.parse(req.url).pathname;

    if (path == "/teste") {
        res.end("Teste");
        return true;
    }

    return false;

}

http.createServer((req, res) => {

    //console.log(url.parse(req.url));
    handleFile(req, res, handleRequest)

}).listen(port, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Servidor rodando na porta", port)
    }
})