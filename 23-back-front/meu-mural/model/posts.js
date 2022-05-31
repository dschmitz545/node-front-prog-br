module.exports = {

    posts: [
        {
            id: 1,
            title: "titulo do post",
            description: "descricao de teste do post"
        },
    ],

    getAll() {
        return this.posts;
    },

    newPosts(title, description) {
        this.posts.push({ id: genrateID(), title, description })
    }

    
}

function genrateID() {
    return Math.random().toString(36)
}