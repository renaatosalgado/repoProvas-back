type AppErrorTypes =
  | "not_found"
  | "invalidInput"
  | "unauthorized"
  | "conflict"
  | "forbidden"
  | "require_auth";

export interface AppError {
  type: AppErrorTypes;
  message: string;
}

export function isAppError(error: object): error is AppError {
  return (error as AppError).type !== undefined;
}

export function errorTypeToStatusCode(type: AppErrorTypes) {
  if (type === "not_found") return 404;
  if (type === "invalidInput") return 409;
  if (type === "unauthorized") return 401;
  if (type === "conflict") return 409;
  if (type === "forbidden") return 403;
  if (type === "require_auth") return 511;
}
