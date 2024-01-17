const express = require('express')
const router = express.Router()
const cartManager = require('../cartManager')


router.post('/', (req, res)=>{
    cartManager.addCart()
    res.status(201).send('201')
})

router.get('/:cid', async (req, res)=>{
    const prods = await cartManager.getCartProducs(req.params.cid)
    res.status(201).send(prods)
})

router.post('/:cid/products/:pid', async (req, res)=>{
    let cart = await cartManager.addProductToCart(req.params.cid, req.params.pid)
    res.status(201).send('201')
})

module.exports = router