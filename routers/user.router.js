const express = require("express");
const routers = express.Router();

const controller = require('../controllers/user.controller');

routers.get('/', controller.readAll);
routers.post('/', controller.created);
routers.get('/:id', controller.readed);
routers.put('/:id', controller.updated);
routers.delete('/:id', controller.deleted);

module.exports = routers;