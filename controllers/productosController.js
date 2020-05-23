const fs = require('fs');
const listadoProductos = JSON.parse(fs.readFileSync('./data/detalleProductos.json', 'utf-8'));

const productosController = {
listado: function(req, res){
    res.render("listadoProductos", {title: "Listado de productos"});
},
detalle: function(req, res){
    res.render("detalle", {title: "Detalle de productos"});
},
agregar: function(req, res){
    res.render("agregar", {title: "Formulario de producto"})
}
};

module.exports= "productosController"



module.exports= productosController;