var express = require('express');
var ejs = require("ejs");

var app = express();
app.engine('ejs', ejs.renderFile);
app.use(express.static('public'));

var bodyParser = require('body-parser'); // ★追加
app.use(bodyParser.urlencoded({extended: false})); // ★追加

var data = {
  'Taro': 'taro@yamada',
  'Hanako': 'hanako@flower',
  'Sachiro': 'sachico@happy',
  'Ichiro': 'ichiro@baseball',
};

// ※トップページ
app.get('/', (req, res) => {
  var msg = 'This is Express Page!<br>'
    + '※データを表示します。';
  res.render('index.ejs',
    {
      title: 'Index',
      content: msg,
      data: data,
    });
});

var server = app.listen(3000, () => {
  console.log('Server is running');
})