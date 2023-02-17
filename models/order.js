const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({

  table: { type: Number },
  order: { type: String },
  allergies: { type: Array },
  extra_notes: { type: String },
  label: { type: String },
  course: { type: Number },
  createTime: { type: Date, default: Date.now },
  updateTime: { type: Date, default: Date.now },
  waiterId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  username: { type: String }

})


const Order = mongoose.model("Order", orderSchema);

module.exports = Order;