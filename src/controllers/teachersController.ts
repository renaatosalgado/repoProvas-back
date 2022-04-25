import { Request, Response } from "express";
import * as teacherService from "../services/teacherService.js";

export async function listAll(req: Request, res: Response) {
  const teachers = await teacherService.listAll();

  res.status(200).send(teachers);
}

export async function listTeacherTests(req: Request, res: Response) {
  const { teacherId } = req.params;

  const tests = await teacherService.listTeacherTests(Number(teacherId));
  res.status(200).send(tests);
}

export async function listTeacherTestsCategories(req: Request, res: Response) {
  const { teacherId } = req.params;

  const categories = await teacherService.listTeacherTestsCategories(
    Number(teacherId)
  );
  res.status(200).send(categories);
}
