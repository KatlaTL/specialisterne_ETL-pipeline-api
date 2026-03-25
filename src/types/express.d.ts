import type { ApiQueryType, ApiSensorType } from "./apiTypes";

declare global {
  namespace Express {
    interface Request {
      validatedQuery?: ApiQueryType;
      validatedSensor?: ApiSensorType;
    }
  }
}
