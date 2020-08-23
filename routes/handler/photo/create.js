const express = require('express');
const router = express.Router();
const isBase64 = require('is-base64');
const base64Img = require('base64-img');
const Validator = require('fastest-validator');
const v = new Validator();

const models  = require('../../../models/');

module.exports = async (req, res) => {
    const schema = {
      id_stuff: 'number|empty:false'
    }

    const validate = v.validate(req.body, schema);

    if (validate.length) {
        return res.status(400).json({
            status: 'error',
            message: validate
        });
    }

    const image = req.body.image;
    if (!isBase64(image, {mimeRequired: true})) {
        return res.status(400).json({ status: 'error', message: 'invalid base64' });
    }

    base64Img.img(image, './public/images', Date.now(), async (err, filepath) => {
        if (err) {
            return res.status(400).json({ status: 'error', message: err.message });
        }

        const fileName = filepath.split('/').pop();

        const data = {
            id_stuff: req.body.id_stuff,
            image: `images/${fileName}`
        }

        const media = await models.Photo.create(data);

        return res.json({
            status: 'success',
            data: media
        });
    });
}
