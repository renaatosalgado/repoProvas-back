import { Request, Response } from "express";
import * as teacherService from "../services/teacherService.js";

export async function listAll(req: Request, res: Response) {
  const teachers = await teacherService.listAll();

  res.status(200).send(teachers);
}
