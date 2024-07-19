import mongoose from "mongoose";

export const connectToMongoDb = async () => {
  try {
    const mongoUri =
      "mongodb+srv://khulankh:%40Pi46895@cluster0.tt8nuyt.mongodb.net/cafeDB";
    await mongoose.connect(mongoUri);
    console.log("Database was connected");
  } catch (err) {
    console.log("Error");
    console.log(err);
  }
};
