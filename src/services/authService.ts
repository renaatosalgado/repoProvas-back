import { User } from "@prisma/client";
import * as userRepository from "../repositories/userRepository.js";
import * as authRepository from "../repositories/authRepository.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export type AuthData = Omit<User, "id">;

export async function verifyUserExistence(email: string) {
  const user = await userRepository.findByEmail(email);

  if (user)
    throw { type: "conflict", message: "Esse email já está cadastrado." };
}

function getPasswordHash(password: string) {
  const passwordHash = bcrypt.hashSync(password, 10);

  return passwordHash;
}

export async function createUser(signUpData: AuthData) {
  const passwordHash = getPasswordHash(signUpData.password);

  await userRepository.create({
    email: signUpData.email,
    password: passwordHash,
  });
}

export async function verifyPasswordAndEmail(loginData: AuthData) {
  const user = await userRepository.findByEmail(loginData.email);
  if (!user)
    throw {
      type: "unauthorized",
      message: "Email e/ou senha não cadastrados ou incorretos.",
    };

  if (!bcrypt.compareSync(loginData.password, user.password)) {
    throw {
      type: "unauthorized",
      message: "Email e/ou senha não cadastrados ou incorretos.",
    };
  }

  return user;
}

export async function createSession(userId: number) {
  await authRepository.createSession(userId);
}

export async function getSessionByUserId(userId: number) {
  const session = await authRepository.getSessionByUserId(userId);

  return session;
}

export async function getSessionById(sessionId: number) {
  const session = await authRepository.getSessionById(sessionId);

  return session;
}

export async function verifySession(userId: number) {
  const session = await getSessionByUserId(userId);
  if (session) return session;
  else {
    await createSession(userId);
    return await getSessionByUserId(userId);
  }
}

export async function generateJWTToken(sessionId: number) {
  const data = { sessionId };
  const secretKey = process.env.JWT_SECRET;

  const token = jwt.sign(data, secretKey);
  console.log({ token });

  return token;
}
