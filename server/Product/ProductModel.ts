import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
    name: {type: String, unique: true, required: true},
    imgurl: [String],
    qty: {type: Number, min: 0, default: 0},
    cost: {type: Number, default: 0.0},
    isActive: {type: Boolean, default: true},
    isDisplayed: {type: Boolean, default: false}
})

productSchema.index({name: 1, isActive: 1});

const Product = mongoose.model("Product", productSchema);
Product.createIndexes();
// module.exports = Product;

export default Product;
