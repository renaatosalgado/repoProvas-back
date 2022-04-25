import client from "../database.js";

export async function listAll() {
  const teachers = await client.teacher.findMany({
    orderBy: {
      name: "asc",
    },
  });

  return teachers;
}

export async function listTeacherTests(teacherId: number) {
  const tests = await client.test.findMany({
    where: {
      teachersDisciplines: {
        teacherId: {
          equals: teacherId,
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
          disciplines: {
            select: {
              name: true,
            },
          },
        },
      },
    },
    orderBy: {
      name: "asc",
    },
  });
  return tests;
}

export async function listTeacherTestsCategories(teacherId: number) {
  // const categories = await client.teacher.findMany({
  //   where: {
  //     id: {
  //       equals: teacherId,
  //     },
  //   },
  //   include: {
  //     teachersDisciplines: {
  //       select: {
  //         tests: {
  //           select: {
  //             categories: {
  //               select: {
  //                 name: true,
  //               },
  //             },
  //           },
  //         },
  //       },
  //     },
  //   },
  // });

  const categories = await client.test.findMany({
    where: {
      teachersDisciplines: {
        teacherId: {
          equals: teacherId,
        },
      },
    },
    select: {
      categories: {
        select: {
          name: true,
        },
      },
    },
  });

  return categories;
}
