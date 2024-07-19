import {
  CreateProduct,
  DeleteProduct,
  GetProducts,
  UpdateProduct,
} from "@/services/product-services";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      console.log("GET request to products");
      res.status(200).json(await GetProducts(req, res));
      break;
    case "POST":
      console.log("POST request to product");
      res.status(200).json(await CreateProduct(req, res));
      break;
    case "DELETE":
      console.log("DELETE request to product");
      res.status(200).json(await DeleteProduct(req, res));
      break;
    case "PUT":
      console.log("PUT request to product");
      res.status(200).json(await UpdateProduct(req, res));
      break;
  }
}
