import mongoose from "mongoose";
import Product from "../models/products.model.js";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        return res.status(200).json({
            success: true, 
            data: products
        })
    } catch(err) {
        console.log(`Error in Fetching Products: ${err}`);
        res.status(500).json({
            success: false,
            message: "Server Error"
        })
    } 
};


export const createProduct = async (req, res) => {
    const product = req.body; // send by the user

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({
            success: false,
            message: "Please provide all the fields"
        })
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({
            success: true,
            data: newProduct
        })
    } catch(err) {
        console.log(`Error in Create product: ${err}`);
        res.status(500).json({
            success: false,
            message: "Server Error"
        })
    }
};


export const updateProduct = async (req, res) => {
    let { id } = req.params;

    const product = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({
            success: false,
            message: "Product not found"
        })
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new: true});
        res.status(200).json({
            success: true,
            data: updatedProduct
        })
    } catch(err) { 
        console.log(`Error in Updating Product: ${err}`);
        res.status(500).json({
            success: false,
            message: "Server Error"
        })
    }
};

export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({
            success: false,
            message: "Invalid Product Id"
        })
    }
    
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({
            success: true, 
            message: "Product Deleted"
        })
    } catch(err) {
        console.log(`Error in Delete Product: ${err}`)
        res.status(500).json({
            success: false,
            message: "Server Error"
        })
    }
};