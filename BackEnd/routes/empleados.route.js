const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const empleadosCrtl = require('../app/controllers/empleados.controller');


router.use(bodyParser.json()) // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true }))


router.get('/', empleadosCrtl.getAllEmpleados);
router.post('/', empleadosCrtl.postEmpleado);
router.get('/:id', empleadosCrtl.getAllEmpleado);
router.put('/:id', empleadosCrtl.putEmpleado);
router.delete('/:id', empleadosCrtl.deleteEmpleado);

module.exports = router;