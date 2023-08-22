var express = require('express');
const LegoModel = require('../models/LegoModel');
var router = express.Router();

router.get('/', async(req, res) =>{
    var lego = await LegoModel.find();
    res.render('lego/legoList', {legos : lego});
});

router.get('/add', async (req, res) =>{
    res.render('lego/legoAdd');
});

router.post('/add', async (req, res) =>{
    var lego = req.body;
    await LegoModel.create(lego)
    .then(()=> console.log("ok"))
    .catch((err) => console.log(err));
    res.redirect('/lego');
});

router.get('/edit/:id', async (req, res) =>{
    var id = req.params.id;
    var lego = await LegoModel.findById(id);
    res.render('lego/legoEdit', {legos : lego});
});

router.post('/edit/:id', async (req, res) =>{
    var id = req.params.id;
    var lego = req.body;
    await LegoModelModel.findByIdAndUpdate(id, lego)
    .then(()=> console.log("ok"))
    .catch((err) => console.log(err));
    res.redirect('/lego');
});

router.get('/detail/:id', async (req, res) => {
    var id = req.params.id;
    var lego = await LegoModel.findById(id);
    res.render('lego/legoDetail', { legos : lego});
 });

router.get('/delete/:id', async(req, res) =>{
    var id = req.params.id;
    await LegoModel.findByIdAndDelete(id)
    .then(()=> console.log("ok"))
    .catch((err) => console.log(err));
    res.redirect('/lego');
});

router.post('/order', async (req, res) => {
    var data = req.body;
    var id = data.id;
    var lego = await LegoModel.findById(id);
    var price = data.price;
    var quantity = data.quantity;
    var total = price * quantity;
    res.render('lego/legoOrder', { legos: lego, quantity : quantity, price : price , total: total });
 });

module.exports = router;