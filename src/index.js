
const auth = require('../routes/auth');
const users = require('../routes/user');
const tasks = require('../routes/task');
const tags = require('../routes/tag')
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/todo')
    .then (() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MondoDB...',err))

// this will let us get the data from a POST
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// set the routes
app.use('/api/users', users);
app.use('/api/tasks', tasks);
app.use('/api/auth', auth);
app.use('/api/tags', tags);

// set the port 
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

// tryouts

//document.getElementById('testes').innerHTML = "ABC";



// first attempt 

/*

const taskSchema = new mongoose.Schema({
    name: String,
    author: String,
    date: {type: Date, default: Date.now } 
});

const Tasks = mongoose.model('Tasks', taskSchema);
async function createTask() {

const tasks = new Tasks({
    name: "zrobic zadanie",
    author: "konrad",

})

const result = await tasks.save();
console.log(result);
}
//createTask();




const router = express.Router(); 


router.get('/', function (req, res) {
    res.json({
        message: 'hooray! welcome to our api!'
    });
});

router.route('/tasks')
    .post(function(req,res){

        const task = new Tasks();
        task.name = req.body.name;

        task.save(function(err){
            if (err) res.send(err);

            res.json({ message: 'Task created!'});
        });

    })
    .get(function (req, res) {
        Tasks.find(function (err, tasks) {
            if (err)
                res.send(err);

            res.json(tasks);
        });
    });


app.use('/api', router);

*/

// logowanie i rejestracja



/*

const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const tags = [
  { id: 1, name: 'Study' },  
  { id: 2, name: 'Job' },  
  { id: 3, name: 'Hobby' },  
];

app.get('/api/tags', (req, res) => {
  res.send(tags);
});

app.post('/api/tags', (req, res) => {
  const { error } = validateTags(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const tag = {
    id: tags.length + 1,
    name: req.body.name
  };
  tags.push(tag);
  res.send(tag);
});

app.put('/api/tags/:id', (req, res) => {
  const tag = tags.find(c => c.id === parseInt(req.params.id));
  if (!tag) return res.status(404).send('The genre with the given ID was not found.');

  const { error } = validateTag(req.body); 
  if (error) return res.status(400).send(error.details[0].message);
  
  tag.name = req.body.name; 
  res.send(tag);
});

app.delete('/api/tags/:id', (req, res) => {
  const tag = tags.find(c => c.id === parseInt(req.params.id));
  if (!tag) return res.status(404).send('The genre with the given ID was not found.');

  const index = tags.indexOf(tag);
  tags.splice(index, 1);

  res.send(tag);
});

app.get('/api/tags/:id', (req, res) => {
  const tag = tags.find(c => c.id === parseInt(req.params.id));
  if (!tag) return res.status(404).send('The genre with the given ID was not found.');
  res.send(tag);
});

function validateTags(tag) {
  const schema = {
    name: Joi.string().min(3).required()
  };

  return Joi.validate(tag, schema);
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

*/

// IMPORT MODUŁOW


// DEFINICJA ZMIENNYCH


// UCHWYCENIE ELEMENTOW 

/*
const list = document.getElementById("list");

// Funkcja dodająca taska

// dodac do styli line_through

function addToDo ( task, done, trash ) {

    if(trash) {return; }

    const complete = done ? "checked" : "";
    const line = done ? line_through : "";


    const text = `<li> <div class="taskText">
        <input type="checkbox" name="checkbox1" id="checkbox1" ${complete}></input>
        <label for="checkbox1" class = "${line}" >${task}</label>
    </div>

        <div class="buttons">
            <i class="fas fa-pen"></i>
            <i class="fas fa-trash-alt"></i>
        </div> </li>`;


    const position = "beforeend"

    list.insertAdjacentHTML(position, text);
}

//addToDo ("ABCD");

// event dodajacy taska do listy
// <form> zamieniony na <div> w index.html 45 i 48 by sie taski dodawały 

const input = document.getElementById("input");

 document.addEventListener("keyup",function(e){
     if(event.keyCode == 13 ){
         const task = input.value;
         if(task){
             addToDo(task);
         }
         input.value = "";
     }
 });

 addToDo("abc",true,false);
 */