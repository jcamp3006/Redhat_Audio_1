var express = require('express');
var app = express();
var PORT = 8080;                     // 8080 must be the port to deploy on openshift

app.set('views', './views');
app.set('view engine', 'pug');

// app.use(express.static(path.join(__dirname, '/public')));

app.use(express.static(__dirname));

// app.get('/', function (req, res) {
//   res.send("Hello World!");
// });

// console.log(__dirname);

app.get('/', function (req, res) {
  res.render('Viz1');
});

app.listen(PORT, function () {
  console.log('Example app listening on port ' + PORT + ' !' );
});