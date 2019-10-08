const express = require('express'); //importing express
const bodyParser = require('body-parser') //import bp
const exphbs = require('express-handlebars'); //reference express-hbs after download

const Greet = require('./greetings');
const listOfNames = require('./route');
const listedNames = require('./route');
const test  = require('./route');
const app = express(); //instance of app

const flash = require('express-flash');
const session = require('express-session');

const greetingApp = Greet();
const namesCount = listOfNames(greetingApp);
const counted = listedNames(greetingApp);
const tested = test(greetingApp)

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars'); //configure handlebars

app.use(session({
secret:"enter here",
resave: false,
saveUninitialized: true
}));

app.use(flash());

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json()) //config as per line13

app.use(express.static('public'));

app.get('/', namesCount.namesToCount);

app.post('/', counted.theList);

app.get('/counter', tested.greetedNames);


// app.get('/counter/:username', function (req,res){
    
// })
const PORT = process.env.PORT || 4001; //config port to use default and define new port
app.listen(PORT, function () {
    console.log("App listening at port:", PORT);

})