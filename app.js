const express = require('express');
const app = express()
const routerCarts = require('./api/carts')
const routerProducts = require('./api/products')

app.use(express.json())
app.use('/products', routerProducts)
app.use('/carts', routerCarts)

app.listen(8080, ()=>{ console.log('Servidor escuchando en puerto 8080')})