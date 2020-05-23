const registroController = {
    registro: function (req, res) {
        res.render('registro', { title: 'Formulario de registro'});
      }


};

module.exports = registroController;