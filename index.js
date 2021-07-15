const express = require ('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index', 
    {
        title: 'Andrew Template',
        name: 'Andrew'
    });
});






app.listen (8080);