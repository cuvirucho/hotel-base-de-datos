const HotelRoter = require("../routes/hotel.royrte");
const Booking = require("./Booking");
const City = require("./City");
const Hotel = require("./Hotel");
const Image = require("./Image");
const User = require("./User");

City.hasMany(Hotel)
Hotel.belongsTo(City)


Hotel.hasMany(Image)
Image.belongsTo(Hotel)



Booking.belongsTo(Hotel)
Hotel.hasMany(Booking)


Booking.belongsTo(User)
User.hasMany(Booking)