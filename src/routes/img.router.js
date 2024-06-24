const { getAll, create,remove,  } = require('../controler/imgen.cotrle');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');
const upload = require('../utils/multer');

const imageRouter = express.Router();

UserROUTER.route(verifyJWT)
imageRouter.route('/Image')
    .get(getAll)
    .post(upload.single('image'),create);

imageRouter.route('/Image/:id')
    .delete(remove)
 

module.exports = imageRouter;