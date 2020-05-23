const express = require('express');
const router = express.Router();
const productosController = require("../controllers/productosController.js");

router.get("/productos", productosController.listado);
router.get("/:idProducto", productosController.detalle);
router.get("/agregar", productosController.agregar);

module.exports = router;