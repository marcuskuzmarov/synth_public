const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipesSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    settings: {
        type: Array,
        required: true
    }
});

const Recipes = mongoose.model('Recipes', recipesSchema);
module.exports = Recipes;