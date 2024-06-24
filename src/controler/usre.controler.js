const catchError = require('../utils/catchError');
const User = require('../modelos/User');
const bycrypt = require("bcrypt");
const getAll = catchError(async(req, res) => {
    const results = await User.findAll();
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const encripconta = await bycrypt.hash(req.body.password);
    const result = await User.create({...req.body, password: encripconta});
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await User.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await User.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await User.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

const login = catchError(async (req, res) => {
    const { email, password } = req.body;
  
    const use = await User.findOne({ where: { email: email } });
    if (!use) return res.status(401).json({ message: "no user" });
    const isvalid = await bycrypt.compare(password, use.password);
    if (!isvalid) return res.status(401).json({ message: "mal contraseña" });
  
    const token = jwt.sign({ use }, process.env.TOKEN_SECRET, {
      expiresIn: "1d",
    });
  
    return res.json({ use, token });
  });



module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    login
}