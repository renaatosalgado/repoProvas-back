import * as teachersRepository from "../repositories/teachersRepository.js";

export async function listAll() {
  const teachers = await teachersRepository.listAll();

  return teachers;
}
