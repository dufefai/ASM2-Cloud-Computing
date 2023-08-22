var express = require('express');
const WoodModel = require('../models/WoodModel');
var router = express.Router();

router.get('/', async(req, res) =>{
    var wood = await WoodModel.find();
    res.render('wood/woodList', {woods : wood});
});

router.get('/add', async (req, res) =>{
    res.render('wood/woodAdd');
});

router.post('/add', async (req, res) =>{
    var wood = req.body;
    await WoodModel.create(wood)
    .then(()=> console.log("ok"))
    .catch((err) => console.log(err));
    res.redirect('/wood');
});

router.get('/edit/:id', async (req, res) =>{
    var id = req.params.id;
    var wood = await WoodModel.findById(id);
    res.render('wood/woodEdit', {woods : wood});
});

router.post('/edit/:id', async (req, res) =>{
    var id = req.params.id;
    var wood = req.body;
    await woodModelModel.findByIdAndUpdate(id, wood)
    .then(()=> console.log("ok"))
    .catch((err) => console.log(err));
    res.redirect('/wood');
});

router.get('/detail/:id', async (req, res) => {
    var id = req.params.id;
    var wood = await WoodModel.findById(id);
    res.render('wood/woodDetail', { woods : wood});
 });

router.get('/delete/:id', async(req, res) =>{
    var id = req.params.id;
    await WoodModel.findByIdAndDelete(id)
    .then(()=> console.log("ok"))
    .catch((err) => console.log(err));
    res.redirect('/wood');
});

router.post('/order', async (req, res) => {
    var data = req.body;
    var id = data.id;
    var wood = await WoodModel.findById(id);
    var price = data.price;
    var quantity = data.quantity;
    var total = price * quantity;
    res.render('wood/woodOrder', { woods: wood, quantity : quantity, price : price , total: total });
 });

module.exports = router;