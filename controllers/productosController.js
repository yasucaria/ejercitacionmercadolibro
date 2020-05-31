const fs = require('fs');
const listadoProductos = JSON.parse(fs.readFileSync('./data/detalleProductos.json', 'utf-8'));

const productosController = {
"listado" : function(req, res){
    res.render("listadoProductos", {listadoProductos: listadoProductos});
},
"detalle" : function(req, res){
let idProductoElegido = req.params.idProducto;
const productoClickeado = listadoProductos.find(producto => req.params.idProducto)
    res.render("detalleProducto", {title: req.params.idProducto});
},
"agregar" : function(req, res){
    res.render("agregarProducto")
},
"create": function(req, res){
    res.render("")
},
"modificacion": function(req, res){
    res.render("")
},
"baja": function(req, res){
    res.render("")
},
"agregar": function(req, res){
    res.render("")
},
"alta": function(req, res){
    res.render("")
}
};


module.exports= productosController;