const {Task} = require('../models/task');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.send(tasks);
});


router.post('/', async (req, res) => {
    /*const {
        error
    } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    */

    let task = new Task({
        name: req.body.name,
        done: req.body.done,
        dateStart: req.body.date,
        tags: req.body.tagTable
    });
    task = await task.save();

    res.send(task);
});


router.put('/:name', async (req, res) => {
    // const {
    //     error
    // } = validate(req.body);
    // if (error) return res.status(400).send(error.details[0].message);

    const task = await Task.findOneAndUpdate({ name:req.params.name} , {
        name: req.body.name
    }, {
        new: true
    });

    if (!task) return res.status(404).send('The genre with the given ID was not found.');

    res.send(task);
});

router.delete('/:name', async (req, res) => {
    const task = await Task.findOneAndRemove({name: req.params.name});

    if (!task) return res.status(404).send('The genre with the given ID was not found.');

    res.send(task);
});

router.get('/:name', async (req, res) => {
    const task = await Task.findOne({ name :req.params.name});

    if (!task) return res.status(404).send('The task with the given ID was not found.');

    res.send(task);
});




module.exports = router;