const express = require('express');
const mongoose = require('mongoose');
const dbURI = ''; // removed URI for privacy
const path = require('path');
const app = express();
app.use(express.json());
const port = 2222;
const router = express.Router();
const Recipes = require('./models/recipes');

app.use(express.static('front'));

app.use((req, res, next) => {
    console.log(`${req.method} request for ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'front/views/synth.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'front/views/about.html'));
});


router.get('/recipes/:name', (req, res) => {
    Recipes.find({ name: req.params.name })
        .then(data => res.send(data))
        .catch(err => res.status(400).json('Error: ' + err));
});

app.use('/api/synth', router);

// connect mongoose to app and listen on designated port
mongoose.connect(dbURI)
    .then(() => app.listen(port, () => console.log(`listening on port ${port}...`)))
    .catch(err => console.log(err));