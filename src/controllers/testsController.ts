import { Request, Response } from "express";

export async function teste(req: Request, res: Response) {
  res.status(200).send("maravilhoso jwt");
}
