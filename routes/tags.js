const {Tag} = require('../models/tag');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


router.get('/', async (req, res) => {
    const tags = await Tag.find();
    res.send(tags);
});


router.post('/', async (req, res) => {
    /*const {
        error
    } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    */

    let tag = new Tag({
        name: req.body.name,
        color: req.body.color,
        tags: req.body.tasks
    });
    tag = await tag.save();

    res.send(tag);
});


router.put('/:name', async (req, res) => {
    // const {
    //     error
    // } = validate(req.body);
    // if (error) return res.status(400).send(error.details[0].message);

    const tag = await Tag.findOneAndUpdate({name: req.params.name},
    {
        name: req.body.name
    }, 
    {
        new: true
    });

    if (!tag) return res.status(404).send('The genre with the given ID was not found.');

    res.send(tag);
});

router.delete('/:name', async (req, res) => {
    const tag = await Tag.findOneAndRemove({
        name: req.params.name
    });

    if (!tag) return res.status(404).send('The genre with the given ID was not found.');

    res.send(tag);
});

router.get('/:name', async (req, res) => {
    const tag = await Tag.findOne({
        name: req.params.name
    });

    if (!tag) return res.status(404).send('The task with the given ID was not found.');

    res.send(tag);
});

module.exports = router;