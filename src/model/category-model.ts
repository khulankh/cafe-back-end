import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  categoryType: {
    type: String,
    enum: ["hotC", "iceT", "iceC", "hotT", "drinks", "bakery"],
  },
});

const CategoryModel =
  mongoose.models.categories || mongoose.model("categories", CategorySchema);

export default CategoryModel;
