import type { ApiQueryType } from "./apiTypes";

declare global {
  namespace Express {
    interface Request {
      validatedQuery?: ApiQueryType;
    }
  }
}
