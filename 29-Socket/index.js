const express = require('express');
const path = require('path');
const app = express();
const socketIO = require('socket.io');

const list = ["José", "Antonio", "Marcos"];

console.log(list);

// gambiarra, fica atualizando a cada 5s
// setTimeout(()=>{
//     list.push("João do pé de feijão");
//     console.log(list);
// },5000)

app.get('/list', (req, res) => {
    res.send(list);
})

app.use('/', express.static(path.join(__dirname, 'public')));

const server = app.listen(4002, () => {
    console.log("running");
})


 // para ver todos que ja estavam antes da nova conexão
//const randoms = [];

const io = socketIO(server)

io.on('connection', (socket) => {

    console.log("New Connection");

    //manda msg para 1 cliente
    //socket.emit('hello', { msg: "seja bem vindo!" })

    //manda msg para todos, mesmo os que já conectaram anteriormente
    //const random = Math.random();
    //console.log(random);
    //randoms.push(random);

    //io.emit('hello', { msg: `seja bem vindo! ${randoms}` })


    //manda msg para todo mundo, menos o cliente que originou a mensagem.
    socket.broadcast.emit('hello', { msg: `Chegou um novo usuário` })

    //lê msg vinda do cliente
    socket.on('hello_client_response',(data2)=>{
        console.log(data2.msg)
    })
})