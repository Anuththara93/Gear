import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    UId: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255,
    },
    Uname: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255,
    },
    PName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255,
    },
    Address: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 500,
    },
    Quantity: {
        type: Number,
        required: true,
        minlength: 1,
        maxlength: 10
    },
    Total: {
        type: Number,
        required: true,
        minlength: 0,
        maxlength: 5000
    },
    Date: {
        type: Date,
        default: Date.now
    },
});

export const OrderModel = mongoose.model("Order", OrderSchema);