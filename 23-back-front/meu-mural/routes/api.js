const express = require('express')
const router = express.Router();
const posts = require('../model/posts')
const bodyParser = require('body-parser');
const cors = require('cors')

const options = {
    origin: "http://localhost:4002"
}

router.use(cors(options));

router.get("/all", (req, res) => {
    res.json(JSON.stringify(posts.getAll()))

});

router.post("/new", bodyParser.json(), (req, res) => {
    //let id = genrateID();
    let title = req.body.title;
    let description = req.body.description;
    posts.newPosts(title, description);
    res.send("Adicionado com sucesso");
});

module.exports = router;