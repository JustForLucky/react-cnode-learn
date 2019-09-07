const express = require('express');
// const ReactSSR = require('react-dom/server');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const session = require('express-session');
const fs = require('fs');
const path = require('path');
const serverRender = require('./util/server-render');

const isDev = process.env.NODE_ENV === 'development';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(session({
  maxAge: 10 * 60 * 1000,
  name: 'tid',
  resave: false,
  saveUninitialized: false,
  secret: 'react cnode class'
}))

app.use(favicon(path.join(__dirname, '../favicon.ico')));
app.use('/api/user', require('./util/handle-login').router);
app.use('/api', require('./util/proxy'));

if (!isDev) {
    const serverEntry = require('../dist/server-entry');
    const template = fs.readFileSync(path.join(__dirname, '../dist/server.ejs'), 'utf8');
    app.use('/public', express.static(path.join(__dirname, '../dist')))
    app.get('*', function(req, res, next) {
      serverRender(serverEntry, template, req, res)
      .catch(next);
        // const appString = ReactSSR.renderToString(serverEntry)
        // res.send(template.replace('<!-- app -->', appString));
    })
} else {
    const devStatic = require('./util/dev-static');
    devStatic(app);
}
// 根据参数长度判断是否是ErrorHandler
app.use(function(error, req, res, next) {
  console.log(error);
  res.status(500).send(error);
})

app.listen(3000, function() {
    console.log('server is listening on 3000')
})
