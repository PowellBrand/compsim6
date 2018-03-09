module.exports = {
    
        getBooks: (req, res) => {
            const db =req.app.get('db');
            db.getBooks().then(book => {
                res.send(book)
            }).catch(e => console.log(e))
        },
    
        createBook: (req, res) =>{
            const db = req.app.get('db');
            const {title, author, dds, available} = req.body
            db.createBook([title, author, dds, available]).then(()=>{
                res.status(200).send()
            }).catch(()=> res.status(500).send())
        }
    
    }