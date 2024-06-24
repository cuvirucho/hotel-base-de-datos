const catchError = require('../utils/catchError');
const comment = require('../modelos/Reviews');
const Review = require('../modelos/Review');
const Hotel = require('../modelos/Hotel');

const getAll = catchError(async(req, res) => {
    const { hotelId, offset, perPage } = req.query;
    const where = {};
    if (hotelId) where.hotelId = hotelId;
    const results = await Review.findAll({ 
        include: [Hotel],
        where: where,
        offset: offset,
        limit: perPage,
    });
    return res.json(results);
});
const create = catchError(async(req, res) => {
    const { newsId, rate } = req.body;
    const result = await Favorite.create({
        newsId,
        rate,
        userId: req.user.id,
    });
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await comment.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await comment.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { rating ,comment} = req.params;
    const result = await Booking.update(
     {rating ,comment},
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}