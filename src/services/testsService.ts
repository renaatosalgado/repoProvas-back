import * as testsRepository from "../repositories/testsRepository.js";

export async function listAll(disciplineId: number) {
  const tests = await testsRepository.listAll(disciplineId);
  return tests;
}


