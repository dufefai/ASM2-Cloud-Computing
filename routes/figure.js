var express = require('express');
const FigureModel = require('../models/FigureModel');
var router = express.Router();

router.get('/', async(req, res) =>{
    var figure = await FigureModel.find();
    res.render('figure/figureList', {figures : figure});
});

router.get('/add', async (req, res) =>{
    res.render('figure/figureAdd');
});

router.post('/add', async (req, res) =>{
    var figure = req.body;
    await FigureModel.create(figure)
    .then(()=> console.log("ok"))
    .catch((err) => console.log(err));
    res.redirect('/figure');
});

router.get('/edit/:id', async (req, res) =>{
    var id = req.params.id;
    var figure = await FigureModel.findById(id);
    res.render('figure/figureEdit', {figures : figure});
});

router.post('/edit/:id', async (req, res) =>{
    var id = req.params.id;
    var figure = req.body;
    await FigureModel.findByIdAndUpdate(id, figure)
    .then(()=> console.log("ok"))
    .catch((err) => console.log(err));
    res.redirect('/figure');
});

router.get('/detail/:id', async (req, res) => {
    var id = req.params.id;
    var figure = await FigureModel.findById(id);
    res.render('figure/figureDetail', { figures : figure});
 });

router.get('/delete/:id', async(req, res) =>{
    var id = req.params.id;
    await FigureModel.findByIdAndDelete(id)
    .then(()=> console.log("ok"))
    .catch((err) => console.log(err));
    res.redirect('/figure');
});

router.post('/order', async (req, res) => {
    var data = req.body;
    var id = data.id;
    var figure = await FigureModel.findById(id);
    var price = data.price;
    var quantity = data.quantity;
    var total = price * quantity;
    res.render('figure/figureOrder', { figures: figure, quantity : quantity, price : price , total: total });
 });

module.exports = router;