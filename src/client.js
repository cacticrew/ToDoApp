// do zrobienia 
const express = require('express');
const app = express();
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/todo')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MondoDB...', err))

app.use(express.json())

async function getTasks(){
    await fetch('http://localhost:3000/api/tasks')
    .then((res) => res.json())
    .then((data) => 
    console.log(data))
}

getTasks()

