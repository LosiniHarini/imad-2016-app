var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var Pool = require('pg').Pool;
var config=
{
   user:'losiniharini',
   database:'losiniharini',
   host:'db.imad.hasura-app.io',
   port:'5432',
   password:process.env.DB_PASSWORD
   
};


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/sum.html',function(req,res){
      res.sendFile(path.join(__dirname, 'ui', 'sum.html'));
});
app.get('/dig.php',function(req,res){
      res.sendFile(path.join(__dirname, 'ui', 'dig.php'));
});
var pool = new Pool(config);
app.get('/test.db',function(req,res)
{
    pool.query('SELECT * FROM test',function(err,result){
        if(err){
            res.status(500).send(err,tostring());
        }else
        {
            res.send(JSON.stringify(result));
        }
    });
});

app.get('/article-one.html',function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'article-one.html')); 
});
app.get('/article-two',function(req,res){
    res.send(createtemplate(articletwo));
}); 
app.get('/article-three',function(req,res){
    res.send('Article three will be served here')
})
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/disney2.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'disney2.jpg'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
