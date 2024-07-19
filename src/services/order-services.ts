import OrderModel from "@/model/order-model";
import { connectToMongoDb } from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";

await connectToMongoDb();
export const CreateOrder = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const orderBody = req.body;
  try {
    const order = await OrderModel.create(orderBody);
    res.status(200).send(order._id);
  } catch (err) {
    console.error("Error creating order:", err);
  }
};

export const GetOrders = async () => {
  try {
    return await OrderModel.find({});
  } catch (err) {
    console.error("Error fetching orders:", err);
  }
};
