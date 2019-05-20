var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var todos = require('./router/todos');

var app = express();

// view engine


app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile)

app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', todos);
// app.use('/api/v1', todos);

app.get('*'), (req,res) => {
    res.senfFile(path.join(__dirname, 'dist/index.html'))
}

app.listen(3000, function(){
    console.log('Server started on port 3000.....!');
});
