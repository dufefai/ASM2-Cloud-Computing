var express = require('express');
const FigureModel = require('../models/FigureModel');
const LegoModel = require('../models/LegoModel');
const WoodModel = require('../models/WoodModel');
var router = express.Router();

/* GET home page. */
router.get('/', async(req, res) => {
  var figure = await FigureModel.find();
  var lego = await LegoModel.find();
  var wood = await WoodModel.find();
  res.render('index', { figures : figure, woods : wood, legos : lego});
});

router.post('/search', async(req, res)=>{
  var keyword = req.body.keyword;
  var figure = await FigureModel.find({name: new RegExp(keyword, "i")});
  var lego = await LegoModel.find({name: new RegExp(keyword, "i")});
  var wood = await WoodModel.find({name: new RegExp(keyword, "i")});
  res.render('index', {figures : figure, woods : wood, legos : lego});
});

router.get('/sort/price/asc', async(req,res)=>{
  var figure = await FigureModel.find();
  var lego = await LegoModel.find();
  var wood = await WoodModel.find();
  var allData = figure.concat(lego, wood);
  allData.sort((a, b) => a.price - b.price);
  res.render('index', { figures: allData });
});

router.get('/sort/price/desc', async(req,res)=>{
  var figure = await FigureModel.find();
  var lego = await LegoModel.find();
  var wood = await WoodModel.find();
  var allData = figure.concat(lego, wood);
  allData.sort((a, b) => b.price - a.price);
  res.render('index', { figures: allData });
});

module.exports = router;
