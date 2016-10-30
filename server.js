var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articleone={
    title:'Article One|LosiniHarini',
    heading:'Article one',
    date:'oct 12,2016',
    content: `<p>
            This is my first html project.html stands for hyper text markup language.
                This language is used to create webpages.It is a simple language.It contains tags and attributes.
            </p>
             <p>
                This is my first html project.html stands for hyper text markup language.This language is used to create webpages.It is a simple language.It contains tags and attributes.
            </p>`
};
var articletwo={
    title:'Article Two|LosiniHarini',
    heading:'Article Two',
    date:'oct 13,2016',
    content: `
    <p>
                This is my first CSS project<br>
                This language is used to style webpages.It is a simple to learn.
            </p>
             <p>
                This is my first CSS project.<br>
                This language is used to style webpages.It is a simple language.It contains tags and attributes.
            </p>
    `
};
function createtemplate(data){
 var title=data.title;
 var date=data.date;
 var heading=data.heading;
 var content=data.content;
var htmltemplate=`
    <html>
    <head>
        <title>
           ${title}
        </title>
        <style>
            body
            {
                max-width:200px;
                color:grey;
                font-family:sans-serif;
                padding-top: 20px;
                padding-bottom:20px;
                padding-left:150px;
                padding-right:150px;
                color: aqua;
                background-color: grey;
            }
        </style>
    </head>
    <body>
        <h1>
             <a href="/">Home</a>
        </h1>
        <h3>${heading}</h3>
        <div>
           ${date}
        </div>
        <div>
            ${content}
        </div>
        <marquee><font color="RED">Thank you for visiting article-one page!</font></marquee>
    </body>
</html>
`;
return htmltemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/ui/sum.html',function(req,res){
      res.sendFile(path.join(__dirname, 'ui', 'sum.html'));
});

app.get('/article-one',function(req,res){
   res.send(createtemplate(articleone));
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
