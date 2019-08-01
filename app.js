
var debug = require('debug')('my-application'); // debug模块
var express = require("express");
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
//加载cookies模块
var Cookies = require('cookies');
var app = express();
app.use( bodyParser.urlencoded({extended: true}) );

app.use('/mail', require('./routers/mail'));
app.use('/user', require('./routers/api'));
//监听http请求
mongoose.connect('mongodb://localhost:27017/mail', function(err) {
    if (err) {
        console.log('数据库连接失败');
    } else {
        console.log('数据库连接成功');
        app.listen(8089,function () {
            debug('Express server listening on port')
        });
    }
});

