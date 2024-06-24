const { getAll, create, getOne, remove, update } = require('../controler/ciry.controle');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const CityRoter  = express.Router();

UserROUTER.route(verifyJWT)
CityRoter.route('/cities')
    .get(getAll)
    .post(create);

CityRoter.route('/cities/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = CityRoter  ;