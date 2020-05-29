const fs = require('fs');
const listadoProductos = JSON.parse(fs.readFileSync('./data/detalleProductos.json', 'utf-8'));

const productosController = {
listado: function(req, res){
    res.render("listadoProductos", {title: "Listado de productos"});
},
detalle: function(req, res){
    res.render("detalleProducto");
},
agregar: function(req, res){
    res.render("agregarProducto")
},
create: function(req, res){
    res.render("")
},
modificacion: function(req, res){
    res.render("")
},
baja: function(req, res){
    res.render("")
},
agregar: function(req, res){
    res.render("")
},
alta: function(req, res){
    res.render("")
}
};


module.exports= productosController;