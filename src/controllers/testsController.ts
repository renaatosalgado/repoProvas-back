import { Request, Response } from "express";
import * as testsService from "../services/testsService.js";

export async function listAll(req: Request, res: Response) {
  const { disciplineId } = req.params;

  const tests = await testsService.listAll(Number(disciplineId));
  res.status(200).send(tests);
}
