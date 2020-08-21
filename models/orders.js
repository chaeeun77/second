//1번
const mongoose = require("mongoose");

//2번
const orderSchema = mongoose.Schema();

//3번
module.exports = mongoose.model('order', orderSchema)