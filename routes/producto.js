const express = require('express');
const router = express.Router();
const productosController = require("../controllers/productosController.js");

router.get("/productos", productosController.listado);
router.get("/detalle", productosController.detalle);
router.get("/agregar", productosController.agregar);

module.exports = router;