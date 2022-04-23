import client from "../database.js";

export async function createSession(userId: number) {
  await client.session.create({
    data: { userId },
  });
}

export async function getSessionById(sessionId: number) {
  const session = await client.session.findUnique({
    where: { id: sessionId },
  });

  return session;
}

export async function getSessionByUserId(userId: number) {
  const session = await client.session.findUnique({
    where: { userId },
  });

  return session;
}

export async function deleteSession(sessionId: number) {
  await client.session.delete({
    where: { id: sessionId },
  });
}
