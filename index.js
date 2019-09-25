const express = require('express'); //importing express
const bodyParser = require('body-parser') //import bp
const exphbs = require('express-handlebars'); //reference express-hbs after download

const Greet = require('./greetings')

const app = express(); //instance of app



const greetingApp = Greet()



app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars'); //configure handlebars

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json()) //config as per line13

app.use(express.static('public'))

app.get('/', function (req, res) {
    res.render('index', {
        greeted: greetingApp.getName(),
        count: greetingApp.getCount()
    })
    console.log(greetingApp.getName());
    // greetingApp.langGreet(req.body.namesGreeted, req.body.langType)

})

app.post('/greeted', function (req, res) {
    greetingApp.langGreet(req.body.namesGreeted)
    console.log(greetingApp.langGreet(req.body.namesGreeted, req.body.langType));



    res.redirect('/')
})
const PORT = process.env.PORT || 5000; //config port to use default and define new port
app.listen(PORT, function () {
    console.log("App listening at port:", PORT);

})