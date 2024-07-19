import { CreateCostumer, GetCostumers } from "@/services/costumer-service";
import { Costumer } from "@/utils/types";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      console.log("GET request");
      res.status(200).json(await GetCostumers());
      break;
    case "POST":
      console.log("POST request");
      res.status(200).json(await CreateCostumer(req, res));
      break;
  }
}
