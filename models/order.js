const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({

    table: Number,
    order: String,
    allergies:  {
        gluten: {
            type: Boolean,
            default: false
        },
        nuts: {
            type: Boolean,
            default: false
        },
        eggs: {
            type: Boolean,
            default: false
        },
        pork: {
            type: Boolean,
            default: false
        },
        dairy: {
            type: Boolean,
            default: false
        },
        lily: {
            type: Boolean,
            default: false
        },
        shellfish: {
            type: Boolean,
            default: false
        },
        alcohol: {
            type: Boolean,
            default: false
        }
    },
    extra_notes: String,
    label: String,
    course: Number

})


const Order = mongoose.model("Order", orderSchema);

module.exports = Order;