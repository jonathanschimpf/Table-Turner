const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({

    table: Number,
    order: String,
    allergies: String,
    extra_notes: String,
    label: String,
    course: Number

})


const Order = mongoose.model("Order", orderSchema);

module.exports = Order;