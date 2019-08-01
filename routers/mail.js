var express = require('express');
var router = express.Router();
var Mail = require('../models/Mail');

//统一返回格式
var responseData;
router.use( function(req, res, next) {
    responseData = {
        result: 0,
        message: ''
    }
    next();
});
router.get('/list', function(req, res) {
    Mail.find().then((mails)=>{ 
        res.send({
            result : 0,
            items: mails
        })
    })
});
router.post('/update', function(req, res) {
    console.log(req.body);
    Mail.findOneAndUpdate({_id:req.body._id},req.body,{},(err)=>{
        console.log(err,'err');
        res.send(responseData)
    })
});
router.post('/delete', function(req, res) {
    console.log(req.body,'req.bodyreq.body');
    
    Mail.findOneAndRemove({_id:req.body._id}).then((err,mail)=>{ 
        console.log(mail);
        res.send(responseData)
    })
});
router.post('/add', function(req, res) {
    console.log(req.body);
    var  name = req.body.name;
    var  address = req.body.address;
    var  message = req.body.message;
    var  read = Boolean(req.body.read);
    var mail = new Mail({
        name,
        address,
        message,
        read,
    });
    mail.save();
    res.send(responseData)
});

module.exports = router;