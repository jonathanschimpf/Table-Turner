const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/Project-Three"
  );


const orderSeed = [
    {
        //table number, order, {allergy items}, extra_notes, label
        table: 1,
        order: "Chicken",
        allergies: [{
          gluten: false,
          nuts: false,
          eggs: true,
          pork: false,
          dairy: false,
          lily: false,
          shellfish: false,
          alcohol: false,
        }],
        extra_notes: "Please put the sauce on the side",
        label: "1"
    },
    {
        //table number, order, {allergy items}, extra_notes, label
        table: 1,
        order: "Tacos",
        allergies: [{
          gluten: false,
          nuts: false,
          eggs: false,
          pork: false,
          dairy: true,
          lily: false,
          shellfish: false,
          alcohol: false,
        }],
        extra_notes: "",
        label: "2"
    },
    {
        //table number, order, {allergy items}, extra_notes, label
        table: 1,
        order: "Shrimp",
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
        label: "3"
    },
    {
        //table number, order, {allergy items}, extra_notes, label
        table: 1,
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
        extra_notes: "Please put the dressing on the side",
        label: "4"
    },
    {
        //table number, order, {allergy items}, extra_notes, label
        table: 2,
        order: "Steak",
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
        label: "1"
    },
    {
        //table number, order, {allergy items}, extra_notes, label
        table: 2,
        order: "Pasta",
        allergies: [{
          gluten: false,
          nuts: false,
          eggs: false,
          pork: false,
          dairy: false,
          lily: true,
          shellfish: false,
          alcohol: false,
        }],
        extra_notes: "Please bring out extra cheese",
        label: "2"
    },
    {
        //table number, order, {allergy items}, extra_notes, label
        table: 2,
        order: "Fish",
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
        label: "3"
    },
    {
        //table number, order, {allergy items}, extra_notes, label
        table: 2,
        order: "Chicken",
        allergies: [{
          gluten: false,
          nuts: true,
          eggs: false,
          pork: false,
          dairy: false,
          lily: false,
          shellfish: false,
          alcohol: false,
        }],
        extra_notes: "no walnuts please",
        label: "4"
    },
    {
        //table number, order, {allergy items}, extra_notes, label
        table: 3,
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
        extra_notes: "",
        label: "1"
    },
    
];



db.Order
  .remove({})
  .then(() => db.Order.collection.insertMany(orderSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });