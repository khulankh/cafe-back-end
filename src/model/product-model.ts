import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  proImageUrl: String,
  productName: String,
  price: {
    small: Number,
    medium: Number,
    large: Number,
  },
  category: String,
});

const ProductModel =
  mongoose.models.products || mongoose.model("products", ProductSchema);

export default ProductModel;
