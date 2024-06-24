const { getAll, create, getOne, remove, update } = require('../controler/bokin.controlol');
const express = require('express');

const BookingRouter = express.Router();

BookingRouter.route('/Bookings')
    .get(getAll)
    .post(create);

BookingRouter.route('/Bookings/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = BookingRouter;