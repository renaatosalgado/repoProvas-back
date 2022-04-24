import * as disciplinesRepository from "../repositories/disciplinesRepository.js";

export async function listAll(termId: number) {
  const disciplines = await disciplinesRepository.listAll(termId);
  return disciplines;
}
