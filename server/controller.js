module.exports = {

    createBook: (req, res) => {
        const db = req.app.get('db');
        const { title, author, dds, available } = req.body
        db.createBook([title, author, dds, available]).then(() => {
            res.status(200).send()
        }).catch(() => res.status(500).send())
    },

    //  74HIJ
    getBooks: (req, res) => {
        req.app.get('db').getBooks().then(book => {
            if (title === null) {
                res.json(book)
            }
            res.send(book)
        })
    },

    // 76E
    getUser: (req, res) => {
        let { id } = req.query;
        req.app.get('db').getUser([id]).then(user => {
            res.send(user)
        })
    }
}
    
    