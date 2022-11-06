const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Product title is required!"]
    },
    price: {
        type: Number,
        required: [true, "Product price is required!"]
    },
    description: {
        type: String,
        required: [true, "Product description is required!"]
    }
}, {timestamps:true})

const Product = mongoose.model("Product", ProductSchema)

module.exports = Product