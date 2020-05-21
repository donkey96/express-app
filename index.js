var express = require('express');
var ejs = require('ejs');

var app = express();
app.engine('ejs', ejs.renderFile);
app.use(express.static('public'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
  var msg = 'This is Index page!<br>' + '※メッセージを書いて送信して下さい。';
  // index.ejsをレンダリングする
  res.render('index.ejs', {
    title: 'Index',
    content: msg
  });
});

app.post('/', (req, res) => {
  var msg = 'This is Posted Page!<br>' + 'あなたは「<b>' + req.body.message + '</b>」と送信しました。';
  res.render('index.ejs', {
    title: 'Posted',
    content: msg
  });
});

app.get('/other', (req, res) => {
  var name = req.query.name;
  var pass = req.query.pass;
  var msg = 'あなたの名前は「' + name + '」<br>パスワードは「' + pass + '」です。';
  res.render('index.ejs', {
    title: 'Other',
    content: msg,
    link: {href: '/', text: '※トップに戻る'}
  });
});

app.listen(3000, () => {
  console.log('Start sever port:3000')
});