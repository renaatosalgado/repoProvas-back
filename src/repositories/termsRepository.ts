import client from "../database.js";

export async function listAll() {
  const terms = await client.term.findMany();
  return terms;
}
