export {};

declare global {
  namespace Express {
    interface Request {
      email: string;
      id: string;
    }
  }
}