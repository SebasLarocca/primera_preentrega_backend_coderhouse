const express = require('express')
const router = express.Router()
const productManager = require('../productManager')

router.get('/', async (req, res) => {
    if (req.query.limit) {
        let products = await productManager.getProducts();
        let listaProductos = JSON.parse(products);
        res.send(listaProductos.slice(0, req.query.limit))
    } else {
        let products = await productManager.getProducts();
        res.send(products)
    }
})

router.get('/:pid', async (req, res) => {
    let prod = await productManager.getProductsById(req.params.pid);
    res.send(prod)
})

router.post('/', async (req, res) => {
    let { title, description, code, price, stock, category, thumbnails } = req.body
    console.log('pego ok')
    if (title && description && code && price && stock && category) {
        await productManager.addProduct(title, description, code, price, stock, category, thumbnails)
        res.status(201).send('201')
    } else {
        res.send('Faltan datos')
    }
})

router.put("/:pid", async (req, res) => {
    await productManager.updateProduct(req.params.pid, req.body)
    res.status(201).send('201')
})

router.delete("/:pid", async (req, res) => {
    await productManager.deleteProductById(req.params.pid)
    res.status(201).send('201')
});

module.exports = router

