const mongoose = require('mongoose'),
    InventorySchema = new mongoose.Schema({
        image: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        department: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        store: {
            type: String,
            required: true
        }
    })
const Inventory = {
    Apparel: mongoose.model('Inventory', InventorySchema, 'apparel'),
    Electronics: mongoose.model('Inventory', InventorySchema, 'electronics'),
    Homegoods: mongoose.model('Inventory', InventorySchema, 'homegoods')
}
module.exports = Inventory