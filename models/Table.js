const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tableSchema = new Schema({


    table: [{
        seat_1: {
            seat_number: Number,
            order: String,
            allergies: [{
                gluten: Boolean,
                nuts: Boolean,
                eggs: Boolean,
                pork: Boolean,
                dairy: Boolean,
                lily: Boolean,
                shellfish: Boolean,
                alcohol: Boolean,
            }],
            extra_notes: String,
        },
        seat_2: {
            seat_number: Number,
            order: String,
            allergies: [{
                gluten: Boolean,
                nuts: Boolean,
                eggs: Boolean,
                pork: Boolean,
                dairy: Boolean,
                lily: Boolean,
                shellfish: Boolean,
                alcohol: Boolean,
            }],
            extra_notes: String,
        },
        seat_3: {
            seat_number: Number,
            order: String,
            allergies: [{
                gluten: Boolean,
                nuts: Boolean,
                eggs: Boolean,
                pork: Boolean,
                dairy: Boolean,
                lily: Boolean,
                shellfish: Boolean,
                alcohol: Boolean,
            }],
            extra_notes: String,
        },
        seat_4: {
            seat_number: Number,
            order: String,
            allergies: [{
                gluten: Boolean,
                nuts: Boolean,
                eggs: Boolean,
                pork: Boolean,
                dairy: Boolean,
                lily: Boolean,
                shellfish: Boolean,
                alcohol: Boolean,
            }],
            extra_notes: String,
        },
    }]



    // exercises: [
    //     {
    //         type: {
    //             type: String
    //         },
    //         name: {
    //             type: String
    //         },
    //         distance: {
    //             type: Number
    //         },
    //         duration: {
    //             type: Number
    //         },
    //         weight: {
    //             type: Number
    //         },
    //         sets: {
    //             type: Number

    //         },
    //         reps: {
    //             type: Number

    //         }
    //     }
    // ]





})


const Table = mongoose.model("Table", tableSchema);

module.exports = Table;