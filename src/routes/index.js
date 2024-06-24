const express = require('express');
const UserROUTER = require('./user.roter');
const HotelRoter = require('./hotel.royrte');
const CityRoter = require('./city.route');
const imageRouter = require('./img.router');
const BookingRouter = require('./bokin.router');
const router = express.Router();

// colocar las rutas aquí

router.use(UserROUTER)
router.use(HotelRoter)
router.use(CityRoter)
router,use(imageRouter)
router,use(BookingRouter)
module.exports = router;