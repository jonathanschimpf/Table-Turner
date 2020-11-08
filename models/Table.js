const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tableSchema = new Schema({
    seat_number: Number,
    order: String,
    gluten: {
        type: Boolean,
        default: False
    },
    nuts: {
        type: Boolean,
        default: False
    },
    eggs: {
        type: Boolean,
        default: False
    },
    pork: {
        type: Boolean,
        default: False
    },
    dairy: {
        type: Boolean,
        default: False
    },
    lily: {
        type: Boolean,
        default: False
    },
    shellfish: {
        type: Boolean,
        default: False
    },
    alcohol: {
        type: Boolean,
        default: False
    },
    extra_notes: String
})


const Table = mongoose.model("Table", tableSchema);

module.exports = Table;