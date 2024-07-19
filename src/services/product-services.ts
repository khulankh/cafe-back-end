import ProductModel from "@/model/product-model";
import { connectToMongoDb } from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";

await connectToMongoDb();
export const CreateProduct = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const body = req.body;
  try {
    const product = await ProductModel.create(body);
    res.status(200).send(product._id);
  } catch (err) {
    console.log("Error creating product:", err);
  }
};

export const GetProducts = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const product = await ProductModel.find({});
    res.status(200).send(product);
  } catch (err) {
    console.log("Error fetching products:", err);
  }
};

export const DeleteProduct = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { _id } = req.body;
  console.log(_id);
  try {
    const product = await ProductModel.findByIdAndDelete(_id);
    res.status(200).send(product._id);
  } catch (err) {
    console.log("Error deleting product:", err);
  }
};

export const UpdateProduct = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { _id } = req.body;
  const body = req.body;
  console.log(_id);
  try {
    const updatedProduct = await ProductModel.findByIdAndUpdate(_id, body, {
      new: true,
    });
    res.status(200).send(updatedProduct);
  } catch (err) {
    console.log("Error deleting product:", err);
  }
};
