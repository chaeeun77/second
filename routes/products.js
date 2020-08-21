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

//datail product get API
router.get('/:productId', (req, res) => {
    const id = req.params.productId
    productModel
        .findById(id)
        .then(doc => {
            res.json({
                message: "get product data from " + id,
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
// router.put('/', (req, res) => {
//     res.json({
//         message: 'product data 업데이트하기'
//     })
// })
router.put('/:productId', (req, res) => {
    const id = req.params.productId
    const updateOps = {}
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    productModel
        .findByIdAndUpdate(id, {$set: updateOps})
        .then(result => {
            console.log("result is ", result)
            res.json({
                message: "updated product at " + id
            })
        })
        .catch(err => {
            res.json({
                message: err.message
            })
        })
})


//product data delete하기
// router.delete('/', (req, res) => {
//     res.json({
//         message: 'product data delete 하기'
//     })
// })
router.delete('/:productId', (req, res) => {
    const id = req.params.productId

    productModel
        .findByIdAndDelete(id)
        .then(result => {
            res.json({
                message: "deleted product at " + id
            })
        })
        .catch(err => {
            res.json({
                message: err.message
            })
        })
})

module.exports = router;