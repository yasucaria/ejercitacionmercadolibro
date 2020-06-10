const fs = require('fs');
const path = require("path");
const usersPath = path.join(".", "data", "users.json");
const listadoUsuarios = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));

const registroController = {
  register: function(req, res){
    res.render("users")
  },
    create: function (req, res) {
let usuario = {
nombre: req.body.nombre,
email: req.body.email,
password: req.body.password
}
let archivoUsuarios = fs.readFileSync("users.json", {encoding: "utf-8"});
if(archivoUsuarios == ""){
  let usuarios = [];
}else{
  let usuarios = JSON.parse(archivoUsuarios);
}
usuarios.push(usuario);

let usuarioJSON = JSON.stringify(usuarios);
fs.appendFileSync("users.json", usuariosJSON);

        res.redirect('users', {title: "Gracias por registrarte en Mercado Libro"});
      }
}


module.exports = registroController;