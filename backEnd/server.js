import express from 'express';
import dotenv from "dotenv";
dotenv.config();
import connectedDB from './config/db.js';
import products from './Data/products.js';
const port = process.env.PORT || 5000;

connectedDB();
const app = express();
// fetching all product together
app.get("/", (req, res) => res.send('Hello World!'));
app.get("/api/products", (req, res) => {
    // console.log(products);
    res.json(products)
});


// fetching single product
app.get("/api/products/:id", (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product); 
});

// Initiating server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));