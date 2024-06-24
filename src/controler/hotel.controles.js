const catchError = require('../utils/catchError');
const Hotel = require('../modelos/Hotel');
const { Op } = require('sequelize');

const getAll = catchError(async(req, res) => {
    const {name,cityId} = req.query
    const where={};
    if(name&cityId)where.name={[Op.iLike]:`%${name}%`},where.cityId={[Op.iLike]:`%${cityId}%`}
    const results = await Hotel.findAll({where});
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await Hotel.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Hotel.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Hotel.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Hotel.update(
        req.body,
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