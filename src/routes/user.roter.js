const { getAll, create, getOne, remove, update, login } = require('../controler/usre.controler');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const UserROUTER = express.Router();


UserROUTER.route('/users')
.get(verifyJWT,getAll)
.post(create);
UserROUTER.route('/users/login')
.post(login);

UserROUTER.route(verifyJWT)
UserROUTER.route('/users/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = UserROUTER;