import * as termsRepository from "../repositories/termsRepository.js";

export async function listAll() {
  const terms = await termsRepository.listAll();
  return terms;
}
