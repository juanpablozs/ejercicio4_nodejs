var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  
  const elementos = [
	{ nombre: 'Zapatillas', precio: '50$' },
	{ nombre: 'Camisetas', precio: '30$' },
	{ nombre: 'Gafas', precio: '15$' }
  ];

  res.render('index', { title: 'Express', elementos});
});

const usuarios = [
  { username: 'usuario1', password: 'contrasena1' },
  { username: 'usuario2', password: 'contrasena2' }
];

router.get('/login', function(req, res, next) {
	res.render(path.join(__dirname, '../views/login'), { title: 'Login' });
});

router.post('/login', function(req, res, next) {
  const { username, password } = req.body;

  // Verifica las credenciales
  const usuarioValido = usuarios.find(user => user.username === username && user.password === password);

  if (usuarioValido) {
    // Redirige a la página de inicio después de un inicio de sesión exitoso
    res.redirect('/');
  } else {
    // Renderiza la página de login con un mensaje de error
    res.render('login', { title: 'Login', error: 'Credenciales incorrectas' });
  }
});

module.exports = router;
