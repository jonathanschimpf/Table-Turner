const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  item: { type: String, required: true },
  price: { type: Number, required: true },
  ingredients: { type: String, required: true },
  info: { type: String, required: true },
  section: {type: String, required: true}
});

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;
