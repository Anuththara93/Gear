// import express from "express";
// import cors from "cors";
// import mongoose from "mongoose";
// import { customerRouter } from './routes/Customer.js'
// import { adminRouter } from "./routes/Admin.js";
// import { workerRouter } from "./routes/Workers.js";
// import { contactUsRouter } from "./routes/Contactus.js";
// import { productRouter } from "./routes/Products.js";
// import { orderRouter } from "./routes/Order.js";

// const app = express();

// app.use(express.json());
// app.use(cors());

// app.use("/Customer", customerRouter);
// app.use("/Admin", adminRouter);
// app.use("/Workers", workerRouter);
// app.use("/Contactus", contactUsRouter)
// app.use("/Products", productRouter)
// app.use("/Order", orderRouter)

// mongoose.connect('mongodb://localhost/Gear').
//     then(() => console.log('Connected to MongoDB ...'))
//     .catch(err => console.log(err));

// app.listen(3001, () => {
//     console.log("Server started");
// })
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { customerRouter } from './routes/Customer.js';
import { adminRouter } from "./routes/Admin.js";
import { workerRouter } from "./routes/Workers.js";
import { contactUsRouter } from "./routes/Contactus.js";
import { productRouter } from "./routes/Products.js";
import { orderRouter } from "./routes/Order.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/Customer", customerRouter);
app.use("/Admin", adminRouter);
app.use("/Workers", workerRouter);
app.use("/Contactus", contactUsRouter);
app.use("/Products", productRouter);
app.use("/Order", orderRouter);

mongoose.connect('mongodb://127.0.0.1:27017/Gear', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to MongoDB ...'))
    .catch(err => console.error('MongoDB connection error:', err));

app.listen(3001, () => {
    console.log("Server started on port 3001");
});