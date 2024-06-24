const { getAll, create, getOne, remove, update } = require('../controler/hotel.controles');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const HotelRoter = express.Router();

HotelRoter.route('/hotels')
    .get(getAll)
    .post(verifyJWT,create);

HotelRoter.route('/hotels/:id')
    .get(getOne)
    .delete(verifyJWT,remove)
    .put(verifyJWT,update);

module.exports = HotelRoter;