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
 let usuarioJSON = JSON.stringify(usuario);
 fs.appendFileSync("users.json", usuarioJSON);

        res.redirect('users', {title: "Gracias por registrarte en Mercado Libro"});
      }
}


module.exports = registroController;