import { Request, Response } from "express";
import * as authService from "../services/authService.js";

export async function createUser(req: Request, res: Response) {
  const { email, password }: authService.AuthData = req.body;

  await authService.verifyUserExistence(email);

  authService.createUser({ email, password });

  res.sendStatus(201);
}

export async function login(req: Request, res: Response) {
  const { email, password }: authService.AuthData = req.body;

  const user = await authService.verifyPasswordAndEmail({ email, password });

  const session = await authService.verifySession(user.id);

  const token = await authService.generateJWTToken(session.id);

  res.status(200).send(token);
}
