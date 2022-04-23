import { User } from "@prisma/client";
import * as userRepository from "../repositories/userRepository.js";
import bcrypt from "bcrypt";

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
