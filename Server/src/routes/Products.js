import express from "express";
import { ProductModel } from "../models/Products.js";

const router = express.Router();

router.post("/register", async (req, res) => {
    const { title, imageurl, noinstock, category, itemcost } = req.body;

    const newProduct = new ProductModel({ title, imageurl, noinstock, category, itemcost });

    await newProduct.save();
    res.json({ message: "Product Added Succesfully" });
});


router.get('/products', async (req, res) => {
    const worker = await ProductModel.find();

    if (!worker) {
        return res.send("Not Found");
    }
    res.send(worker);
})

router.get('/products/:id', async (req, res) => {
    const customer = await ProductModel.findById(req.params.id);

    if (!customer) {
        return res.send("Not Found");
    }
    res.send(customer);
})
router.put('/products/:id', async (req, res) => {
    try {

        const product = await ProductModel.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            imageurl: req.body.imageurl,
            noinstock: req.body.noinstock,
            category: req.body.category,
            itemcost: req.body.itemcost

        }, { new: true });

        if (!product) {
            return res.send("Not Found");

        }
        res.send(product);
    }
    catch {
        res.send('error')
    }



});

router.delete('/products/:id', async (req, res) => {

    const product = await ProductModel.findByIdAndRemove(req.params.id);
    if (!product) {
        return res.send("Not Found");
    }
    res.send(product);
})


export { router as productRouter };