import * as userRepository from "../repositories/userRepository.js";

export async function findById(userId: number) {
  const user = await userRepository.findById(userId);

  return user;
}
