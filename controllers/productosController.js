const fs = require('fs');
const path = require("path");
const productsPath = path.join(".", "data", "detalleProductos.json");
const listadoProductos = JSON.parse(fs.readFileSync('./data/detalleProductos.json', 'utf-8'));

const productosController = {
"listado" : function(req, res){
    res.render("listadoProductos", {"listadoProductos": listadoProductos});
},
"detalle" : function(req, res){
let idProductoElegido = req.params.idProduct;
const productoAMostrar = listadoProductos.find(producto => {
    return listadoProductos.idProduct == productoAMostrar
});
    res.render("detalleProducto", {"productoClickeado": productoAMostrar});
},
"create" : function(req, res){
    let producto = {
        id: req.body.id,
        titulo: req.body.titulo,
        categoria: req.body.categoria
    }
    let productoJSON = JSON.stringify(producto);
    fs.appendFileSync("detalleProductos.json", productoJSON);

    res.redirect("agregarProducto", {titulo: "Se agregó un nuevo producto"});
},
"update": function(req, res){
    res.render("")
},
"delete": function(req, res){

    res.redirect("/product")
},

};


module.exports= productosController;