const express = require('express');
const handlebars = require("express-handlebars");
const { Server } = require("socket.io");
const path = require("path");
const app = express()
const routerCarts = require('./api/carts')
const routerProducts = require('./api/products')
const httpServer = app.listen(8080, () => { console.log('Servidor escuchando en puerto 8080') })
const io = new Server(httpServer)
const viewsRouter = require("./routes/views.router.js");

app.engine(
    "handlebars",
    handlebars.engine({ extname: "hbs", defaultLayout: "", layoutsDir: "" })
);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use("/", viewsRouter);
app.use('/products', routerProducts)
app.use('/carts', routerCarts)

