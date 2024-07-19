import mongoose from "mongoose";

const CostumerSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
  avatar: String,
  address: String,
  paymentInfo: {
    cardHolder: String,
    cardNumber: String,
    expirationDate: String,
    cvv: String,
  },
  //   favorates: String[],
});

const CostumerModel =
  mongoose.models.costumers || mongoose.model("costumers", CostumerSchema);

export default CostumerModel;
