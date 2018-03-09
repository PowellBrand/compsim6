require ('dotenv').config();

const express = require('express')
, bodyParser = require('body-parser')
, massive = require('massive')
, cors = require('cors')
, port = 4020
, app = express()
, controller = require('./controller');

//76F 75C
app.use(bodyParser.json());
app.use(cors());

//75E logs every time a request is made
app.use(function (req,res,next){
    console.log('This was called at', Date.now())
    next()
})

massive(process.env.CONNECTIONSTRING).then(db => {
    app.set('db', db);
}).catch(console.error);

//70C
const db = app.get('db');

//Endpoints
//76C
app.post('/api/creatUser', controller.createUser)
app.get('/api/getUser', controller.getUser)

app.listen(port, () => {
    console.log(`I'm listening on port: ${port}.`)
})