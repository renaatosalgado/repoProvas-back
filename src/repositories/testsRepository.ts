import client from "../database.js";

export async function listAll(disciplineId: number) {
  const tests = await client.test.findMany({
    where: {
      teachersDisciplines: {
        disciplineId: {
          equals: disciplineId,
        },
      },
    },
    include: {
      categories: {
        select: {
          name: true,
        },
      },
      teachersDisciplines: {
        select: {
          disciplineId: true,
          teachers: {
            select: {
              name: true,
            },
          },
        },
      },
    },
    orderBy: {
      categoryId: "asc",
    },
  });
  return tests;
}

export async function listTeacherTestsCategories(teacherId: number) {}
