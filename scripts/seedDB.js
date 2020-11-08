const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/Project-Three"
  );


const tableSeed = [
    {
        //seat number, order, {allergy items}, extra_notes
        seat_number: 1,
        order: "Chicken",
        allergies: [{
          gluten: false,
          nuts: false,
          eggs: false,
          pork: false,
          dairy: false,
          lily: false,
          shellfish: false,
          alcohol: false,
        }],
        extra_notes: "Please put the sauce on the side",
    },
    {
        //seat number, order, {allergy items}, extra_notes
        seat_number: 2,
        order: "Tacos",
        allergies: [{
          gluten: false,
          nuts: false,
          eggs: false,
          pork: false,
          dairy: false,
          lily: false,
          shellfish: false,
          alcohol: false,
        }],
        extra_notes: "",
    },
    {
        //seat number, order, {allergy items}, extra_notes
        seat_number: 3,
        order: "Salad",
        allergies: [{
          gluten: false,
          nuts: false,
          eggs: false,
          pork: false,
          dairy: false,
          lily: false,
          shellfish: false,
          alcohol: false,
        }],
        extra_notes: "Please put the dressing for the salad on the side",
    },
    {
        //seat number, order, {allergy items}, extra_notes
        seat_number: 4,
        order: "Burger",
        allergies: [{
          gluten: false,
          nuts: false,
          eggs: false,
          pork: false,
          dairy: false,
          lily: false,
          shellfish: false,
          alcohol: false,
        }],
        extra_notes: "Please put extra ketchup and extra cheese on the burger",
    },
];



db.Table
  .remove({})
  .then(() => db.Table.collection.insertMany(tableSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });