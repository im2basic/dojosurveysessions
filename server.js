const express = require("express");
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/static"));
app.use(session({
    secret: 'StayHumble',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

//ROUTES
app.get('/', (req, res) => {
    res.render('index');
});

app.post('/process', (req,res) => {
    var survey = {
        name: req.body.name,
        location : req.body.location,
        language: req.body.language,
        comment: req.body.comment

    }
    console.log(req.body.name);
    res.render('show',{survey: survey});
})


app.listen(8000, () => console.log("listening on port 8000"));