const express = require('express')
const router = express.Router();
const productManager = require('../productManager')

router.get("/", (req, res) => {
    res.render("home",  { products: productManager.getProducts() });
});

router.use("/realtimeproducts", productManager);

module.exports = router;