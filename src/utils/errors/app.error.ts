/**
 * Custom application error interface and classes
 */
export interface AppError extends Error {
  statusCode: number;
}

/**
 * @description: Internal Server Error
 */
export class InternalServerError implements AppError {
  statusCode: number;
  message: string;
  name: string;

  constructor(message: string) {
    this.statusCode = 500;
    this.message = message;
    this.name = "InternalServerError";
  }
}
