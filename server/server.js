require ('dotenv').config();

const express = require('express')
, session = require('express-session')
, bodyParser = require('body-parser')
, massive = require('massive')
, cors = require('cors')
, port = 4020
, app = express()
, controller = require('./controller');

app.use(bodyParser.json());
app.use(cors());


app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use(passport.initialize());
app.use(passport.session());

passport.use(new Auth0strat({
    domain: process.env.DOMAIN,
    clientID: process.env.CLIENTID,
    clientSecret: process.env.CLIENTSECRET,
    callbackURL: process.env.CALLBACKURL,
    scope: "openid profile"
}, function (accessToken, refreshToken, extraParams, profile, done) {

    const db = app.get('db');

    let { user_id } = profile;

    db.find_user([user_id]).then(users => {
        if (!users[0]) {
            db.create_auth([user_id]).then(user => {
                db.insertID_users([user[0].userid]).then(userdata => {
                    return done(null, userdata[0])
                })
            })
        }
        else {
            return done(null, users[0])
        }
    })
}))

passport.serializeUser((user, done) => {
    return done(null, user)
})

passport.deserializeUser((user, done) => {
    return done(null, user.userid)
})


massive(process.env.CONNECTIONSTRING).then(db => {
    app.set('db', db);
}).catch(console.error);

const db = app.get('db');

//endpoints
app.get('/api/getBooks', controller.getBooks)
app.post('/api/createBook', controller.createBook)

app.listen(port, ()=>{
    console.log(`I'm here on port: ${port}`)
})