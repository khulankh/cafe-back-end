import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  products: [
    {
      product: String,
      size: String,
      quatity: Number,
    },
  ],
  costumerId: String,
  date: Date,
  statusType: {
    type: String,
    enum: ["placed", "in grogress", "on your way", "delivered"],
  },
  milkAmount: {
    type: Number,
    enum: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  promotionCode: String,
});

const OrderModel =
  mongoose.models.orders || mongoose.model("orders", OrderSchema);

export default OrderModel;
