const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const productModel = require("../models/product");

//product data 불러오기
router.get('/total', (req, res) => {
    // res.json({
    //     message: 'product data 불러오기'
    // })
    productModel
        .find()
        .then(doc => {
            res.json({
                count: doc.length,
                products: doc
            })
        })
        .catch(err => {(
            res.json({
                message: err.message
            })
        )})
})

//product data 생성하기
router.post('/register', (req, res) => {
    // const product = {
    //     name: req.body.productname,
    //     price: req.body.productprice
    // }
    // res.json({
    //     message: 'product data 생성하기',
    //     createdProduct: product
    // })
    const newProduct = new productModel({
        name: req.body.productname,
        price: req.body.productprice
    })

    newProduct
        .save()
        .then(doc => {
            res.json({
                message: "saved data",
                productInfo: doc
            })
        })
        .catch(err => {
            res.json({
                message: err.message
            })
        })
})

//product data 업데이트하기
router.put('/', (req, res) => {
    res.json({
        message: 'product data 업데이트하기'
    })
})

//product data delete하기
router.delete('/', (req, res) => {
    res.json({
        message: 'product data delete 하기'
    })
})

module.exports = router;