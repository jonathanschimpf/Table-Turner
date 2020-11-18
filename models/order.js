const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({

    table: Number,
    order: String,
    allergies: String,
    extra_notes: String,
    label: String,
    course: Number,
    createTime: { type: Date, default: Date.now },
    updateTime: { type: Date, default: Date.now },
    waiterId: {
        type: Schema.Types.ObjectId,
        ref: "User"
      },
    username: String  
  
      

})


const Order = mongoose.model("Order", orderSchema);

module.exports = Order;