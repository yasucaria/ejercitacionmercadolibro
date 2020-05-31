const express = require("express");
const router = express.Router();
const cargadeproductosController = require("../controllers/cargadeProductosController")

router.get('/cargadeproductos', cargadeproductosController.carrito);

module.exports = router;