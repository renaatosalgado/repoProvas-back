import client from "../database.js";

export async function listAll() {
  const teachers = await client.teacher.findMany({
      orderBy: {
          name: "asc"
      }
  });
  console.log(teachers)

  return teachers;
}
