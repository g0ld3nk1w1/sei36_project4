import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema({
    productsCart: [{
        productId: {type: Schema.Types.ObjectId, ref: 'Product'},
        status: {type: String, enum: ["New", "Shipped", "Pending Delivery", "Fulfilled"], default: "New"}
    }],
    classCart:[{
        classId: {type: Schema.Types.ObjectId, ref: 'Eclass'},
        inputNmaes: [String],
        status: {type: String, enum: ["On Waiting List", "Enrolled", "Pending"]}
    }],
    orderStatus: {type:String , enum: ["Fulfilled", "New", "In Progres", "Partially Fulfilled", "Canceled", "Refunded", "Void", "Pending Payment",
"Pending Confirmation"], default: "New"},
    userId: Number,
    cost: mongoose.Types.Decimal128,
    amtPaid: {type: mongoose.Types.Decimal128, default: 0.0},
})

const Order = mongoose.model("Order", orderSchema);
// module.exports = Order;
export default Order;