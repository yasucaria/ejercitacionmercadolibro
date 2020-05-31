const cargadeProductosController = {
    carrito: function (req, res) {
        res.render('agregarProducto', { title: 'Carga de productos'});
      }
};

module.exports = cargadeProductosController;