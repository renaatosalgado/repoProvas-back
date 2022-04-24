import client from "../database.js";

export async function listAll(termId: number) {
  const disciplines = await client.discipline.findMany({
    where: {
      termId: {
        equals: termId,
      },
    },
  });

  return disciplines;
}
