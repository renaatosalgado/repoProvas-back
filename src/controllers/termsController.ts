import { Request, Response } from "express";
import * as termService from "../services/termService.js";

export async function listAll(req: Request, res: Response) {
  const terms = await termService.listAll();
  res.status(200).send(terms);
}
