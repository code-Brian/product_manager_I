const { response } = require('express')
const Product = require('../models/product.model')

const ProductController = {
    // CREATE
    create: (req,res) => {
        Product.create(req.body)
        .then(product=>{
            console.log(req.body)
            response.json(product)
        })
        .catch((err) => {
            res.json({msg: "Something went wrong...", error: err})
        })
    },
    // READ 
    getAll: (request,response) => {
        Product.find()
        .then((allProducts) => {
            response.json(allProducts)
        })
        .catch((err) => {response.json({err})})
    },
    getOne: (req,res) => {
        Product.findOne({_id:req.params.id})
        .then(product => {
            res.json(product)
        })
        .catch((err) => {
            res.status(404).json({msg: "Something went wrong...", error: err})
        })
    },
    // UPDATE
    update: (req,res) => {
        Product.findOneAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators:true})
        .then(product =>{
            res.json(product)
        })
        .catch((err) => {
            res.status(404).json({msg: "Something went wrong...", error: err})
        })
    },
    // DELETE
    delete: (req,res) => {
        Product.deleteOne({_id:req.params.id})
        .then(response => {
            res.json(response)
        })
        .catch((err) => {
            res.status(404).json({msg: "Something went wrong...", error: err})
        })
    }
}

module.exports = ProductController