import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
    },
    imageurl: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255,
    },
    noinstock: {
        type: Number,
        required: true,
        minlength: 5,
        maxlength: 255,
    },
    category: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    itemcost: {
        type: Number,
        required: true,
        minlength: 5,
        maxlength: 255
    }

});

export const ProductModel = mongoose.model("Products", ProductSchema);