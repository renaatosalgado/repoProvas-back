import { Request, Response } from "express";
import * as disciplineService from "../services/disciplineService.js";

export async function listAll(req: Request, res: Response) {
  const { termId } = req.params;
  const disciplines = await disciplineService.listAll(Number(termId));
  res.status(200).send(disciplines);
}
