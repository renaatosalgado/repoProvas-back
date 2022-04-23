import client from "../database.js";
import * as authService from "../services/authService.js";

export async function findByEmail(email: string) {
  const user = await client.user.findUnique({
    where: {
      email: email,
    },
  });

  return user;
}

export async function create(signUpData: authService.AuthData) {  
  await client.user.create({
    data: signUpData,
  });
}
