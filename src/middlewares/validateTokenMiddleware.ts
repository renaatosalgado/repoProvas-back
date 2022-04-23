import { NextFunction, Request, Response } from "express";
import * as authService from "../services/authService.js";
import * as userService from "../services/userService.js";
import jwt, { JwtPayload } from "jsonwebtoken";

export async function validateTokenMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authorization = req.headers.authorization;
  const token = authorization?.replace("Bearer ", "");
  if (!token) {
    throw {
      type: "unauthorized",
      message: "Esta ação necessita de autenticação.",
    };
  }

  const secretKey = process.env.JWT_SECRET;

  const data = jwt.verify(token, secretKey);

  const { sessionId } = data as JwtPayload;

  if (!sessionId)
    throw {
      type: "unauthorized",
      message: "Este token não é válido.",
    };

  const session = await authService.getSessionById(sessionId);

  if (!session) {
    throw {
      type: "unauthorized",
      message: "Sessão encerrada, por favor faça o login novamente.",
    };
  }

  const user = await userService.findById(session.userId);
  
  if (!user)
    throw {
      type: "unauthorized",
      message: "Usuário inexistente e/ou token inválido.",
    };

  res.locals.user = user;

  next();
}
