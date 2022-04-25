import * as teachersRepository from "../repositories/teachersRepository.js";

export async function listAll() {
  const teachers = await teachersRepository.listAll();

  return teachers;
}

export async function listTeacherTests(teacherId: number) {
  const tests = await teachersRepository.listTeacherTests(teacherId);
  return tests;
}

export async function listTeacherTestsCategories(teacherId: number) {
  const categories = await teachersRepository.listTeacherTestsCategories(
    teacherId
  );
  return categories;
}
