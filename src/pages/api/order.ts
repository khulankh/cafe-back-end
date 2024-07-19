import { CreateOrder, GetOrders } from "@/services/order-services";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      console.log("GET request (orders)");
      res.status(200).json(await GetOrders());
      break;
    case "POST":
      console.log("POST request (orders)");
      res.status(200).json(await CreateOrder(req, res));
      break;
  }
}
