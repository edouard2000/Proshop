import express from 'express';
import products from './Data/products.js';
const port = 3000;
const app = express();

// fetching all product together
app.get("/", (req, res) => res.send('Hello World!'));
app.get("/api/products", (req, res) => res.json(products));


// fetching single product
app.get("/api/products/:id", (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product); 
});

// initiating server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));