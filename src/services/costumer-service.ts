import CostumerModel from "@/model/costumer-model";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import { connectToMongoDb } from "@/utils/db";

await connectToMongoDb();
export const CreateCostumer = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const body = req.body;
  const password = body.password;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const costumerData = { ...body, password: hashedPassword };
  console.log(costumerData);
  try {
    const createCostumer = await CostumerModel.create(costumerData);
    res.status(200).send(createCostumer._id);
  } catch (err) {
    console.error("Error creating costumer:", err);
  }
};

export const GetCostumers = async () => {
  try {
    return await CostumerModel.find({});
  } catch (err) {
    console.error("Error fetching costumers:", err);
  }
};
