const express = require('express');
const PORT = 4002;
const path = require('path');
const apiRoute = require('./routes/api');

const app = express();

//app.use(express.static(path.join(__dirname, "public")));
app.use("/api",apiRoute);
app.use("/", express.static(path.join(__dirname, "public")));


app.listen(PORT, () => {
    console.log("Servidor rodando na porta", PORT);
})