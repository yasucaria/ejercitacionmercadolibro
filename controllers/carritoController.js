const carritoController = {
    carrito: function (req, res) {
        res.render('carrito', { title: 'Agregar producto al carrito de compras'});
      }
};

module.exports = carritoController;